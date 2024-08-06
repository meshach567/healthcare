import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
} from "recharts";

interface DataPoint {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

const data: DataPoint[] = [
    {
        name: "Oct, 2023",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Nov, 2023",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Dec, 2023",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Jan, 2024",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Febuary 2024",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "March 2024",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    }
];

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value } = props;

    return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={4} textAnchor="middle">
            {value}
        </text>
    );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={16}
                textAnchor="end"
                fill="#666"
                transform="rotate(-35)"
            >
                {payload.value}
            </text>
        </g>
    );
};


const ProfileCard = () => {
    return (
        <article className="testimonial bg-white shadow-md">
            <div className='leading-6 p-[1rem]'>
                <h2>Diagnosis History</h2>
                <div className='cardsbox flex flex-col w-full mb-[1.5rem]'>
                    <div className='flex flex-col space-y-12 mb-[1rem] bg-purple rounded-[1rem]'>
                        <div className=' basis-1/4'>
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 30,
                                    right: 20,
                                    left: 10,
                                    bottom: 30,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8">
                                    <LabelList content={<CustomizedLabel />} />
                                </Line>
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                        <div className=' basis-1/2 p-[.5rem] my-[1.2rem]'>
                            <div className='flex items-center space-x-1'>
                                <div className='bg-purple rounded-full w-[.7rem] h-[.7rem]'></div>
                                <div>Systolic</div>
                            </div>
                            <code><strong>160</strong></code>
                            <p>Higher than Average</p>
                            <div className='flex items-center space-x-1'>
                                <div className='bg-purple rounded-full w-[.7rem] h-[.7rem]'></div>
                                <div>Diatolic</div>
                            </div>
                            <code><strong>70</strong></code>
                            <p>
                                Lower than Average
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-[.8rem]'>
                        <div className='bg-skyblue p-[.8rem] leading-8'>
                            <div className='bg-white rounded-full w-[4rem]'>
                                <Image className='object-center object-cover block' src="/respiratory.svg" alt='respository' width={150} height={150} priority />
                            </div>
                            <p>Respiratory Rate</p>
                            <h3>20 bpm</h3>
                            <p>Normal</p>
                        </div>

                        <div className='bg-lilac p-[.8rem] leading-8'>
                            <div className='bg-white rounded-full w-[4rem]'>
                                <Image className='object-center object-cover block' src="/temparature.svg" alt='respository' width={150} height={150} />
                            </div>
                            <p>Temperature</p>
                            <h3>98.6°F</h3>
                            <p>Normal</p>
                        </div>

                        <div className='bg-pink p-[.8rem] leading-8'>
                            <div className='bg-white rounded-full w-[4rem]'>
                                <Image className='object-center object-cover block' src="/heartBRM.svg" alt='respository' width={150} height={150} />
                            </div>
                            <p>Heart Rate</p>
                            <h3>78 bpm</h3>
                            <p>Lower than Average</p>
                        </div>
                    </div>
                </div>
            </div>
        </article >
    )
}

export default ProfileCard