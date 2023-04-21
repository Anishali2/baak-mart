import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon as XIcon } from '@heroicons/react/20/solid'
import DashboardSidebar from '@/components/DashboardSidebar'
import ProfileDropdown from '@/components/Dropdown/Profile'
import Dashboard from '@/components/Dashboard'
import SideBarMini from '@/components/DashboardSidebar/SideBarMini'

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
      <div className="flex lg:block  ">
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
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
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
                    src="/logo-big.png"
                    alt="Baak_Mart"
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
        {/* <aside
          onClick={() => setSidebarOpen(true)}
          className="block relative lg:hidden w-10 float-left"
          aria-label="Sidebar"
        >
          <div className="overflow-y-auto absolute bg-transparent cursor-pointer  h-10 w-10 ">
            <Bars3BottomLeftIcon className="text-primary h-5 w-5 mt-2 ml-1.5" />
          </div>
        </aside> */}
        <div className="flex  lg:hidden w-30 ">
          <div className="flex flex-col flex-grow bg-white border pt-5 pb-4 overflow-y-auto m-5 shadow-md rounded-main">
            <div className="flex items-center justify-center flex-shrink-0 px-4 mb-5">
              <img
                className="h-6 w-auto b"
                src="https://cdn.discordapp.com/attachments/1089803685036560425/1090592133909577738/image.png"
                alt="Baak_Mart"
              />
            </div>
            <SideBarMini />
          </div>
        </div>
        <div className="lg:pl-80 flex flex-col flex-1">
          <div className=" flex max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
            <main className="flex-1 pb-8">
              <div className="mt-8">
                {/* Activity table (small breakpoint and up) */}
                <div className="flex flex-col mt-4 max-w-6xl mx-auto px-4 sm:px-2 lg:px-8">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <Dashboard />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
