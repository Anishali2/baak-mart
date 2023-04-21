import { agencies } from '@/constants/agencies'
import React from 'react'
import Header from '../Header'

const Agencies = () => {
  return (
    <div>
      <Header
        title="Agencies List"
        description="Pickup an agency to manage Baak Slots"
      />
      <div className="my-5">
        <p>Your hiring Agency</p>
        <div className="w-full space-y-2 my-2  bg-white p-3 shadow-sm rounded-main border border-secondary ">
          <div>
            Agency Name :<b>Akerman</b>
          </div>
          <p>
            Email :<b>example@gmail.com</b>
          </p>
          <p>
            Products:<b>20</b>
          </p>
        </div>
      </div>
      All Agencies
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
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium  tracking-wider"
              >
                Products
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {agencies.map((agency) => (
              <tr key={agency.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                  {agency.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                  {agency.agencyName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                  {agency.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-normal text-black">
                  {agency.products}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-normal text-black">
                  {agency.bookedSlots}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-normal text-right text-sm text-black">
                  <button className="bg-primary rounded-md px-2 py-1 text-white">
                    Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Agencies
