import { useState } from 'react'
import {
  UsersIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  BellIcon,
  ClockIcon,
  BuildingStorefrontIcon,
  StarIcon,
  CheckCircleIcon,
  XCircleIcon,
  HeartIcon,
  CameraIcon,
  CakeIcon,
  SparklesIcon,
  MapPinIcon,
  TagIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

interface Metric {
  id: number
  title: string
  value: string | number
  change: number
  icon: typeof UsersIcon
  description: string
}

interface RecentActivity {
  id: number
  type: 'Booking' | 'Payment' | 'Review' | 'Dispute' | 'Vendor' | 'Couple' | 'Login'
  title: string
  time: string
  status: 'Completed' | 'Pending' | 'Failed'
  icon: typeof ClockIcon
  user?: string
  location?: string
}

interface VendorMetric {
  name: string
  revenue: number
  bookings: number
  rating: number
  status: 'Active' | 'Inactive' | 'Pending'
  category: string
  location: string
}

interface WeddingMetric {
  date: string
  couple: string
  venue: string
  budget: number
  status: 'Confirmed' | 'Pending' | 'Completed'
  vendorCount: number
}

const metrics: Metric[] = [
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
    title: 'Active Couples',
    value: '2,338',
    change: 12.5,
    icon: UsersIcon,
    description: 'Registered couples on the platform',
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
    title: 'Weddings This Month',
    value: '89',
    change: 15.4,
    icon: CalendarIcon,
    description: 'Scheduled weddings',
  },
  {
    id: 5,
    title: 'Average Rating',
    value: '4.8',
    change: 2.1,
    icon: StarIcon,
    description: 'Average vendor rating from couple reviews',
  },
]

const recentActivities: RecentActivity[] = [
  {
    id: 1,
    type: 'Login',
    title: 'Admin Login',
    time: '2 hours ago',
    status: 'Completed',
    icon: ClockIcon,
    user: 'Admin User',
    location: 'Lagos, Nigeria',
  },
  {
    id: 2,
    type: 'Booking',
    title: 'Chioma & Emeka booked Elegant Affairs',
    time: '3 hours ago',
    status: 'Completed',
    icon: SparklesIcon,
  },
  {
    id: 3,
    type: 'Payment',
    title: 'Payment received from Folake & Tunde',
    time: '5 hours ago',
    status: 'Completed',
    icon: CurrencyDollarIcon,
  },
  {
    id: 4,
    type: 'Login',
    title: 'Vendor Login',
    time: '1 day ago',
    status: 'Completed',
    icon: ClockIcon,
    user: 'Elegant Affairs Nigeria',
    location: 'Lagos, Nigeria',
  },
  {
    id: 5,
    type: 'Login',
    title: 'Couple Login',
    time: '1 day ago',
    status: 'Completed',
    icon: ClockIcon,
    user: 'Aisha & Mohammed',
    location: 'Abuja, Nigeria',
  },
]

const topVendors: VendorMetric[] = [
  {
    name: 'Elegant Affairs Nigeria',
    revenue: 12500000,
    bookings: 15,
    rating: 4.9,
    status: 'Active',
    category: 'Venue',
    location: 'Lagos, Nigeria',
  },
  {
    name: 'Royal Photography Studio',
    revenue: 9800000,
    bookings: 12,
    rating: 4.8,
    status: 'Active',
    category: 'Photography',
    location: 'Abuja, Nigeria',
  },
  {
    name: 'Taste of Nigeria Catering',
    revenue: 8500000,
    bookings: 10,
    rating: 4.7,
    status: 'Active',
    category: 'Catering',
    location: 'Port Harcourt, Nigeria',
  },
  {
    name: 'Heritage Events Center',
    revenue: 7500000,
    bookings: 8,
    rating: 4.6,
    status: 'Active',
    category: 'Venue',
    location: 'Benin City, Nigeria',
  },
]

