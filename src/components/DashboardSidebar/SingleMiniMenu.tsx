import { classNames } from '@/helpers/classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const SingleMiniMenu = ({ item }: { item: any }) => {
  const route = useRouter().query?.route

  const [isHover, setIsHover] = useState(false)
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
        'group relative flex flex-col items-center py-2 text-sm  font-medium rounded-md'
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
      <div className="text-[10px] text-center">
        {item.name.includes(' ') ? (
          <span>
            {item.name.split(' ')[0]} <br /> {item.name.split(' ')[1]}
          </span>
        ) : (
          item.name
        )}
      </div>
    </Link>
  )
}

export default SingleMiniMenu
