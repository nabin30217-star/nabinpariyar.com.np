import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MagneticButton from '@/components/animations/MagneticButton'

describe('MagneticButton', () => {
    it('renders children correctly', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });

        render(
            <MagneticButton>
                <button>Test Button</button>
            </MagneticButton>
        )

        expect(screen.getByText('Test Button')).toBeInTheDocument()
    })
})
