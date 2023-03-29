import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

function ProductSlotDropdown() {
  const [selectedOption, setSelectedOption] = useState('Baak Slot')
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        className="flex w-full pr-4 py-2 text-sm font-medium text-primary bg-transparent focus:outline-none  focus:ring-none focus:ring-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <ChevronDownIcon
          className={` ${
            isOpen ? ' lg:rotate-[-180deg] ' : ''
          } h-5 w-5 text-primary transition-all`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-fit py-1 mt-1 bg-white rounded-md shadow-lg">
          <button
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            onClick={() => handleOptionClick('Option 1')}
          >
            Option 1
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            onClick={() => handleOptionClick('Option 2')}
          >
            Option 2
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            onClick={() => handleOptionClick('Option 3')}
          >
            Option 3
          </button>
        </div>
      )}
    </div>
  )
}
export default ProductSlotDropdown
