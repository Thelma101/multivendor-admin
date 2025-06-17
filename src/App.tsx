import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Couples from './pages/Couples'
import Vendors from './pages/Vendors'
import Templates from './pages/Templates'
import Reviews from './pages/Reviews'
import Transactions from './pages/Transactions'
import Disputes from './pages/Disputes'
import CMS from './pages/CMS'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import AdminUsers from './pages/AdminUsers'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar open={false} setOpen={() => {}} />
      <div className="lg:pl-64">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/couples" element={<Couples />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/disputes" element={<Disputes />} />
              <Route path="/cms" element={<CMS />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/admin-users" element={<AdminUsers />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}
