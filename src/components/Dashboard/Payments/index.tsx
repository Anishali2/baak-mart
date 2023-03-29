import { Flex } from '@/components/twin'
import React, { useState } from 'react'
import Header from '../../Header'
import BankAccount from './BankAccount'
import PaymentHistory from './PaymentHistory'
import PayPalAccount from './PayPalAccount'

const Payments = () => {
  const [isSection, setIsSection] = useState<'history' | 'bank' | 'paypal'>(
    'history'
  )
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
                    title="Payments"
                    description="Add bank account you can create multiple accounts"
                  />
                  <Flex className="space-x-2">
                    <button
                      onClick={() => setIsSection('history')}
                      className={` ${
                        isSection == 'history'
                          ? 'bg-primary text-white'
                          : 'text-primary bg-white shadow-lg'
                      } w-fit my-4 py-3 flex justify-center px-4 rounded-main shadow-sm text-sm font-medium `}
                    >
                      Payment History
                    </button>
                    <button
                      onClick={() => setIsSection('bank')}
                      className={` ${
                        isSection == 'bank'
                          ? 'bg-primary text-white'
                          : 'text-primary bg-white shadow-lg'
                      } w-fit my-4 py-3 flex justify-center px-4 rounded-main shadow-sm text-sm font-medium `}
                    >
                      Bank Account
                    </button>
                    <button
                      onClick={() => setIsSection('paypal')}
                      className={` ${
                        isSection == 'paypal'
                          ? 'bg-primary text-white'
                          : 'text-primary bg-white shadow-lg'
                      } w-fit my-4 py-3 flex justify-center px-4 rounded-main shadow-sm text-sm font-medium `}
                    >
                      Paypal Account
                    </button>
                  </Flex>
                  {isSection == 'history' ? (
                    <PaymentHistory />
                  ) : isSection == 'bank' ? (
                    <BankAccount />
                  ) : (
                    <PayPalAccount />
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Payments
