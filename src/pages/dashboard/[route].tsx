import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  BellIcon,
  CreditCardIcon as MenuAlt1Icon,
  MagnifyingGlassIcon,
  ScaleIcon,
  XMarkIcon as XIcon
} from '@heroicons/react/20/solid'
import {
  CheckCircleIcon as CashIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import DashboardSidebar from '@/components/DashboardSidebar'
import MonthlyVisitors from '@/components/Charts/MonthlyVisiters'
import ProfileDropdown from '@/components/Dropdown/Profile'

const cards = [
  {
    name: 'Booked Slots',
    subTitle: 'Total booked slots',
    href: '#',
    icon: ScaleIcon,
    amount: '7'
  },
  {
    name: 'Monthly Visitors',
    subTitle: '',
    href: '#',
    icon: ScaleIcon,
    amount: '700,000'
  },
  {
    name: 'Total Products',
    subTitle: 'Total added products',
    href: '#',
    icon: ScaleIcon,
    amount: '80'
  }
  // More items...
]
const products = [
  {
    id: 1,
    name: 'Will Barnet',
    slotNumber: 325123531,
    store: 'USD'
  },
  {
    id: 1,
    name: 'Steve Gilbert',
    slotNumber: 325123423,
    store: 'USD'
  },
  {
    id: 1,
    name: 'Ronnie Jones',
    slotNumber: 325123123,
    store: 'USD'
  }
  // More transactions...
]

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full bg-light-background">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                    alt="Easywire logo"
                  />
                </div>
                <nav
                  className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <DashboardSidebar />
                </nav>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-white border pt-5 pb-4 overflow-y-auto m-5 shadow-md rounded-main">
            <div className="flex items-center justify-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto b"
                src="/logo-big.png"
                alt="Baak_Mart"
              />
            </div>
            <nav
              className="mt-5 flex-1 flex flex-col overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-5 my-2 space-y-1">
                <div
                  className={
                    'bg-gradient-to-b from-primary-light to-primary text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                  }
                >
                  <ProfileDropdown />
                </div>
              </div>

              <DashboardSidebar />
            </nav>
          </div>
        </div>

        <div className="lg:pl-80 flex flex-col flex-1">
          <div className=" flex max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
            <div className="relative mt-10  w-4/5 rounded-main shadow-md z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
              <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Search bar */}
              <div className="flex-1  px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <input
                        id="search-field"
                        name="search-field"
                        className="block w-full h-full pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                        placeholder="Search "
                        type="search"
                      />
                    </div>
                    <div
                      className=" inset-y-0 left-0 flex items-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative mt-10 mx-auto px-5 pt-5  rounded-full shadow-md z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
              <BellIcon className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <main className="flex-1 pb-8">
            {/* Page header */}

            <div className="mt-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Card */}
                  {cards.map((card) => (
                    <div
                      key={card.name}
                      className="bg-white overflow-hidden shadow rounded-main"
                    >
                      <div className="p-5 pb-7">
                        <div className="flex items-center">
                          <div className=" w-0 flex-1">
                            <dl>
                              <dt className="text-2xl pb-3 font-medium text-black truncate">
                                {card.name}
                              </dt>
                              <hr />
                              <dt className="text-xs pt-3  font-medium text-black truncate">
                                {card.subTitle}
                              </dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">
                                  {card.amount}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                <MonthlyVisitors />
              {/* Activity list (smallest breakpoint only) */}
              <div className="shadow sm:hidden">
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
                >
                  {products.map((product) => (
                    <li key={product.id}>
                      <a
                        href={product.name}
                        className="block px-4 py-4 bg-white hover:bg-gray-50"
                      >
                        <span className="flex items-center space-x-4">
                          <span className="flex-1 flex space-x-2 truncate">
                            <CashIcon
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="flex flex-col text-gray-500 text-sm truncate">
                              <span className="truncate">{product.name}</span>
                              <span>
                                <span className="text-gray-900 font-medium">
                                  {product.slotNumber}
                                </span>{' '}
                              </span>
                              <span className="truncate">{product.store}</span>
                            </span>
                          </span>
                          <ChevronRightIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <nav
                  className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                  aria-label="Pagination"
                >
                  <div className="flex-1 flex justify-between">
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>
              {/* Activity table (small breakpoint and up) */}
              <div className="flex flex-col mt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-semibold tracking-wider"
                            >
                              Products
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-semibold tracking-wider"
                            ></th>

                            <th
                              scope="col"
                              className="px-6 text-right py-3  text-xs font-semibold text-primary  tracking-wider"
                            >
                              See All
                            </th>
                          </tr>
                        </thead>
                        <thead className="bg-white">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                            >
                              Baak Slot no
                            </th>

                            <th
                              scope="col"
                              className="px-6 py-3 text-right text-xs font-medium  tracking-wider"
                            >
                              Store
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {products.map((product) => (
                            <tr key={product.name}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                                {product.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap font-normal text-sm text-black">
                                {product.slotNumber}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap font-normal text-right text-sm text-black">
                                {product.store}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
