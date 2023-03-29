import { useRouter } from 'next/router'
import React from 'react'
import AccountSettings from './AccountSettings'
import Agencies from './Agencies'
import ContactUs from './ContactUs'
import DashboardMain from './DashboardMain'
import FeedBack from './FeedBack'
import Help from './Help'
import Invoices from './Invoices'
import Logout from './Logout'
import Payments from './Payments'
import Products from './Product'
import AddProduct from './Product/AddProduct'
import Profile from './Profile'

function Dashboard() {
  const router = useRouter().query.route

  switch (router) {
    case 'dashboard':
      return <DashboardMain />
    case 'agencies':
      return <Agencies />
    case 'profile':
      return <Profile />
    case 'invoices':
      return <Invoices />
    case 'products':
      return <Products />
    case 'payments':
      return <Payments />
    case 'add-product':
      return <AddProduct />
    case 'account-settings':
      return <AccountSettings />
    case 'contact-us':
      return <ContactUs />
    case 'help':
      return <Help />
    case 'feedback':
      return <FeedBack />
    case 'logout':
      return <Logout />
    default:
      return <div>Page not found</div>
  }
}

export default Dashboard
