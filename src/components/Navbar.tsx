import { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  BellIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
  { name: 'Vendors', href: '/vendors', icon: BuildingStorefrontIcon },
  { name: 'Couples', href: '/couples', icon: UserGroupIcon },
  { name: 'Disputes', href: '/disputes', icon: ChatBubbleLeftRightIcon },
  { name: 'CMS', href: '/cms', icon: DocumentTextIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
]

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-2xl font-bold text-[#00838F]">I-Thee-Wed</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                          isActive
                            ? 'border-[#00838F] text-[#00838F]'
                            : 'border-transparent text-gray-500 hover:border-[#00838F]/50 hover:text-[#00838F]'
                        }`}
                      >
                        <item.icon className="mr-2 h-5 w-5" aria-hidden="true" />
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-[#00838F] hover:text-[#00838F]/80 focus:outline-none focus:ring-2 focus:ring-[#00838F] focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#EB1948] text-xs text-white">
                    3
                  </span>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00838F] focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-[#CCFDF2] flex items-center justify-center">
                        <span className="text-[#00838F] font-medium">JD</span>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${
                              active ? 'bg-[#CCFDF2] text-[#00838F]' : 'text-gray-700'
                            }`}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${
                              active ? 'bg-[#CCFDF2] text-[#00838F]' : 'text-gray-700'
                            }`}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${
                              active ? 'bg-[#CCFDF2] text-[#00838F]' : 'text-gray-700'
                            }`}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              {/* Mobile menu button and notifications */}
              <div className="flex items-center gap-2 sm:hidden">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-[#00838F] hover:text-[#00838F]/80 focus:outline-none focus:ring-2 focus:ring-[#00838F] focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#EB1948] text-xs text-white">
                    3
                  </span>
                </button>
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#00838F] hover:bg-[#CCFDF2] hover:text-[#00838F] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00838F] border border-[#00838F]/20">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                      isActive
                        ? 'border-[#00838F] bg-[#CCFDF2] text-[#00838F]'
                        : 'border-transparent text-gray-500 hover:border-[#00838F]/50 hover:bg-[#CCFDF2]/50 hover:text-[#00838F]'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
                      {item.name}
                    </div>
                  </Disclosure.Button>
                )
              })}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-[#CCFDF2] flex items-center justify-center">
                    <span className="text-[#00838F] font-medium">JD</span>
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-[#00838F]">John Doe</div>
                  <div className="text-sm font-medium text-gray-500">john@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-[#CCFDF2] hover:text-[#00838F]"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-[#CCFDF2] hover:text-[#00838F]"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-[#CCFDF2] hover:text-[#00838F]"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 