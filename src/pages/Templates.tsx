import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'

interface Template {
  id: number
  name: string
  category: 'Romantic' | 'Modern' | 'Classic' | 'Rustic' | 'Elegant'
  colorScheme: string[]
  thumbnail: string
  status: 'Active' | 'Draft' | 'Archived'
  usageCount: number
  lastUpdated: string
}

const templates: Template[] = [
  {
    id: 1,
    name: 'Eternal Love',
    category: 'Romantic',
    colorScheme: ['#FFE5E5', '#FFB6B6', '#FF8B8B', '#FF6B6B', '#FF4B4B'],
    thumbnail: '/images/templates/eternal-love.jpg',
    status: 'Active',
    usageCount: 245,
    lastUpdated: '2024-03-15',
  },
  {
    id: 2,
    name: 'Modern Minimalist',
    category: 'Modern',
    colorScheme: ['#F8F9FA', '#E9ECEF', '#DEE2E6', '#CED4DA', '#ADB5BD'],
    thumbnail: '/images/templates/modern-minimalist.jpg',
    status: 'Active',
    usageCount: 189,
    lastUpdated: '2024-03-10',
  },
  {
    id: 3,
    name: 'Vintage Romance',
    category: 'Classic',
    colorScheme: ['#F5E6E6', '#E6D5D5', '#D5C4C4', '#C4B3B3', '#B3A2A2'],
    thumbnail: '/images/templates/vintage-romance.jpg',
    status: 'Active',
    usageCount: 156,
    lastUpdated: '2024-03-05',
  },
  {
    id: 4,
    name: 'Rustic Charm',
    category: 'Rustic',
    colorScheme: ['#F4E4BC', '#E6D5A3', '#D5C48A', '#C4B371', '#B3A258'],
    thumbnail: '/images/templates/rustic-charm.jpg',
    status: 'Draft',
    usageCount: 0,
    lastUpdated: '2024-03-01',
  },
]

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || template.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Wedding Website Templates</h1>
          <p className="mt-2 text-sm text-gray-600">
            Create and manage beautiful wedding website templates for couples.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Romantic">Romantic</option>
                <option value="Modern">Modern</option>
                <option value="Classic">Classic</option>
                <option value="Rustic">Rustic</option>
                <option value="Elegant">Elegant</option>
              </select>
            </div>
            <div className="relative">
              <select
                className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            New Template
          </button>
        </div>

        {/* Templates Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              {/* Template Preview */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Template Info */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{template.category}</p>
                  
                  {/* Color Scheme */}
                  <div className="mt-4 flex gap-2">
                    {template.colorScheme.map((color, index) => (
                      <div
                        key={index}
                        className="h-6 w-6 rounded-full shadow-sm transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {template.usageCount} couples using
                    </span>
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        template.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : template.status === 'Draft'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {template.status}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-lg bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                    >
                      <EyeIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="rounded-lg bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                    >
                      <PencilIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                    >
                      <TrashIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    Updated {new Date(template.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 