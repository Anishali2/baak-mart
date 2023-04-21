// import './styles.css'
import { monthly, today, weekly } from '@/constants/charts'
import React, { Fragment, useState } from 'react'
import { LineChart, Line, YAxis, CartesianGrid, Tooltip } from 'recharts'

export default function MonthlyVisitors() {
  const [chart, setChart] = useState('today')
  const buttons = ['today', 'weekly', 'monthly']
  return (
    <Fragment>
      <div className="flex bg-white shadow-md rounded-main flex-col my-4">
        <dt className="text-2xl ml-5 py-3 font-medium text-black truncate">
          Monthly Visitors
        </dt>
        <hr />
        <div className="flex  ml-5  my-2 space-x-2">
          {buttons.map((v, i) => (
            <button
              onClick={() => setChart(v)}
              key={i}
              className={` ${
                chart === v ? 'bg-primary text-white' : ' text-secondary'
              }  rounded-md capitalize px-2 py-1 `}
            >
              {v}
            </button>
          ))}
        </div>
        <LineChart
          width={800}
          height={300}
          //   data={data}
          data={chart == 'today' ? today : chart == 'weekly' ? weekly : monthly}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid vertical={false} />
          <YAxis dataKey="amt" domain={[0, 6000]} tickCount={7} />
          <Tooltip />
          <Line
            type="monotone"
            strokeWidth={8}
            dataKey="pv"
            stroke="#1BC167"
            fill="#1BC167"
          />
          <Line
            strokeWidth={8}
            type="monotone"
            dataKey="amt"
            stroke="#02AFF3"
            fill="#02AFF3"
          />
        </LineChart>
      </div>
    </Fragment>
  )
}
