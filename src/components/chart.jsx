import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = () => {
    const data = [
        { name: 'Jan', users: 400, pv: 2400, amt: 2400 },
        { name: 'Feb', users: 250, pv: 2400, amt: 2400 },
        { name: 'Mar', users: 300, pv: 2400, amt: 2400 },
        { name: 'April', users: 150, pv: 2400, amt: 2400 },
        { name: 'May', users: 40, pv: 2400, amt: 2400 },
        { name: 'July', users: 150, pv: 2400, amt: 2400 },
        { name: 'Aug', users: 400, pv: 2400, amt: 2400 },
        { name: 'Sep', users: 100, pv: 2400, amt: 2400 },
        { name: 'Oct', users: 50, pv: 2400, amt: 2400 },
        { name: 'Nov', users: 250, pv: 2400, amt: 2400 },
        { name: 'Dec', users: 400, pv: 2400, amt: 2400 },
    ];
    return (
        <div className='mt-5 flex flex-col gap-3'>
            <h1 className='text-2xl'>Users Analytics </h1>
            <ResponsiveContainer width="100%" aspect={3 / 1} className="lg:h-[50vh]" >
                <LineChart data={data} >
                    <Line type="monotone" dataKey="users" stroke="#8884d8" />
                    <CartesianGrid stroke="#bab1b1" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Chart

