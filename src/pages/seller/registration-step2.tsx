import { InputGrid } from '@/components/twin'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

const Label = tw.label`block text-sm font-medium leading-6 text-gray-900`
const Input = tw.input`block w-full rounded-main border border-secondary py-3 px-2 text-gray-900`
const Registration = () => {
  return (
    <div className="bg-light-background h-full w-full py-10">
      <div className="max-w-2xl  mx-auto ">
        <div className=" pb-12">
          <div className="flex justify-between">
            <Link
              href={'/seller/registration-step1'}
              className="flex text-primary gap-2 mb-20 cursor-pointer"
            >
              <Image
                alt="back_arrow_icon"
                width={10}
                height={10}
                src="/icons/arrow-left.svg"
              />
              Back
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
            <div className="col-span-full">
              <Label htmlFor="about">Business Address</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Business Address"
                  autoComplete="given-name"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="last-name">Street name</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Street name"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="first-name">House no</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  placeholder="House no"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="country">Country</Label>
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
              <Label htmlFor="country">City</Label>
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
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Additional address information
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  placeholder="lorem ispum..."
                  rows={3}
                  className="block w-full rounded-main border border-secondary py-3 px-2 text-gray-900"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="username">Mobile</Label>
              <div className="mt-2">
                <div className="flex bg-white rounded-main shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-transparent sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    +965 |
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block bg-transparent focus-within:outline-none flex-1 py-3 pl-1 text-gray-900 placeholder:text-gray-400 bg-white focus:ring-transparent sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="first-name">Discount coupon</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  placeholder="---- ---- ----"
                  id="first-name"
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="country">Native language</Label>
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
              <Label htmlFor="country">
                Other language you speak (multiple)
              </Label>
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
            <div className="col-span-full">
              <Label htmlFor="first-name">Website</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="https://www.example.com"
                  autoComplete="given-name"
                />
              </div>
              <p className="mt-1 text-sm leading-6 text-black">
                Are you interested that we recommended you some BaakMart
                agencies, In order to help you with booking and managing your
                Baak Slots?
              </p>
            </div>
          </InputGrid>
          <fieldset>
            <div className="my-6 flex space-x-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </fieldset>
          <div className="mt-2">
            <span className="font-bold">NOTE:</span>
            <span className="ml-2">
              BaakMart sellers will be able to rate your services and write you
              a review
            </span>
          </div>
          <button className="w-full my-4 py-3 flex justify-center px-4 border border-transparent rounded-main shadow-sm text-sm font-medium text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Registration
