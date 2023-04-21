import { InputGrid } from '@/components/twin'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import tw from 'twin.macro'

const Label = tw.label`block text-sm font-medium leading-6 text-gray-900`
const Input = tw.input`block w-full rounded-main border border-secondary py-3 px-2 text-gray-900`
const Registration = () => {
  const router = useRouter()
  return (
    <div className="bg-light-background h-full w-full py-10">
      <div className="max-w-2xl  mx-auto ">
        <div className=" pb-12">
          <div className="flex justify-between">
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
            <Image
              alt="back_arrow_icon"
              width={300}
              height={10}
              className="max-h-[70px]"
              src="/logo-big.png"
            />
            <div />
          </div>
          <p className="mt-1 mb-4 text-center text-2xl font-semibold leading-4 ">
            Seller Registration Form
          </p>

           <InputGrid>
            <div className="sm:col-span-3">
              <Label htmlFor="first-name">Family name</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Family name"
                  autoComplete="given-name"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="last-name">First name</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="last-name"
                  placeholder="First name"
                  id="last-name"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="first-name">Email</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  placeholder="Email"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="last-name">Confirm email</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="last-name"
                  placeholder="Confirm email"
                  id="last-name"
                  autoComplete="family-name"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="first-name">Password</Label>
              <div className="mt-2">
                <Input
                  type="password"
                  name="first-name"
                  placeholder="Password"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="first-name">Confirm password</Label>
              <div className="mt-2">
                <Input
                  type="password"
                  name="first-name"
                  placeholder="Confirm Password"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>

          
          </InputGrid>
          <p className="my-2 text-sm leading-6 text-gray-600">
            At least 2 lower case characters
          </p>
          <p className="my-2 text-sm leading-6 text-gray-600">
            At least 2 upper case characters
          </p>
          <p className="my-2 text-sm leading-6 text-gray-600">
            At least 2 numbers
          </p>
          <p className="my-2 text-sm leading-6 text-gray-600">
            At least 1 special number "@#$%^&"
          </p>
          <p className="my-2 text-sm leading-6 text-gray-600">
            Maximum 32 characters
          </p>
          <p className="my-2 text-sm leading-6 text-gray-600">
            Significantly different from your previous password
          </p>
          <InputGrid>
            <div className="sm:col-span-3">
              <Label htmlFor="first-name">Business name</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  placeholder="Business name"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="country">Business type</Label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  defaultValue={'Select'}
                  autoComplete="country-name"
                  className="block w-full rounded-main border border-secondary bg-white py-3 px-2 text-gray-900"
                >
                  <option value="" selected disabled hidden>
                    Select
                  </option>
                  <option>IT</option>
                  <option>Clothing</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="first-name">Business registration number</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  placeholder="0000 0000 0000"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="first-name">VAT number</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  placeholder="0000"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>
          </InputGrid>
          <button
            onClick={() => router.push('/seller/registration-step2')}
            className="w-full my-4 py-3 flex justify-center px-4 border border-transparent rounded-main shadow-sm text-sm font-medium text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Registration
