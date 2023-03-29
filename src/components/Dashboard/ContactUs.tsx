import React from 'react'
import Header from '../Header'
import { InputGrid, SubmitButton, TextAreaInput } from '../twin'

const ContactUs = () => {
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
                      <p className="text-md font-semibold ">
                        Write message/problem here
                      </p>
                      <TextAreaInput
                        rows={7}
                        placeholder="Your message here..."
                      ></TextAreaInput>
                    </div>
                  </InputGrid>

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

export default ContactUs
