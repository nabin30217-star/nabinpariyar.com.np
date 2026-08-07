import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Nabin Pariyar — full-stack web and Android developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const profile = await readFile(path.join(process.cwd(), "public", "images", "nabin-profile.png"));
  const profileUrl = `data:image/png;base64,${profile.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 64,
          padding: "64px 72px",
          background: "#151411",
          color: "#f3eee3",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 650,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 2.4,
              textTransform: "uppercase",
              color: "#e05a33",
            }}
          >
            Full-stack web / Android developer / Nepal
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2.4,
            }}
          >
            Web systems and Android apps, built end to end.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 24,
              color: "#c9bead",
            }}
          >
            TypeScript / Next.js / Kotlin / Compose / Garment ERP
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 340,
            height: 470,
            overflow: "hidden",
            border: "2px solid #e05a33",
            background: "#201e19",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileUrl}
            alt="Portrait of Nabin Pariyar"
            width="340"
            height="470"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
