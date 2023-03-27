import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export default function SellerForgetPassword() {
  const isLarge = useMediaQuery({ minWidth: 100, maxWidth: 1024 })
  // const isXl = useMediaQuery({ minWidth: 2000 })
  return (
    <div className={` ${!isLarge ? 'login-gradient' : ''} `}>
      <div className="min-h-full flex max-w-7xl  mx-auto">
        <div className="hidden lg:block  relative w-0 flex-1">
          <div className="flex justify-center items-center h-screen">
            <Image alt="logo" src="/logo-big.png" width={400} height={400} />
          </div>
        </div>
        <div className={`flex-1 flex flex-col  h-screen py-6 `}>
          <div className="mx-auto w-full  max-w-lg lg:w-[500px]">
            <Link
              href={'/seller/login'}
              className="flex text-primary gap-2 mb-20 cursor-pointer"
            >
              <Image
                alt="back_arrow_icon"
                width={10}
                height={10}
                src="/icons/arrow-left.svg"
              />
              Login
            </Link>
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Forget Password?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Enter your email that is associated with your Baak Mart account
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
                      placeholder="Enter Email Address"
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-main shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button className="w-full py-4 flex justify-center px-4 border border-transparent rounded-main shadow-sm text-sm font-medium text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
