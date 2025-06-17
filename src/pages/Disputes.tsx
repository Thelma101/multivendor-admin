import { useState } from 'react'
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
  ArrowPathIcon,
  FunnelIcon,
  PencilSquareIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import CMSModal from '../components/CMSModal'

interface Dispute {
  id: number
  title: string
  description: string
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed'
  priority: 'High' | 'Medium' | 'Low'
  type: 'Payment' | 'Service' | 'Booking' | 'Other'
  createdAt: string
  updatedAt: string
  couple: {
    name: string
    email: string
    phone?: string
  }
  vendor: {
    name: string
    email: string
    category: string
    phone?: string
  }
  amount?: number
  messages: {
    id: number
    sender: 'Admin' | 'Couple' | 'Vendor'
    message: string
    timestamp: string
  }[]
  notes?: string
}

const disputes: Dispute[] = [
  {
    id: 1,
    title: 'Payment Dispute - Wedding Photography',
    description: 'Couple claims photographer did not deliver all promised photos and is requesting partial refund.',
    status: 'Open',
    priority: 'High',
    type: 'Payment',
    createdAt: '2024-03-15T10:30:00',
    updatedAt: '2024-03-15T10:30:00',
    couple: {
      name: 'Chioma & Emeka',
      email: 'chioma@example.com',
      phone: '+234 801 234 5678',
    },
    vendor: {
      name: 'Royal Photography Studio',
      email: 'royal@example.com',
      category: 'Photography',
      phone: '+234 802 345 6789',
    },
    amount: 250000,
    messages: [
      {
        id: 1,
        sender: 'Couple',
        message: 'We paid for 500 photos but only received 300. The photographer is not responding to our messages.',
        timestamp: '2024-03-15T10:30:00',
      },
      {
        id: 2,
        sender: 'Vendor',
        message: 'I apologize for the delay. I am working on delivering the remaining photos by tomorrow.',
        timestamp: '2024-03-15T11:45:00',
      },
    ],
    notes: 'Initial contact made with vendor. Awaiting response.',
  },
  // Add more sample disputes...
]

const statusColors = {
  Open: 'bg-[#EB1948]/10 text-[#EB1948]',
  'In Progress': 'bg-[#ECEBA2] text-[#B52344]',
  Resolved: 'bg-[#CCFDF2] text-[#00838F]',
  Closed: 'bg-gray-100 text-gray-600',
}

const priorityColors = {
  High: 'bg-[#EB1948]/10 text-[#EB1948]',
  Medium: 'bg-[#ECEBA2] text-[#B52344]',
  Low: 'bg-[#CCFDF2] text-[#00838F]',
}

const typeColors = {
  Payment: 'bg-[#EB1948]/10 text-[#EB1948]',
  Service: 'bg-[#ECEBA2] text-[#B52344]',
  Booking: 'bg-[#CCFDF2] text-[#00838F]',
  Other: 'bg-gray-100 text-gray-600',
}

