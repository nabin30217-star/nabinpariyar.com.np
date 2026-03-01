import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ThemeProvider, { useTheme } from '@/components/theme/ThemeProvider'

// A small component to test the context
function ThemeConsumer() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="resolvedTheme">{resolvedTheme}</span>
            <button onClick={() => setTheme('light')}>Set Light</button>
            <button onClick={() => setTheme('dark')}>Set Dark</button>
        </div>
    )
}

describe('ThemeProvider', () => {
    beforeEach(() => {
        localStorage.clear()
        document.documentElement.removeAttribute('data-theme')
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
    })

    it('initializes with dark theme by default', () => {
        render(
            <ThemeProvider>
                <ThemeConsumer />
            </ThemeProvider>
        )
        expect(screen.getByTestId('theme')).toHaveTextContent('dark')
        expect(screen.getByTestId('resolvedTheme')).toHaveTextContent('dark')
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    })

    it('toggles theme when setTheme is called', () => {
        render(
            <ThemeProvider>
                <ThemeConsumer />
            </ThemeProvider>
        )
        act(() => {
            screen.getByText('Set Light').click()
        })

        expect(screen.getByTestId('theme')).toHaveTextContent('light')
        expect(screen.getByTestId('resolvedTheme')).toHaveTextContent('light')
        expect(document.documentElement.getAttribute('data-theme')).toBe('light')
        expect(localStorage.getItem('theme')).toBe('light')
    })
})
