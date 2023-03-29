import { Input, InputGrid, Label, SubmitButton } from '@/components/twin'
import React from 'react'

const PayPalAccount = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl text-center font-bold">
        Verify your bank account
      </h1>
      <p className="text-base max-w-sm mx-auto text-center font-normal">
        we deposit some cents to your bank account, please enter cents to verify
        your bank account
      </p>
      <InputGrid>
        <div className="col-span-full">
          <Label>Cents Amount</Label>
          <Input defaultValue={'Enter Cents amount'}></Input>
        </div>
        <div className="col-span-full ">
          <SubmitButton>Verify Bank Account</SubmitButton>
        </div>
      </InputGrid>
      <div className="text-black flex justify-center">
        Didn't received cents?{' '}
        <div className="text-primary underline underline-offset-4 ml-1 ">
          Resend
        </div>
      </div>
    </div>
  )
}

export default PayPalAccount
