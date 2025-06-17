import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'

interface Vendor {
  id: number
  name: string
  category: string
  location: string
  status: 'Active' | 'Pending' | 'Suspended'
  rating: number
  joinedDate: string
  totalBookings: number
}

const vendors: Vendor[] = [
  {
    id: 1,
    name: 'Elegant Events',
    category: 'Venue',
    location: 'New York, NY',
    status: 'Active',
    rating: 4.8,
    joinedDate: '2023-01-15',
    totalBookings: 45,
  },
  {
    id: 2,
    name: 'Dream Photography',
    category: 'Photography',
    location: 'Los Angeles, CA',
    status: 'Active',
    rating: 4.9,
    joinedDate: '2023-02-20',
    totalBookings: 38,
  },
  {
    id: 3,
    name: 'Gourmet Catering',
    category: 'Catering',
    location: 'Chicago, IL',
    status: 'Pending',
    rating: 0,
    joinedDate: '2024-03-01',
    totalBookings: 0,
  },
  {
    id: 4,
    name: 'Floral Dreams',
    category: 'Florist',
    location: 'Miami, FL',
    status: 'Suspended',
    rating: 3.2,
    joinedDate: '2023-06-10',
    totalBookings: 12,
  },
]

export default function Vendors() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || vendor.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00838F]">Vendors</h1>
        <p className="mt-2 text-sm text-[#B52344]">
          Manage and monitor all wedding vendors on the platform.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-[#00838F]" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
              placeholder="Search vendors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
        >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Add Vendor
        </button>
      </div>

      {/* Vendors Table */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-xl border border-[#00838F]/20 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-[#00838F]/20">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#00838F] sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Category
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Location
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Rating
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Joined
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Bookings
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#00838F]/20">
                  {filteredVendors.map((vendor) => (
                    <tr key={vendor.id} className="hover:bg-[#CCFDF2]/10">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#00838F] sm:pl-6">
                        {vendor.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {vendor.category}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {vendor.location}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            vendor.status === 'Active'
                              ? 'bg-[#CCFDF2] text-[#00838F]'
                              : vendor.status === 'Pending'
                              ? 'bg-[#ECEBA2] text-[#B52344]'
                              : 'bg-[#EB1948]/10 text-[#EB1948]'
                          }`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {vendor.rating > 0 ? vendor.rating.toFixed(1) : 'N/A'}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {new Date(vendor.joinedDate).toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {vendor.totalBookings}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            className="rounded-lg bg-[#CCFDF2] p-2 text-[#00838F] hover:bg-[#CCFDF2]/80"
                          >
                            <EyeIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="rounded-lg bg-[#ECEBA2] p-2 text-[#B52344] hover:bg-[#ECEBA2]/80"
                          >
                            <PencilIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="rounded-lg bg-[#EB1948]/10 p-2 text-[#EB1948] hover:bg-[#EB1948]/20"
                          >
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 