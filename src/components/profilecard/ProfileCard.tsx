import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend as ChartLegend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, ChartLegend, Filler);

interface DataPoint {
    name: string;
    systolic: number;
    diastolic: number;
}

const data: DataPoint[] = [
    { name: "Oct, 2023", systolic: 120, diastolic: 80 },
    { name: "Nov, 2023", systolic: 95, diastolic: 60 },
    { name: "Dec, 2023", systolic: 135, diastolic: 75 },
    { name: "Jan, 2024", systolic: 115, diastolic: 65 },
    { name: "Feb, 2024", systolic: 145, diastolic: 70 },
    { name: "Mar, 2024", systolic: 160, diastolic: 78 },
];

const labels: string[] = data.map(d => d.name);
const systolicValues: number[] = data.map(d => d.systolic);
const diastolicValues: number[] = data.map(d => d.diastolic);

// Chart.js configuration closely matching the mockup style


const ProfileCard = () => {
    return (
        <article className="testimonial bg-white shadow-md">
            <div className='leading-6 p-[1rem]'>
                <h2>Diagnosis History</h2>
                <div className='cardsbox flex flex-col w-full mb-[1.5rem]'>
                    <div className='flex flex-col space-y-6 mb-[1rem] bg-purple rounded-[1rem] p-[1rem]'>
                        <div className='flex justify-between items-center'>
                            <div className='text-[.85rem] text-darkgrey'>Blood Pressure</div>
                            <div className='text-[.8rem] text-darkgrey'>Last 6 months</div>
                        </div>
                        <div className=' basis-1/4'>
                            <Line
                                data={{
                                    labels,
                                    datasets: [
                                        {
                                            label: 'Systolic',
                                            data: systolicValues,
                                            borderColor: '#E66FD2',
                                            backgroundColor: 'rgba(230,111,210,0.15)',
                                            pointRadius: 3,
                                            fill: true,
                                            tension: 0.35,
                                        },
                                        {
                                            label: 'Diastolic',
                                            data: diastolicValues,
                                            borderColor: '#8C6FE6',
                                            backgroundColor: 'rgba(140,111,230,0.15)',
                                            pointRadius: 3,
                                            fill: true,
                                            tension: 0.35,
                                        },
                                    ],
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: {
                                        x: {
                                            ticks: { maxRotation: 35, minRotation: 35, font: { size: 10, family: 'Manrope' } },
                                            grid: { display: false },
                                        },
                                        y: {
                                            suggestedMin: 50,
                                            suggestedMax: 180,
                                            grid: { color: 'rgba(8, 76, 119, 0.08)' },
                                            ticks: { stepSize: 20, font: { size: 10, family: 'Manrope' } },
                                        },
                                    },
                                    elements: { point: { hoverRadius: 4 } },
                                    plugins: {
                                        legend: { position: 'right' as const, labels: { boxWidth: 10, boxHeight: 10 } },
                                        tooltip: { enabled: true },
                                    },
                                }}
                                height={300}
                            />
                        </div>
                        <div className=' basis-1/2 p-[.5rem] my-[.4rem] grid grid-cols-2 gap-4'>
                            <div>
                                <div className='flex items-center space-x-2'>
                                    <div className='bg-ben rounded-full w-[.6rem] h-[.6rem]'></div>
                                    <div>Systolic</div>
                                </div>
                                <div className='text-[1.2rem] font-bold'>160</div>
                                <p className='text-[.8rem] text-darkgrey'>Higher than Average</p>
                            </div>
                            <div>
                                <div className='flex items-center space-x-2'>
                                    <div className='bg-paleblue rounded-full w-[.6rem] h-[.6rem]'></div>
                                    <div>Diastolic</div>
                                </div>
                                <div className='text-[1.2rem] font-bold'>70</div>
                                <p className='text-[.8rem] text-darkgrey'>Lower than Average</p>
                            </div>
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