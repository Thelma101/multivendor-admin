import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  CheckCircleIcon,
  XCircleIcon,
  FlagIcon,
} from '@heroicons/react/24/outline'

interface Review {
  id: number
  coupleName: string
  vendorName: string
  rating: number
  comment: string
  status: 'Pending' | 'Approved' | 'Rejected'
  date: string
  category: string
}

const reviews: Review[] = [
  {
    id: 1,
    coupleName: 'Sarah & John',
    vendorName: 'Elegant Events',
    rating: 5,
    comment: 'Absolutely amazing venue! The staff was incredibly helpful and the space was perfect for our wedding.',
    status: 'Approved',
    date: '2024-03-15',
    category: 'Venue',
  },
  {
    id: 2,
    coupleName: 'Emily & Michael',
    vendorName: 'Dream Photography',
    rating: 4,
    comment: 'Great photos, but delivery was a bit delayed. Overall happy with the results.',
    status: 'Pending',
    date: '2024-03-14',
    category: 'Photography',
  },
  {
    id: 3,
    coupleName: 'Jessica & David',
    vendorName: 'Gourmet Catering',
    rating: 5,
    comment: 'The food was exceptional! Our guests are still talking about it.',
    status: 'Approved',
    date: '2024-03-13',
    category: 'Catering',
  },
  {
    id: 4,
    coupleName: 'Amanda & Robert',
    vendorName: 'Floral Dreams',
    rating: 2,
    comment: 'Flowers were not as promised and arrived late. Very disappointed.',
    status: 'Rejected',
    date: '2024-03-12',
    category: 'Florist',
  },
]

export default function Reviews() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = 
      review.coupleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || review.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00838F]">Reviews</h1>
        <p className="mt-2 text-sm text-[#B52344]">
          Manage and moderate vendor reviews from couples.
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
              placeholder="Search reviews..."
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
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-8 space-y-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="overflow-hidden rounded-xl border border-[#00838F]/20 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#00838F]">{review.vendorName}</h3>
                  <p className="mt-1 text-sm text-[#B52344]">{review.category}</p>
                </div>
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    review.status === 'Approved'
                      ? 'bg-[#CCFDF2] text-[#00838F]'
                      : review.status === 'Pending'
                      ? 'bg-[#ECEBA2] text-[#B52344]'
                      : 'bg-[#EB1948]/10 text-[#EB1948]'
                  }`}
                >
                  {review.status}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? 'text-[#ECEBA2] fill-[#ECEBA2]' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#B52344]">
                    By {review.coupleName}
                  </span>
                  <span className="text-sm text-[#00838F]">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex gap-2">
                  {review.status === 'Pending' && (
                    <>
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#CCFDF2] px-3 py-1.5 text-sm font-semibold text-[#00838F] shadow-sm hover:bg-[#CCFDF2]/80"
                      >
                        <CheckCircleIcon className="h-4 w-4" />
                        Approve
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#EB1948]/10 px-3 py-1.5 text-sm font-semibold text-[#EB1948] shadow-sm hover:bg-[#EB1948]/20"
                      >
                        <XCircleIcon className="h-4 w-4" />
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#ECEBA2] px-3 py-1.5 text-sm font-semibold text-[#B52344] shadow-sm hover:bg-[#ECEBA2]/80"
                  >
                    <FlagIcon className="h-4 w-4" />
                    Flag
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 