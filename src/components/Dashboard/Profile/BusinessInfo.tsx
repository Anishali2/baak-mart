import { Input, InputGrid, Label, SelectInput } from '@/components/twin'
import React from 'react'

const BusinessInfo = () => {
  return (
    <div>
      <InputGrid>
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
            <SelectInput
              id="country"
              name="country"
              defaultValue={'Select'}
              autoComplete="country-name"
            >
              <option value="" selected disabled hidden>
                Select
              </option>
              <option>IT</option>
              <option>Clothing</option>
              <option>Marketing</option>
            </SelectInput>
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label htmlFor="first-name">Business Registration Number</Label>
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
      </InputGrid>
    </div>
  )
}

export default BusinessInfo
