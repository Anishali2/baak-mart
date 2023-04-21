import React, { useState } from 'react'
import { classNames } from '@/helpers/classNames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SingleMenu = ({ item }: { item: any }) => {
  const [isHover, setIsHover] = useState(false)
  const route = useRouter().query?.route
  return (
    <Link
      key={item.name}
      href={item.route}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={classNames(
        item.route == route
          ? 'bg-light-background text-primary'
          : 'text-secondary hover:text-white hover:bg-cyan-600',
        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
      )}
      aria-current={item.route == route ? 'page' : undefined}
    >
      <Image
        alt="icon"
        width={20}
        height={20}
        src={
          item.route == route || isHover
            ? `${item.icon}-active.png`
            : `${item.icon}.png`
        }
      />
      <span className="ml-2 capitalize">{item.name}</span>
    </Link>
  )
}

export default SingleMenu
