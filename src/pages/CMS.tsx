import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  PencilIcon,
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import CMSModal from '../components/CMSModal'

interface Content {
  id: number
  title: string
  type: 'Blog Post' | 'Image' | 'Video' | 'text' | 'image' | 'video'
  status: 'Published' | 'Draft' | 'Archived' | 'published' | 'draft'
  author: string
  date: string
  category: string
  content: string
  lastUpdated: string
}

const contents: Content[] = [
  {
    id: 1,
    title: 'Top Wedding Trends for 2024',
    type: 'Blog Post',
    status: 'Published',
    author: 'Jane Smith',
    date: '2024-03-15',
    category: 'Trends',
    content: 'Welcome to I-Thee-Wed, your premier wedding planning platform...',
    lastUpdated: '2024-03-15T10:30:00',
  },
  {
    id: 2,
    title: 'Wedding Photography Tips',
    type: 'Video',
    status: 'Draft',
    author: 'John Doe',
    date: '2024-03-14',
    category: 'Tips & Advice',
    content: 'https://example.com/video.mp4',
    lastUpdated: '2024-03-14T15:45:00',
  },
  {
    id: 3,
    title: 'Spring Wedding Inspiration',
    type: 'Image',
    status: 'Published',
    author: 'Sarah Johnson',
    date: '2024-03-13',
    category: 'Inspiration',
    content: 'https://example.com/banner.jpg',
    lastUpdated: '2024-03-13T09:20:00',
  },
  {
    id: 4,
    title: 'Budget-Friendly Wedding Ideas',
    type: 'Blog Post',
    status: 'Archived',
    author: 'Mike Wilson',
    date: '2024-03-12',
    category: 'Planning',
    content: 'Welcome to I-Thee-Wed, your premier wedding planning platform...',
    lastUpdated: '2024-03-12T10:30:00',
  },
]

export default function CMS() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const [isCMSModalOpen, setIsCMSModalOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const filteredContents = contents.filter((content) => {
    const matchesSearch = 
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === 'all' || content.type === selectedType
    const matchesStatus = selectedStatus === 'all' || content.status === selectedStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const handleSaveContent = async (content: string) => {
    if (!selectedContent) return
    setIsSaving(true)
    try {
      // Implement save logic here
      console.log('Saving content:', content)
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulated API call
    } catch (error) {
      console.error('Error saving content:', error)
    } finally {
      setIsSaving(false)
      setIsCMSModalOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CCFDF2] to-[#00838F]/10 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#00838F]">Content Management</h1>
          <p className="mt-2 text-sm text-[#B52344]">
            Manage website content, blog posts, and marketing materials.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row flex-1 gap-4">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#00838F]" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 sm:flex gap-2">
              <div className="relative">
                <select
                  className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="Blog Post">Blog Posts</option>
                  <option value="Image">Images</option>
                  <option value="Video">Videos</option>
                </select>
              </div>
              <div className="relative">
                <select
                  className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-[#00838F]/20 focus:ring-2 focus:ring-inset focus:ring-[#00838F] sm:text-sm sm:leading-6"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-x-1.5 rounded-lg bg-[#00838F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00838F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00838F]"
            >
              <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              New Post
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-x-1.5 rounded-lg bg-[#CCFDF2] px-4 py-2 text-sm font-semibold text-[#00838F] shadow-sm hover:bg-[#CCFDF2]/80"
            >
              <PhotoIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Upload Media
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredContents.map((content) => (
            <div
              key={content.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#00838F]/20 bg-white shadow-sm transition-all hover:shadow-md"
            >
              {/* Content Preview */}
              <div className="aspect-w-16 aspect-h-9 bg-[#CCFDF2]">
                {content.type === 'Blog Post' ? (
                  <DocumentTextIcon className="h-full w-full p-8 text-[#00838F]" />
                ) : content.type === 'Image' ? (
                  <PhotoIcon className="h-full w-full p-8 text-[#00838F]" />
                ) : (
                  <VideoCameraIcon className="h-full w-full p-8 text-[#00838F]" />
                )}
              </div>

              {/* Content Info */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#00838F] line-clamp-2">{content.title}</h3>
                  <p className="mt-1 text-sm text-[#B52344]">{content.category}</p>
                  
                  {/* Meta Info */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                    <span className="text-[#00838F]">
                      By {content.author}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        content.status === 'Published'
                          ? 'bg-[#CCFDF2] text-[#00838F]'
                          : content.status === 'Draft'
                          ? 'bg-[#ECEBA2] text-[#B52344]'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {content.status}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <span className="text-sm text-[#00838F]">
                    {new Date(content.date).toLocaleDateString()}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedContent(content)
                        setIsCMSModalOpen(true)
                      }}
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

        {/* CMS Modal */}
        <CMSModal
          isOpen={isCMSModalOpen}
          onClose={() => setIsCMSModalOpen(false)}
          title={`Edit ${selectedContent?.title || 'Content'}`}
          content={selectedContent?.content || ''}
          onSave={handleSaveContent}
        />
      </div>
    </div>
  )
} 