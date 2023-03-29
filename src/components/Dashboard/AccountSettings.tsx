import Image from 'next/image'
import React from 'react'
import Header from '../Header'
import { Input, InputGrid, Label, SelectInput, SubmitButton } from '../twin'

const AccountSettings = () => {
  return (
    <div className="lg:pl-80 flex flex-col flex-1">
      <div className=" flex max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
        <main className="flex-1 pb-8">
          <div className="mt-8">
            {/* Activity table (small breakpoint and up) */}
            <div className="flex flex-col mt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <Header
                    title="Account Settings"
                    description="Edit your profile for better reach"
                  />
                  <InputGrid>
                    <div className="col-span-full">
                      <p className="text-lg font-semibold my-3">Address</p>
                      <Label>Business Address</Label>
                      <Input placeholder="business name"></Input>
                    </div>
                    <p className="col-span-full text-lg font-semibold my-1">
                      Contact Info
                    </p>

                    <div className="sm:col-span-3">
                      <Label htmlFor="username">Mobile</Label>
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
                          placeholder="231 1231 123"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <Label>Tel</Label>
                      <SelectInput>
                        <option selected hidden>
                          0000 0000
                        </option>
                        <option>+1 1233 123123 12312</option>
                        <option>+1 6345 234151 12315</option>
                      </SelectInput>
                    </div>
                  </InputGrid>
                  <p className="col-span-full text-lg font-semibold my-5">
                    Payment methods
                  </p>
                  {Array.from(Array(1).keys()).map((v) => (
                    <>
                      <p>Account {v}</p>
                      <div className="w-full flex justify-between my-2  bg-white p-3 shadow-sm rounded-main border border-secondary ">
                        <div className="space-y-2">
                          <div>
                            Payment ID :
                            <b>#{(Math.random() * 1000000).toFixed(0)}</b>
                          </div>
                          <p>
                            Total Amount :
                            <b>${(Math.random() * 1000).toFixed(0)}</b>
                          </p>
                          <p>Date: 02-01-2023 at 12:30PM</p>
                        </div>
                        <div className="flex space-x-2">
                          <Image
                            alt="download_image"
                            height={90}
                            width={90}
                            src="/icons/edit.svg"
                          />
                          <Image
                            alt="download_image"
                            height={90}
                            width={90}
                            src="/icons/delete.svg"
                          />
                        </div>
                      </div>
                    </>
                  ))}
                  <SubmitButton>Update Settings</SubmitButton>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AccountSettings
