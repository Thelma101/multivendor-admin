import { useState } from 'react'
import {
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  KeyIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

interface SettingSection {
  id: string
  title: string
  description: string
  icon: typeof UserCircleIcon
}

const settingSections: SettingSection[] = [
  {
    id: 'profile',
    title: 'Profile Settings',
    description: 'Manage your account information and preferences',
    icon: UserCircleIcon,
  },
  {
    id: 'notifications',
    title: 'Notification Preferences',
    description: 'Configure how and when you receive notifications',
    icon: BellIcon,
  },
  {
    id: 'security',
    title: 'Security Settings',
    description: 'Manage your password and security preferences',
    icon: ShieldCheckIcon,
  },
  {
    id: 'billing',
    title: 'Billing & Subscription',
    description: 'View and manage your billing information',
    icon: CreditCardIcon,
  },
  {
    id: 'regional',
    title: 'Regional Settings',
    description: 'Set your timezone and language preferences',
    icon: GlobeAltIcon,
  },
  {
    id: 'legal',
    title: 'Legal & Compliance',
    description: 'View and manage legal documents and policies',
    icon: DocumentTextIcon,
  },
  {
    id: 'api',
    title: 'API Settings',
    description: 'Manage API keys and integration settings',
    icon: KeyIcon,
  },
]

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile')
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Implement save logic
    setTimeout(() => setIsSaving(false), 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10">
      {/* Header Section */}
      <div className="border-b border-[#00838F]/10 bg-gradient-to-r from-[#CCFDF2] to-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#00838F]">Settings</h1>
              <p className="mt-2 text-sm text-[#B52344]">
                Manage your account settings and preferences.
              </p>
            </div>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F] disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <ArrowPathIcon className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {settingSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full rounded-lg px-4 py-3 text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-[#00838F] text-white'
                      : 'text-[#00838F] hover:bg-[#CCFDF2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <section.icon className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">{section.title}</p>
                      <p
                        className={`mt-1 text-xs ${
                          activeSection === section.id ? 'text-white/80' : 'text-[#B52344]'
                        }`}
                      >
                        {section.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00838F]/10">
              {activeSection === 'profile' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-[#00838F]">Profile Information</h2>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#00838F]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#00838F]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#00838F]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-[#00838F]">
                        Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        placeholder="Your role"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'notifications' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-[#00838F]">Notification Preferences</h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-[#00838F]">Email Notifications</h3>
                        <p className="text-xs text-[#B52344]">Receive notifications via email</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-[#00838F]/20 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-[#00838F] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00838F]/20"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-[#00838F]">Push Notifications</h3>
                        <p className="text-xs text-[#B52344]">Receive push notifications</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-[#00838F]/20 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-[#00838F] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00838F]/20"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-[#00838F]">SMS Notifications</h3>
                        <p className="text-xs text-[#B52344]">Receive notifications via SMS</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-[#00838F]/20 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-[#00838F] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00838F]/20"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'security' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-[#00838F]">Security Settings</h2>
                  <div className="mt-6 space-y-6">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-[#00838F]">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current-password"
                        className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-[#00838F]">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-password"
                        className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-[#00838F]">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        className="mt-1 block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                        placeholder="Confirm your new password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-[#00838F]">Two-Factor Authentication</h3>
                        <p className="text-xs text-[#B52344]">Add an extra layer of security to your account</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-[#00838F]/20 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-[#00838F] after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00838F]/20"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Add more sections as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 