const upcomingWeddings: WeddingMetric[] = [
  {
    date: '2024-06-15',
    couple: 'Chioma & Emeka',
    venue: 'Elegant Affairs Nigeria',
    budget: 2500000,
    status: 'Confirmed',
    vendorCount: 5,
  },
  {
    date: '2024-06-22',
    couple: 'Folake & Tunde',
    venue: 'Heritage Events Center',
    budget: 3000000,
    status: 'Pending',
    vendorCount: 3,
  },
  {
    date: '2024-07-01',
    couple: 'Aisha & Mohammed',
    venue: 'Royal Garden Events',
    budget: 2800000,
    status: 'Confirmed',
    vendorCount: 4,
  },
]

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month')
  const [selectedChartPeriod, setSelectedChartPeriod] = useState<'daily' | 'weekly' | 'monthly'>('weekly')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10 pt-16">
      {/* Header Section */}
      <div className="border-b border-[#00838F]/10 bg-gradient-to-r from-[#CCFDF2] to-white px-4 sm:px-6 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#00838F]">Dashboard</h1>
              <p className="mt-2 text-sm text-[#B52344]">
                Welcome back! Here's what's happening with your wedding platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex gap-2 rounded-lg bg-white p-1 shadow-sm ring-1 ring-inset ring-[#00838F]/20 w-full sm:w-auto">
                {(['week', 'month', 'year'] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    className={`rounded-md px-3 py-1.5 text-sm font-medium flex-1 sm:flex-none ${
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
                className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F] w-full sm:w-auto justify-center"
              >
                <BellIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                View Notifications
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-[#00838F]/10 transition-all hover:shadow-md"
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

        {/* Charts and Activity */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#00838F]/10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#00838F]">Revenue Overview</h3>
              <div className="flex gap-2">
                {(['daily', 'weekly', 'monthly'] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    className={`rounded-lg px-3 py-1 text-sm font-medium ${
                      selectedChartPeriod === period
                        ? 'bg-[#CCFDF2] text-[#00838F]'
                        : 'bg-white text-[#00838F] ring-1 ring-inset ring-[#00838F]/20'
                    }`}
                    onClick={() => setSelectedChartPeriod(period)}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 h-80 bg-[#CCFDF2]/20 rounded-xl flex items-center justify-center">
              <p className="text-[#B52344]">Revenue chart coming soon...</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-[#00838F]">Recent Activity</h3>
            </div>
            <div className="divide-y divide-[#00838F]/10">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-[#CCFDF2]/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFDF2]">
                      <activity.icon className="h-5 w-5 text-[#00838F]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#00838F]">{activity.title}</p>
                      {activity.user && (
                        <p className="text-xs text-[#B52344] mt-1">
                          {activity.user} {activity.location && `• ${activity.location}`}
                        </p>
                      )}
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-xs text-[#B52344]">{activity.time}</span>
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            activity.status === 'Completed'
                              ? 'bg-[#CCFDF2] text-[#00838F]'
                              : activity.status === 'Pending'
                              ? 'bg-[#ECEBA2] text-[#B52344]'
                              : 'bg-[#EB1948]/10 text-[#EB1948]'
                          }`}
                        >
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Weddings and Vendor Stats */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Upcoming Weddings */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-[#00838F]">Upcoming Weddings</h3>
            </div>
            <div className="divide-y divide-[#00838F]/10">
              {upcomingWeddings.map((wedding, index) => (
                <div key={index} className="p-4 hover:bg-[#CCFDF2]/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#00838F]">{wedding.couple}</p>
                      <div className="mt-1 flex items-center gap-4">
                        <span className="text-xs text-[#B52344]">{wedding.date}</span>
                        <span className="text-xs text-[#00838F]">{wedding.venue}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#00838F]">{wedding.budget.toLocaleString()} Naira</p>
                      <p className="text-xs text-[#B52344]">{wedding.vendorCount} vendors</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Vendors */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-[#00838F]">Top Performing Vendors</h3>
            </div>
            <div className="divide-y divide-[#00838F]/10">
              {topVendors.map((vendor, index) => (
                <div key={index} className="p-4 hover:bg-[#CCFDF2]/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFDF2]">
                        <BuildingStorefrontIcon className="h-5 w-5 text-[#00838F]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#00838F]">{vendor.name}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <TagIcon className="h-4 w-4 text-[#B52344]" />
                          <span className="text-xs text-[#B52344]">{vendor.category}</span>
                          <MapPinIcon className="ml-2 h-4 w-4 text-[#B52344]" />
                          <span className="text-xs text-[#B52344]">{vendor.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#00838F]">{vendor.revenue.toLocaleString()} Naira</p>
                      <div className="flex items-center gap-2 mt-1">
                        <StarIcon className="h-4 w-4 text-[#B52344]" />
                        <span className="text-xs text-[#B52344]">{vendor.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Popular Categories */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-[#00838F]">Popular Categories</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Venues', revenue: 4268600, change: 5 },
                  { name: 'Photography', revenue: 602050, change: 0 },
                  { name: 'Catering', revenue: 1530690, change: 8 },
                  { name: 'Decoration', revenue: 980000, change: 12 },
                  { name: 'Music', revenue: 750000, change: -2 },
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                        <TagIcon className="h-4 w-4 text-[#00838F]" />
                      </div>
                      <span className="text-sm text-[#00838F]">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#B52344]">₦{(category.revenue).toLocaleString()}</span>
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

          {/* User Engagement */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-[#00838F]">Platform Engagement</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                      <UserGroupIcon className="h-4 w-4 text-[#00838F]" />
                    </div>
                    <span className="text-sm text-[#00838F]">Active Couples</span>
                  </div>
                  <span className="text-sm font-medium text-[#B52344]">2,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                      <BuildingStorefrontIcon className="h-4 w-4 text-[#00838F]" />
                    </div>
                    <span className="text-sm text-[#00838F]">Active Vendors</span>
                  </div>
                  <span className="text-sm font-medium text-[#B52344]">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                      <ChatBubbleLeftRightIcon className="h-4 w-4 text-[#00838F]" />
                    </div>
                    <span className="text-sm text-[#00838F]">Inquiries This Month</span>
                  </div>
                  <span className="text-sm font-medium text-[#B52344]">1,234</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Health */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
            <div className="border-b border-[#00838F]/10 px-6 py-4">
              <h3 className="text-lg font-semibold text-[#00838F]">Platform Performance</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                      <CheckCircleIcon className="h-4 w-4 text-[#00838F]" />
                    </div>
                    <span className="text-sm text-[#00838F]">Booking Success Rate</span>
                  </div>
                  <span className="text-sm font-medium text-[#B52344]">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                      <XCircleIcon className="h-4 w-4 text-[#00838F]" />
                    </div>
                    <span className="text-sm text-[#00838F]">Pending Approvals</span>
                  </div>
                  <span className="text-sm font-medium text-[#B52344]">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFDF2]">
                      <StarIcon className="h-4 w-4 text-[#00838F]" />
                    </div>
                    <span className="text-sm text-[#00838F]">Average Response Time</span>
                  </div>
                  <span className="text-sm font-medium text-[#B52344]">2.5h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}