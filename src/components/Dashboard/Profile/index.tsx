import React, { useState } from 'react'
import { Flex, JustifyBetween } from '../../twin'
import BusinessContact from './BusinessContact'
import BusinessInfo from './BusinessInfo'

const Profile = () => {
  const [isBusinessInfo, setIsBusinessInfo] = useState(true)
  return (
    <div className="lg:pl-80 flex flex-col flex-1">
      <div className=" flex max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
        <main className="flex-1 pb-8">
          <div className="mt-8">
            {/* Activity table (small breakpoint and up) */}
            <div className="flex flex-col mt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <JustifyBetween>
                    <div>
                      <p className="pt-3 text-lg font-bold ">Profile</p>
                      <p className="py-1 text-sm text-secondary font-medium tracking-wider">
                        You can update your profile at any time{' '}
                      </p>
                    </div>
                    <div className="bg-white h-10 w-10 border-secondary rounded-full shadow-md"></div>
                  </JustifyBetween>
                  <div className="border-b border-b-primary-light" />
                  <Flex className="space-x-2">
                    <button
                      onClick={() => setIsBusinessInfo(true)}
                      className={` ${
                        isBusinessInfo
                          ? 'bg-primary text-white'
                          : 'text-primary bg-white shadow-lg'
                      } w-fit my-4 py-3 flex justify-center px-4 rounded-main shadow-sm text-sm font-medium `}
                    >
                      Business Info
                    </button>
                    <button
                      onClick={() => setIsBusinessInfo(false)}
                      className={` ${
                        !isBusinessInfo
                          ? 'bg-primary text-white'
                          : 'text-primary bg-white shadow-lg'
                      } w-fit my-4 py-3 flex justify-center px-4  rounded-main shadow-sm text-sm font-medium `}
                    >
                      Business Contact
                    </button>
                  </Flex>
                  {/* <InputGrid>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">Family name</Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">First name</Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">Email</Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">Confirm Email</Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">Password</Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">Confirm Password</Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">Business name</Label>
                      <div className="mt-2">
                        <Input type="text" />
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
                      <Label htmlFor="first-name">
                        Business Registration Number
                      </Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">VAT Number</Label>
                      <div className="mt-2">
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <button className="w-full my-4 py-3 flex justify-center px-4 border border-primary rounded-main shadow-sm text-sm font-medium text-primary bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Edit Profile
                      </button>
                    </div>
                  </InputGrid> */}
                  {isBusinessInfo ? <BusinessInfo /> : <BusinessContact />}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile
