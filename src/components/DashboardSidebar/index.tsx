import { navigation } from '@/constants/dashboard'
import React from 'react'
import SingleMenu from './SingleMenu'

const DashboardSidebar = () => {
  return (
    <div>
      <div className="px-5 space-y-1">
        {navigation.map((item) => (
          <SingleMenu item={item} />
        ))}
      </div>
    </div>
  )
}

export default DashboardSidebar
