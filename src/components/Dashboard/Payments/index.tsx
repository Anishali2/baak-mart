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
    <div>
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
  )
}

export default Payments
