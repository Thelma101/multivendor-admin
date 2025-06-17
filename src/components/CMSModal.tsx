import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  XMarkIcon,
  DocumentTextIcon,
  PhotoIcon,
  LinkIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

interface CMSModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  onSave: (content: string) => void
}

export default function CMSModal({ isOpen, onClose, title, content, onSave }: CMSModalProps) {
  const [editedContent, setEditedContent] = useState(content)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await onSave(editedContent)
      onClose()
    } catch (error) {
      console.error('Error saving content:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00838F] focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#CCFDF2] sm:mx-0 sm:h-10 sm:w-10">
                    <DocumentTextIcon className="h-6 w-6 text-[#00838F]" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-[#00838F]">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-[#B52344]">
                        Edit the content below. You can use the toolbar to format your text.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="mt-4 flex items-center gap-2 border-b border-[#00838F]/10 pb-4">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[#00838F] hover:bg-[#CCFDF2]"
                    title="Bold"
                  >
                    <span className="font-bold">B</span>
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[#00838F] hover:bg-[#CCFDF2]"
                    title="Italic"
                  >
                    <span className="italic">I</span>
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[#00838F] hover:bg-[#CCFDF2]"
                    title="Underline"
                  >
                    <span className="underline">U</span>
                  </button>
                  <div className="h-6 w-px bg-[#00838F]/10" />
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[#00838F] hover:bg-[#CCFDF2]"
                    title="Add Image"
                  >
                    <PhotoIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[#00838F] hover:bg-[#CCFDF2]"
                    title="Add Link"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* Editor */}
                <div className="mt-4">
                  <textarea
                    rows={10}
                    className="block w-full rounded-lg border-[#00838F]/20 bg-white px-3 py-2 text-[#00838F] shadow-sm focus:border-[#00838F] focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                </div>

                {/* Actions */}
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    className="rounded-lg border border-[#00838F]/20 bg-white px-4 py-2 text-sm font-semibold text-[#00838F] shadow-sm hover:bg-[#CCFDF2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 