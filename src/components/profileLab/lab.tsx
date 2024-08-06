import Image from 'next/image';
import React from 'react'

const a4 = ['Blood Tests', 'CT Scans', 'Radiology Reports', 'X-Rays', 'Urine Test'];


const Lab = () => {

    return (
        <section className="testimonial flow bg-white shadow-md ">
            <div className='flex flex-col space-y-6'>
                <h2 className='text-[1.09rem] my-[1rem]'>Labs Result</h2>
                <div className='flex flex-row justify-between items-center'>
                    <span>{a4[0]}</span>
                    <Image className=' object-center object-cover' src='/arrowdown.svg' alt='arrow down' width={20} height={20} />
                </div>
                <div className='flex flex-row justify-between items-center' >
                    <span>{a4[1]}</span>
                    <Image className=' object-center object-cover' src='/arrowdown.svg' alt='arrow down' width={20} height={20} />
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>{a4[2]}</span>
                    <Image className=' object-center object-cover' src='/arrowdown.svg' alt='arrow down' width={20} height={20} />
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>{a4[3]}</span>
                    <Image className=' object-center object-cover' src='/arrowdown.svg' alt='arrow down' width={20} height={20} />
                </div>

                <div className='flex flex-row justify-between items-center'>
                    <span>{a4[4]}</span>
                    <Image className=' object-center object-cover' src='/arrowdown.svg' alt='arrow down' width={20} height={20} />
                </div>

            </div>
        </section>

    )
}

export default Lab