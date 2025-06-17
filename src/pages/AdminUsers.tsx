import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

interface AdminUser {
  id: number
  name: string
  email: string
  role: 'Super Admin' | 'Admin' | 'Moderator'
  status: 'Active' | 'Inactive'
  lastLogin: string
  permissions: string[]
}

const adminUsers: AdminUser[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Super Admin',
    status: 'Active',
    lastLogin: '2024-03-15T10:30:00',
    permissions: ['All'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-03-14T15:45:00',
    permissions: ['Manage Users', 'Manage Content', 'View Reports'],
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'Moderator',
    status: 'Inactive',
    lastLogin: '2024-03-10T09:15:00',
    permissions: ['Moderate Content', 'View Reports'],
  },
]

export default function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRole, setSelectedRole] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const filteredUsers = adminUsers.filter((user) => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === 'all' || user.role === selectedRole
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus
    return matchesSearch && matchesRole && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00838F]">Admin Users</h1>
        <p className="mt-2 text-sm text-[#B52344]">
          Manage platform administrators and their permissions.
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
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="all">All Roles</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
            </select>
          </div>
          <div className="relative">
            <select
              className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
        >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Add Admin
        </button>
      </div>

      {/* Users List */}
      <div className="mt-8 space-y-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="overflow-hidden rounded-xl border border-[#00838F]/20 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCFDF2]">
                    <UserCircleIcon className="h-8 w-8 text-[#00838F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00838F]">{user.name}</h3>
                    <p className="text-sm text-[#B52344]">{user.email}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      user.status === 'Active'
                        ? 'bg-[#CCFDF2] text-[#00838F]'
                        : 'bg-[#EB1948]/10 text-[#EB1948]'
                    }`}
                  >
                    {user.status}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 text-xs font-semibold leading-5 ${
                      user.role === 'Super Admin'
                        ? 'bg-[#EB1948]/10 text-[#EB1948]'
                        : user.role === 'Admin'
                        ? 'bg-[#ECEBA2] text-[#B52344]'
                        : 'bg-[#CCFDF2] text-[#00838F]'
                    }`}
                  >
                    <ShieldCheckIcon className="h-3 w-3" />
                    {user.role}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {user.permissions.map((permission) => (
                    <span
                      key={permission}
                      className="inline-flex items-center rounded-full bg-[#CCFDF2]/50 px-2 py-1 text-xs font-medium text-[#00838F]"
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[#00838F]">
                  Last login: {new Date(user.lastLogin).toLocaleString()}
                </span>
                <div className="flex gap-2">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 