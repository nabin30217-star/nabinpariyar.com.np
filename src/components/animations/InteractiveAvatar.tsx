/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useReducedMotion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

function AvatarModel({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    const group = useRef<THREE.Group>(null);
    const prefersReduced = useReducedMotion();
    const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
    const [shadowY, setShadowY] = useState(-1);

    useEffect(() => {
        // Fix materials
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const material = (child as THREE.Mesh)
                    .material as THREE.MeshStandardMaterial;
                if (material) {
                    material.metalness = 0.1;
                    material.roughness = 0.8;
                    material.envMapIntensity = 0;
                    material.needsUpdate = true;
                }
            }
        });

        // Measure the model's actual bounding box
        const box = new THREE.Box3().setFromObject(scene);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Move camera to look at the model's center and frame the full height
        const fovRad = camera.fov * (Math.PI / 180);
        const distance = (size.y / 2) / Math.tan(fovRad / 2) * 1.2; // 20% margin

        camera.position.set(0, center.y, distance);
        camera.lookAt(center.x, center.y, center.z);
        camera.updateProjectionMatrix();

        // Store the feet position for the shadow
        setShadowY(box.min.y - 0.05);
    }, [scene, camera]);

    useFrame((state) => {
        if (prefersReduced || !group.current) return;

        const targetX = (state.pointer.x * Math.PI) / 8;
        const targetY = (state.pointer.y * Math.PI) / 12;

        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            targetX,
            0.05,
        );
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            -targetY,
            0.05,
        );
    });

    return (
        <>
            <group ref={group} dispose={null}>
                <primitive object={scene} />
            </group>
            <ContactShadows
                position={[0, shadowY, 0]}
                opacity={0.4}
                scale={5}
                blur={2.5}
                far={4}
                color="#000000"
            />
        </>
    );
}

export default function InteractiveAvatar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative z-10 flex h-[350px] w-[350px] items-center justify-center lg:h-[450px] lg:w-[450px]">
            <div className="relative h-full w-full overflow-visible">
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                    <ambientLight intensity={0.9} />
                    <directionalLight position={[10, 10, 5]} intensity={2.0} />

                    <Suspense fallback={null}>
                        <Float
                            speed={2}
                            rotationIntensity={0.1}
                            floatIntensity={0.3}
                            floatingRange={[-0.05, 0.05]}
                        >
                            <AvatarModel url="/avatar.glb" />
                        </Float>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
