import { useState } from 'react'
import {
  ChartBarIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'

interface ReportMetric {
  id: number
  title: string
  value: string | number
  change: number
  icon: typeof ChartBarIcon
  description: string
}

interface ReportFilter {
  startDate: string
  endDate: string
  category: string
  location: string
}

const metrics: ReportMetric[] = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '₦45,231,890',
    change: 20.1,
    icon: CurrencyDollarIcon,
    description: 'Total revenue across all services',
  },
  {
    id: 2,
    title: 'Total Bookings',
    value: '1,234',
    change: 15.4,
    icon: CalendarIcon,
    description: 'Total bookings this period',
  },
  {
    id: 3,
    title: 'Active Vendors',
    value: '156',
    change: 8.3,
    icon: BuildingStorefrontIcon,
    description: 'Active vendors on the platform',
  },
  {
    id: 4,
    title: 'New Couples',
    value: '289',
    change: 12.5,
    icon: UsersIcon,
    description: 'New couples registered',
  },
]

const categories = [
  'All Categories',
  'Venues',
  'Photography',
  'Catering',
  'Decoration',
  'Music',
  'Attire',
  'Transportation',
]

const locations = [
  'All Locations',
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'Benin City',
  'Ibadan',
  'Calabar',
  'Kano',
]

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month')
  const [filters, setFilters] = useState<ReportFilter>({
    startDate: '',
    endDate: '',
    category: 'All Categories',
    location: 'All Locations',
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      {/* Header Section */}
      <div className="border-b border-[#00838F]/10 bg-gradient-to-r from-[#CCFDF2] to-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#00838F]">Reports & Analytics</h1>
              <p className="mt-2 text-sm text-[#B52344]">
                Comprehensive insights and analytics for your wedding platform.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 rounded-lg bg-white p-1 shadow-sm ring-1 ring-inset ring-[#00838F]/20">
                {(['week', 'month', 'year'] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                      selectedPeriod === period
                        ? 'bg-[#00838F] text-white'
                        : 'text-[#00838F] hover:bg-[#CCFDF2]'
                    }`}
                    onClick={() => setSelectedPeriod(period)}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
              >
                <ArrowPathIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Refresh Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Filters */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#00838F]/10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#00838F]">Report Filters</h2>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#CCFDF2] px-3 py-1.5 text-sm font-medium text-[#00838F] hover:bg-[#00838F] hover:text-white"
            >
              <FunnelIcon className="h-4 w-4" />
              Apply Filters
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-[#00838F]">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                className="mt-1 block w-full rounded-md border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-[#00838F]">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                className="mt-1 block w-full rounded-md border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-[#00838F]">
                Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full rounded-md border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-[#00838F]">
                Location
              </label>
              <select
                id="location"
                className="mt-1 block w-full rounded-md border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#00838F]/10 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#CCFDF2] group-hover:bg-[#00838F] group-hover:text-white transition-colors">
                  <metric.icon className="h-6 w-6 text-[#00838F] group-hover:text-white" />
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    metric.change >= 0
                      ? 'bg-[#CCFDF2] text-[#00838F]'
                      : 'bg-[#EB1948]/10 text-[#EB1948]'
                  }`}
                >
                  {metric.change >= 0 ? (
                    <ArrowUpIcon className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownIcon className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(metric.change)}%
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#00838F]">{metric.value}</h3>
                <p className="mt-1 text-sm text-[#B52344]">{metric.title}</p>
                <p className="mt-2 text-xs text-[#00838F]/60">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Revenue Trend */}
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#00838F]/10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#00838F]">Revenue Trend</h3>
              <button
                type="button"
                className="rounded-lg bg-[#CCFDF2] px-3 py-1 text-sm font-medium text-[#00838F] hover:bg-[#00838F] hover:text-white"
              >
                Download
              </button>
            </div>
            <div className="mt-4 h-80 bg-[#CCFDF2]/20 rounded-xl flex items-center justify-center">
              <p className="text-[#B52344]">Revenue trend chart coming soon...</p>
            </div>
          </div>

          {/* Booking Distribution */}
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#00838F]/10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#00838F]">Booking Distribution</h3>
              <button
                type="button"
                className="rounded-lg bg-[#CCFDF2] px-3 py-1 text-sm font-medium text-[#00838F] hover:bg-[#00838F] hover:text-white"
              >
                Download
              </button>
            </div>
            <div className="mt-4 h-80 bg-[#CCFDF2]/20 rounded-xl flex items-center justify-center">
              <p className="text-[#B52344]">Booking distribution chart coming soon...</p>
            </div>
          </div>
        </div>

        {/* Detailed Reports */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Top Performing Categories */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#00838F]">Top Performing Categories</h3>
                <button
                  type="button"
                  className="rounded-lg bg-[#CCFDF2] px-3 py-1 text-sm font-medium text-[#00838F] hover:bg-[#00838F] hover:text-white"
                >
                  <DocumentTextIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Venues', revenue: 4268600, bookings: 156, change: 5 },
                  { name: 'Photography', revenue: 602050, bookings: 89, change: 0 },
                  { name: 'Catering', revenue: 1530690, bookings: 234, change: 8 },
                  { name: 'Decoration', revenue: 980000, bookings: 178, change: 12 },
                  { name: 'Music', revenue: 750000, bookings: 145, change: -2 },
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                        <ChartBarIcon className="h-4 w-4 text-[#00838F]" />
                      </div>
                      <div>
                        <span className="text-sm text-[#00838F]">{category.name}</span>
                        <p className="text-xs text-[#B52344]">{category.bookings} bookings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#B52344]">₦{category.revenue.toLocaleString()}</span>
                      <span className={`inline-flex items-center text-xs font-medium ${
                        category.change >= 0 ? 'text-[#00838F]' : 'text-[#EB1948]'
                      }`}>
                        {category.change >= 0 ? (
                          <ArrowUpIcon className="mr-1 h-3 w-3" />
                        ) : (
                          <ArrowDownIcon className="mr-1 h-3 w-3" />
                        )}
                        {Math.abs(category.change)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location Performance */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#00838F]">Location Performance</h3>
                <button
                  type="button"
                  className="rounded-lg bg-[#CCFDF2] px-3 py-1 text-sm font-medium text-[#00838F] hover:bg-[#00838F] hover:text-white"
                >
                  <DocumentTextIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Lagos', revenue: 2568600, bookings: 456, change: 15 },
                  { name: 'Abuja', revenue: 1820500, bookings: 289, change: 8 },
                  { name: 'Port Harcourt', revenue: 1530690, bookings: 234, change: 12 },
                  { name: 'Benin City', revenue: 980000, bookings: 178, change: 5 },
                  { name: 'Ibadan', revenue: 750000, bookings: 145, change: -2 },
                ].map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                        <BuildingStorefrontIcon className="h-4 w-4 text-[#00838F]" />
                      </div>
                      <div>
                        <span className="text-sm text-[#00838F]">{location.name}</span>
                        <p className="text-xs text-[#B52344]">{location.bookings} bookings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#B52344]">₦{location.revenue.toLocaleString()}</span>
                      <span className={`inline-flex items-center text-xs font-medium ${
                        location.change >= 0 ? 'text-[#00838F]' : 'text-[#EB1948]'
                      }`}>
                        {location.change >= 0 ? (
                          <ArrowUpIcon className="mr-1 h-3 w-3" />
                        ) : (
                          <ArrowDownIcon className="mr-1 h-3 w-3" />
                        )}
                        {Math.abs(location.change)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 