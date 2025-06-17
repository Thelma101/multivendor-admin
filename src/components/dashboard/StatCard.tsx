import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative'
  icon: ReactNode
  color: string
}

export default function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
  color,
}: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
      <dt>
        <div className={`absolute rounded-md ${color} p-3`}>
          {icon}
        </div>
        <p className="ml-16 truncate text-sm font-medium text-gray-500">
          {title}
        </p>
      </dt>
      <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {change && (
          <p
            className={`ml-2 flex items-baseline text-sm font-semibold ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {change}
          </p>
        )}
      </dd>
    </div>
  )
} 