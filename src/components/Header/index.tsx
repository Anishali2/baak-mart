import React from 'react'
interface IHeader {
  title: string
  description: string
}
const Header = ({ title, description }: IHeader) => {
  return (
    <div>
      <p className="pt-3 text-lg font-bold ">{title}</p>
      <p className="py-1 text-sm text-secondary font-medium tracking-wider">
        {description}
      </p>
      <div className="border-b border-b-primary-light" />
    </div>
  )
}

export default Header
