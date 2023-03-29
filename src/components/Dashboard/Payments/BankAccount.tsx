import {
  Input,
  InputGrid,
  Label,
  SelectInput,
  SubmitButton
} from '@/components/twin'
import React from 'react'

const BankAccount = () => {
  return (
    <>
      <InputGrid>
        <div className="col-span-full">
          <Label htmlFor="country">Select Country</Label>
          <SelectInput>
            <option selected hidden>
              Choose Country
            </option>
            <option>UK</option>
            <option>US</option>
          </SelectInput>
        </div>
        <div className="col-span-full">
          <Label htmlFor="country">Bank Name</Label>
          <Input placeholder="Select bank"></Input>
        </div>
        <div className="col-span-full">
          <Label htmlFor="country">IBAN no</Label>
          <Input placeholder="Enter IBAN no"></Input>
        </div>
      </InputGrid>
      <SubmitButton className="!max-w-sm mx-auto">Save</SubmitButton>
    </>
  )
}

export default BankAccount
