import { navigation } from '@/constants/dashboard'
import React from 'react'
import SingleMiniMenu from './SingleMiniMenu'

const SideBarMini = () => {
  return (
    <div>
      <div className="px-2 space-y-1">
        {navigation.map((item) => (
          <SingleMiniMenu item={item} />
        ))}
      </div>
    </div>
  )
}

export default SideBarMini