export default function Disputes() {
  const [selectedDispute, setSelectedDispute] = useState<Dispute | null>(null)
  const [filter, setFilter] = useState({
    status: 'all',
    priority: 'all',
    type: 'all',
  })
  const [newMessage, setNewMessage] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isCMSModalOpen, setIsCMSModalOpen] = useState(false)

  const handleStatusChange = (disputeId: number, newStatus: Dispute['status']) => {
    // Implement status change logic
  }

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedDispute) return
    // Implement message sending logic
    setNewMessage('')
  }

  const handleSaveNotes = async (content: string) => {
    if (!selectedDispute) return
    // Implement notes saving logic
    console.log('Saving notes:', content)
  }

  const filteredDisputes = disputes.filter((dispute) => {
    if (filter.status !== 'all' && dispute.status !== filter.status) return false
    if (filter.priority !== 'all' && dispute.priority !== filter.priority) return false
    if (filter.type !== 'all' && dispute.type !== filter.type) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      {/* Header Section */}
      <div className="border-b border-[#00838F]/10 bg-gradient-to-r from-[#CCFDF2] to-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#00838F]">Disputes</h1>
              <p className="mt-2 text-sm text-[#B52344]">
                Manage and resolve disputes between couples and vendors.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 rounded-lg bg-white p-1 shadow-sm ring-1 ring-inset ring-[#00838F]/20">
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-[#00838F] px-3 py-1.5 text-sm font-medium text-white"
                >
                  <FunnelIcon className="h-4 w-4" />
                  Filters
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-[#00838F] hover:bg-[#CCFDF2]"
                >
                  <ArrowPathIcon className="h-4 w-4" />
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="mt-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-[#00838F]/10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label htmlFor="status-filter" className="block text-sm font-medium text-[#00838F]">
                    Status
                  </label>
                  <select
                    id="status-filter"
                    value={filter.status}
                    onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-sm text-[#00838F] focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="priority-filter" className="block text-sm font-medium text-[#00838F]">
                    Priority
                  </label>
                  <select
                    id="priority-filter"
                    value={filter.priority}
                    onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-sm text-[#00838F] focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                  >
                    <option value="all">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="type-filter" className="block text-sm font-medium text-[#00838F]">
                    Type
                  </label>
                  <select
                    id="type-filter"
                    value={filter.type}
                    onChange={(e) => setFilter({ ...filter, type: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-sm text-[#00838F] focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                  >
                    <option value="all">All Types</option>
                    <option value="Payment">Payment</option>
                    <option value="Service">Service</option>
                    <option value="Booking">Booking</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Disputes List */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
              <div className="border-b border-[#00838F]/10 px-6 py-4">
                <h2 className="text-lg font-semibold text-[#00838F]">Active Disputes</h2>
              </div>
              <div className="divide-y divide-[#00838F]/10">
                {filteredDisputes.map((dispute) => (
                  <button
                    key={dispute.id}
                    onClick={() => setSelectedDispute(dispute)}
                    className={`w-full p-4 text-left hover:bg-[#CCFDF2]/20 transition-colors ${
                      selectedDispute?.id === dispute.id ? 'bg-[#CCFDF2]/20' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFDF2]">
                        <ExclamationTriangleIcon className="h-5 w-5 text-[#00838F]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-[#00838F]">{dispute.title}</h3>
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                typeColors[dispute.type]
                              }`}
                            >
                              {dispute.type}
                            </span>
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                statusColors[dispute.status]
                              }`}
                            >
                              {dispute.status}
                            </span>
                          </div>
                        </div>
                        <p className="mt-1 text-xs text-[#B52344] line-clamp-2">{dispute.description}</p>
                        <div className="mt-2 flex items-center gap-4">
                          <span className="text-xs text-[#00838F]">{dispute.couple.name}</span>
                          <span className="text-xs text-[#B52344]">{dispute.vendor.name}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dispute Details */}
          <div className="lg:col-span-2">
            {selectedDispute ? (
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
                <div className="border-b border-[#00838F]/10 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-[#00838F]">{selectedDispute.title}</h2>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsCMSModalOpen(true)}
                        className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#CCFDF2] px-3 py-1.5 text-sm font-medium text-[#00838F] hover:bg-[#CCFDF2]/80"
                      >
                        <PencilSquareIcon className="h-4 w-4" />
                        Edit Notes
                      </button>
                      <select
                        value={selectedDispute.status}
                        onChange={(e) => handleStatusChange(selectedDispute.id, e.target.value as Dispute['status'])}
                        className="rounded-lg border-[#00838F]/20 bg-white px-3 py-1.5 text-sm text-[#00838F] focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                      >
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Dispute Info */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-[#00838F]">Couple Details</h3>
                      <div className="mt-2 flex items-center gap-3">
                        <UserCircleIcon className="h-8 w-8 text-[#00838F]" />
                        <div>
                          <p className="text-sm font-medium text-[#B52344]">{selectedDispute.couple.name}</p>
                          <p className="text-xs text-[#00838F]">{selectedDispute.couple.email}</p>
                          {selectedDispute.couple.phone && (
                            <p className="text-xs text-[#00838F]">{selectedDispute.couple.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#00838F]">Vendor Details</h3>
                      <div className="mt-2 flex items-center gap-3">
                        <BuildingStorefrontIcon className="h-8 w-8 text-[#00838F]" />
                        <div>
                          <p className="text-sm font-medium text-[#B52344]">{selectedDispute.vendor.name}</p>
                          <p className="text-xs text-[#00838F]">{selectedDispute.vendor.email}</p>
                          {selectedDispute.vendor.phone && (
                            <p className="text-xs text-[#00838F]">{selectedDispute.vendor.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dispute Details */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-[#CCFDF2]/20 p-4">
                      <h4 className="text-xs font-medium text-[#00838F]">Amount</h4>
                      <p className="mt-1 text-lg font-semibold text-[#B52344]">
                        ₦{selectedDispute.amount?.toLocaleString()}
                      </p>
                    </div>
                    <div className="rounded-lg bg-[#CCFDF2]/20 p-4">
                      <h4 className="text-xs font-medium text-[#00838F]">Priority</h4>
                      <p className="mt-1 text-lg font-semibold text-[#B52344]">{selectedDispute.priority}</p>
                    </div>
                    <div className="rounded-lg bg-[#CCFDF2]/20 p-4">
                      <h4 className="text-xs font-medium text-[#00838F]">Created</h4>
                      <p className="mt-1 text-lg font-semibold text-[#B52344]">
                        {new Date(selectedDispute.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="mt-8">
                    <h3 className="text-sm font-medium text-[#00838F]">Messages</h3>
                    <div className="mt-4 space-y-4">
                      {selectedDispute.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start gap-4 ${
                            message.sender === 'Admin' ? 'flex-row-reverse' : ''
                          }`}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CCFDF2]">
                            <ChatBubbleLeftRightIcon className="h-4 w-4 text-[#00838F]" />
                          </div>
                          <div
                            className={`rounded-lg px-4 py-2 ${
                              message.sender === 'Admin'
                                ? 'bg-[#00838F] text-white'
                                : 'bg-[#CCFDF2] text-[#00838F]'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p className="mt-1 text-xs opacity-75">
                              {new Date(message.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* New Message */}
                    <div className="mt-6">
                      <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full rounded-lg border-[#00838F]/20 bg-white px-4 py-2 text-sm text-[#00838F] focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        rows={3}
                      />
                      <div className="mt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={handleSendMessage}
                          className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#00838F]/10">
                <p className="text-[#B52344]">Select a dispute to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CMS Modal */}
      <CMSModal
        isOpen={isCMSModalOpen}
        onClose={() => setIsCMSModalOpen(false)}
        title="Edit Dispute Notes"
        content={selectedDispute?.notes || ''}
        onSave={handleSaveNotes}
      />
    </div>
  )
}