import { ReactNode } from 'react'

interface ChartCardProps {
  title: string
  children: ReactNode
  className?: string
}

export default function ChartCard({ title, children, className = '' }: ChartCardProps) {
  return (
    <div className={`rounded-lg bg-white p-6 shadow ${className}`}>
      <h3 className="text-base font-semibold leading-6 text-gray-900">{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  )
} 