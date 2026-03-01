import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from '@/components/ui/Button'

describe('Button', () => {
    it('renders children correctly', () => {
        render(<Button>Click Me</Button>)
        expect(screen.getByText('Click Me')).toBeInTheDocument()
    })

    it('renders as an anchor when href is provided', () => {
        render(<Button href="/about">About Us</Button>)
        const link = screen.getByRole('link', { name: "About Us" })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/about')
    })

    it('handles disabled state properly', () => {
        render(<Button disabled>Disabled Btn</Button>)
        expect(screen.getByRole('button')).toBeDisabled()
    })

    it('triggers onClick handler', () => {
        const handleClick = vi.fn()
        render(<Button onClick={handleClick}>Click Me</Button>)
        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
