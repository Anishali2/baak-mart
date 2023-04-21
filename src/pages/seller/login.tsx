import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useMediaQuery } from 'react-responsive'

export default function SellerLogin() {
  const [isAgency, setIsAgency] = useState(false)
  const isLarge = useMediaQuery({ minWidth: 100, maxWidth: 1024 })
  return (
    <div className={` ${!isLarge ? 'login-gradient' : ''} `}>
      <div className="min-h-full flex max-w-7xl  mx-auto">
        <div className="hidden lg:block  relative w-0 flex-1">
          <div className="flex justify-center items-center h-screen">
            <Image alt="logo" src="/logo-big.png" width={400} height={400} />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center py-6 ">
          <div className="mx-auto w-full  max-w-lg lg:w-[450px]">
            <div>
              <div className="flex space-x-2 mb-10">
                <button
                  onClick={() => setIsAgency(true)}
                  className={` ${
                    !isAgency ? 'text-secondary ' : 'bg-primary text-white'
                  }  px-2 border rounded-md `}
                >
                  Login as agency
                </button>
                <button
                  onClick={() => setIsAgency(false)}
                  className={` ${
                    isAgency ? 'text-secondary ' : 'bg-primary text-white'
                  } border px-2 rounded-md `}
                >
                  Login as seller
                </button>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Baak Mart Login as seller
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Let's Start with Login
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6 space-y-3">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-normal text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-main shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-normal text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-main shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between ">
                  <div></div>

                  <div className="text-sm my-2">
                    <Link
                      href={'/seller/forget-password'}
                      className="font-medium text-primary hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <Link href={'/dashboard/dashboard'}>
                  <div>
                    <button className="w-full py-4 flex justify-center px-4 border border-transparent rounded-main shadow-sm text-sm font-medium text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Login
                    </button>
                  </div>
                </Link>

                <div className="text-black flex justify-center">
                  Don't have an account?
                  <Link
                    href={'/seller/registration-step1'}
                    className="text-primary underline underline-offset-4 ml-1 "
                  >
                    {' '}
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
