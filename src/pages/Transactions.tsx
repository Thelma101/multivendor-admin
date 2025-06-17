import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  CreditCardIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline'

interface Transaction {
  id: number
  coupleName: string
  vendorName: string
  amount: number
  type: 'Payment' | 'Refund' | 'Commission'
  status: 'Completed' | 'Pending' | 'Failed'
  date: string
  paymentMethod: string
}

const transactions: Transaction[] = [
  {
    id: 1,
    coupleName: 'Sarah & John',
    vendorName: 'Elegant Events',
    amount: 5000,
    type: 'Payment',
    status: 'Completed',
    date: '2024-03-15',
    paymentMethod: 'Credit Card',
  },
  {
    id: 2,
    coupleName: 'Emily & Michael',
    vendorName: 'Dream Photography',
    amount: 2500,
    type: 'Payment',
    status: 'Pending',
    date: '2024-03-14',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 3,
    coupleName: 'Jessica & David',
    vendorName: 'Gourmet Catering',
    amount: 3000,
    type: 'Refund',
    status: 'Completed',
    date: '2024-03-13',
    paymentMethod: 'Credit Card',
  },
  {
    id: 4,
    coupleName: 'Amanda & Robert',
    vendorName: 'Floral Dreams',
    amount: 500,
    type: 'Commission',
    status: 'Completed',
    date: '2024-03-12',
    paymentMethod: 'Bank Transfer',
  },
]

export default function Transactions() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = 
      transaction.coupleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.vendorName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || transaction.status === selectedStatus
    const matchesType = selectedType === 'all' || transaction.type === selectedType
    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00838F]">Transactions</h1>
        <p className="mt-2 text-sm text-[#B52344]">
          View and manage all financial transactions.
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
              placeholder="Search transactions..."
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
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          <div className="relative">
            <select
              className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Payment">Payment</option>
              <option value="Refund">Refund</option>
              <option value="Commission">Commission</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
        >
          <ArrowDownTrayIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Export
        </button>
      </div>

      {/* Transactions List */}
      <div className="mt-8 space-y-6">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="overflow-hidden rounded-xl border border-[#00838F]/20 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#00838F]">{transaction.vendorName}</h3>
                  <p className="mt-1 text-sm text-[#B52344]">{transaction.coupleName}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      transaction.status === 'Completed'
                        ? 'bg-[#CCFDF2] text-[#00838F]'
                        : transaction.status === 'Pending'
                        ? 'bg-[#ECEBA2] text-[#B52344]'
                        : 'bg-[#EB1948]/10 text-[#EB1948]'
                    }`}
                  >
                    {transaction.status}
                  </span>
                  <span
                    className={`text-lg font-semibold ${
                      transaction.type === 'Payment'
                        ? 'text-[#00838F]'
                        : transaction.type === 'Refund'
                        ? 'text-[#EB1948]'
                        : 'text-[#B52344]'
                    }`}
                  >
                    {transaction.type === 'Refund' ? '-' : '+'}${transaction.amount.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#B52344]">
                    {new Date(transaction.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-[#00838F]">
                    {transaction.paymentMethod === 'Credit Card' ? (
                      <CreditCardIcon className="h-4 w-4" />
                    ) : (
                      <BanknotesIcon className="h-4 w-4" />
                    )}
                    {transaction.paymentMethod}
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#CCFDF2] px-3 py-1.5 text-sm font-semibold text-[#00838F] shadow-sm hover:bg-[#CCFDF2]/80"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 