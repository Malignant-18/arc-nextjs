import React from 'react'
import { cn } from '@/utils/cn'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 disabled:opacity-50',
        {
          'bg-primary-600 text-white hover:bg-primary-700': variant === 'primary',
          'bg-secondary-600 text-white hover:bg-secondary-700': variant === 'secondary',
          'border border-gray-300 bg-transparent hover:bg-gray-50': variant === 'outline',
          'bg-transparent hover:bg-gray-50': variant === 'ghost',
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-sm': size === 'md',
          'h-12 px-6 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button