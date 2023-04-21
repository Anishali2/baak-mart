import React from 'react'
import Header from '../Header'
import { Input, InputGrid, Label, SubmitButton, TextAreaInput } from '../twin'

const FeedBack = () => {
  return (
    <div>
      <Header
        title="Feedback"
        description="Send us feedback your response should be appreciated"
      />
      <InputGrid>
        <div className="col-span-full">
          <Label htmlFor="name">Name</Label>
          <Input name="name" placeholder="Name" />
        </div>
        <div className="col-span-full">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="example@mail.com" />
        </div>
        <div className="col-span-full">
          <Label htmlFor="email">Email</Label>
          <TextAreaInput name="email" rows={6} placeholder="example@mail.com" />
        </div>
      </InputGrid>
      <SubmitButton>Send Feedback</SubmitButton>
    </div>
  )
}

export default FeedBack
