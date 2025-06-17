import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'

interface Couple {
  id: number
  name: string
  weddingDate: string
  location: string
  status: 'Planning' | 'Booked' | 'Completed'
  budget: number
  vendors: number
  lastActive: string
}

const couples: Couple[] = [
  {
    id: 1,
    name: 'Sarah & John',
    weddingDate: '2024-06-15',
    location: 'New York, NY',
    status: 'Planning',
    budget: 50000,
    vendors: 3,
    lastActive: '2024-03-15',
  },
  {
    id: 2,
    name: 'Emily & Michael',
    weddingDate: '2024-08-20',
    location: 'Los Angeles, CA',
    status: 'Booked',
    budget: 75000,
    vendors: 5,
    lastActive: '2024-03-14',
  },
  {
    id: 3,
    name: 'Jessica & David',
    weddingDate: '2024-09-10',
    location: 'Chicago, IL',
    status: 'Planning',
    budget: 45000,
    vendors: 2,
    lastActive: '2024-03-13',
  },
  {
    id: 4,
    name: 'Amanda & Robert',
    weddingDate: '2024-07-05',
    location: 'Miami, FL',
    status: 'Completed',
    budget: 60000,
    vendors: 6,
    lastActive: '2024-03-12',
  },
]

export default function Couples() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const filteredCouples = couples.filter((couple) => {
    const matchesSearch = couple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      couple.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || couple.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00838F]">Couples</h1>
        <p className="mt-2 text-sm text-[#B52344]">
          Manage and track all couples planning their weddings.
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
              placeholder="Search couples..."
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
              <option value="Planning">Planning</option>
              <option value="Booked">Booked</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
        >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Add Couple
        </button>
      </div>

      {/* Couples Table */}
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
                      Wedding Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Location
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Budget
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Vendors
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#00838F]">
                      Last Active
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#00838F]/20">
                  {filteredCouples.map((couple) => (
                    <tr key={couple.id} className="hover:bg-[#CCFDF2]/10">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#00838F] sm:pl-6">
                        {couple.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {new Date(couple.weddingDate).toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {couple.location}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            couple.status === 'Planning'
                              ? 'bg-[#CCFDF2] text-[#00838F]'
                              : couple.status === 'Booked'
                              ? 'bg-[#ECEBA2] text-[#B52344]'
                              : 'bg-[#EB1948]/10 text-[#EB1948]'
                          }`}
                        >
                          {couple.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        ${couple.budget.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {couple.vendors}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#B52344]">
                        {new Date(couple.lastActive).toLocaleDateString()}
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