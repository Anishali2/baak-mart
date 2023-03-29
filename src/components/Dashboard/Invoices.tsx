import { invoices } from '@/constants/invoices'
import React from 'react'
import Header from '../Header'

const Invoices = () => {
  return (
    <div className="lg:pl-80 flex flex-col flex-1">
      <div className=" flex max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
        <main className="flex-1 pb-8">
          <div className="mt-8">
            {/* Activity table (small breakpoint and up) */}
            <div className="flex flex-col mt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <Header title="Invoice List" description="" />

                  <div className="shadow my-5 overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                          >
                            Agency name
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium  tracking-wider"
                          >
                            Booked Slots
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium  tracking-wider"
                          >
                            Total Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium  tracking-wider"
                          >
                            Pay With
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium  tracking-wider"
                          >
                            Actions
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium  tracking-wider"
                          ></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {invoices.map((invoice) => (
                          <tr key={invoice.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                              {invoice.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                              {invoice.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                              {invoice.slots}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-normal text-black">
                              {invoice.totalAmount}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap font-normal text-sm text-black">
                              {invoice.paid ? invoice.bank : '------'}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap font-normal text-right text-sm text-black">
                              {invoice.paid ? (
                                <button className="bg-secondary w-20 rounded-md px-2 py-1 text-white">
                                  Paid
                                </button>
                              ) : (
                                <button className="bg-primary w-20 rounded-md px-2 py-1 text-white">
                                  Unpaid
                                </button>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap font-normal text-right text-sm text-black">
                              {invoice.paid ? (
                                <button className="bg-secondary rounded-md px-2 py-1 text-white">
                                  Pay Now
                                </button>
                              ) : (
                                <button className="bg-primary rounded-md px-2 py-1 text-white">
                                  Pay Now
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Invoices
