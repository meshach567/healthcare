import Image from 'next/image';
import React from 'react'
import useFetch from '../../hooks/useFetch';


// const a10 = ['Complete Blood Count (CBC)', 'Echocardiogram', 'Liver Function Tests', 'Mammography', 'Urinalysis', 'Ultrasound', 'Prostate-Specific Antigen (PSA)', 'Hemoglobin A1C', 'Lipid Panel', 'Radiology Report'];

// const a9 = ['Complete Blood Count (CBC)', 'Basic Metabolic Panel (BMP)', 'Electrocardiogram (EKG)', 'Comprehensive Metabolic Panel (CMP)', 'X-Ray', 'MRI', 'Renal Function Tests', 'Radiology Report', 'Hemoglobin A1C'];

// const a8 = ['Complete Blood Count (CBC)', 'CT Scan', 'Prostate-Specific Antigen (PSA)', 'Comprehensive Metabolic Panel (CMP)', 'Hemoglobin A1C', 'Basic Metabolic Panel (BMP)', 'Vitamin D Level', 'Echocardiogram'];

// const a6 = ['Urinalysis', 'Renal Function Tests', 'Lipid Panel', 'Basic Metabolic Panel (BMP)', 'Complete Blood Count (CBC)', 'Mammography'];

// const a5 = ['CT Scan', 'Mammography', 'Liver Function Tests', 'Radiology Report', 'Complete Blood Count (CBC)'];

// const a3 = ['Basic Metabolic Panel (BMP)', 'Comprehensive Metabolic Panel (CMP)', 'Electrocardiogram (EKG)'];

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