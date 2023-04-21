import { faqs } from '@/constants/faqs'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Header from '../Header'

const Help = () => {
  return (
    <>
      <Header
        title="Need Help!"
        description="you can see questions related to your query "
      />
      <div className="my-5">
        {faqs.map((v, i) => (
          <Disclosure
            key={i}
            as="div"
            className="mt-2 border border-secondary rounded-main transition-all"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-md font-medium text-primary  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{v.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transition-all' : 'transition-all'
                    } h-5 w-5 text-primary`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="opacity-0 transform translate-y-2"
                  enterTo="opacity-100 transform translate-y-0"
                  leave="transition duration-200 ease-in"
                  leaveFrom="opacity-100 transform translate-y-0"
                  leaveTo="opacity-0 transform translate-y-2"
                >
                  <Disclosure.Panel className="bg-transparent text-black px-4 pt-4 pb-2 text-sm rounded-main">
                    {v.answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  )
}

export default Help
