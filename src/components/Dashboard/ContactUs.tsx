import React, { useState } from 'react'
import Header from '../Header'
import {
  Input,
  InputGrid,
  Label,
  SelectInput,
  SubmitButton,
  TextAreaInput
} from '../twin'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactUs = () => {
  const [, setToken] = useState(null)
  const data = [
    'Agency Registration',
    'Seller Registration',
    'Booking a Baak Slot',
    'Baak Slot Payment',
    'Baak Slot Cancellation',
    'Affiliate Registration',
    'Affiliate Approvement',
    'Affiliate Links',
    'Other'
  ]

  return (
    <div>
      <Header title="Contact Us" description="Contact Us for any query" />
      <InputGrid>
        <div className="sm:col-span-3">
          <Label>First Name</Label>
          <Input placeholder="First Name"></Input>
        </div>
        <div className="sm:col-span-3">
          <Label>Family Name</Label>
          <Input placeholder="Family Name"></Input>
        </div>
        <div className="sm:col-span-3">
          <Label>Email</Label>
          <Input placeholder="example@mail.com"></Input>
        </div>
        <div className="sm:col-span-3">
          <div className="flex justify-between">
            <Label htmlFor="email">Seller ID</Label>
            <span className="text-sm text-gray-500" id="email-optional">
              Optional
            </span>
          </div>
          <Input placeholder="---- ----"></Input>
        </div>
        <div className="sm:col-span-3">
          <div className="flex justify-between">
            <Label htmlFor="email">Agency ID</Label>
            <span className="text-sm text-gray-500" id="email-optional">
              Optional
            </span>
          </div>
          <Input placeholder="---- ----"></Input>
        </div>
        <div className="sm:col-span-3">
          <div className="flex justify-between">
            <Label htmlFor="email">Baak Slot no</Label>
            <span className="text-sm text-gray-500" id="email-optional">
              Optional
            </span>
          </div>
          <Input placeholder="---- ---- ----"></Input>
        </div>
        <div className="sm:col-span-3">
          <div className="flex justify-between">
            <Label htmlFor="email">Affiliate ID</Label>
            <span className="text-sm text-gray-500" id="email-optional">
              Optional
            </span>
          </div>
          <Input placeholder="---- ----"></Input>
        </div>
        <div className="sm:col-span-3">
          {/* // TODO select dropdown */}
          <Label htmlFor="country">Product size</Label>
          <div className="mt-2">
            <SelectInput
              id="country"
              name="country"
              placeholder={'Select'}
              defaultValue={1}
            >
              <option value="1" selected disabled hidden>
                Select
              </option>
              {data.map((optionValue) => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </SelectInput>
          </div>
        </div>
        <div className="col-span-full">
          <p className="text-md font-semibold mb-2">Title</p>
          <Input placeholder="Your message here..."></Input>
        </div>
        <div className="col-span-full">
          <p className="text-md font-semibold mb-2">Text</p>
          <TextAreaInput
            rows={7}
            placeholder="Your message here..."
          ></TextAreaInput>
        </div>
      </InputGrid>
      <div className="my-5">
        <ReCAPTCHA
          sitekey="6LebIEQlAAAAAItZgiLD5l417nZ7RgxsE0jSmquS"
          onChange={(token: any) => setToken(token)}
        />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  )
}

export default ContactUs
