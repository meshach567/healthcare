import React from 'react'

interface List {
    id: number;
    problem: string;
    description: string;
    status: string;
}

const list: List[] = [
    {
        id: 1,
        problem: 'Hypertention',
        description: 'Chronic high blood pressure',
        status: 'Under Observation',
    },
    {
        id: 2,
        problem: 'Type 2 Diabetes',
        description: 'Insulin resistance and elevated blood sugar',
        status: 'Cured',
    },
    {
        id: 3,
        problem: 'Asthma',
        description: 'Recurrent episodes of bronchial constriction',
        status: 'Inactive',
    },
]

const List = () => {
    return (
        <section className="testimonial bg-white shadow-md ">
            <div className='flex flex-col p-[.89rem] space-y-8'>
                <h2>Diagnostic List</h2>

                <div className='flex flex-col gap-[1rem] space-y-8'>
                    <div className='flex flex-row gap-[1rem] bg-faintgrey rounded-full px-[1rem] py-[.8rem]'>
                        <span className='basis-1/4 text-[.8rem]'>Problem/Diagnosis</span>
                        <span className="basis-1/2 text-[.8rem]">Description</span>
                        <span className='basis-1/4 text-[.8rem]'>Status</span>
                    </div>
                    {list.map(item => (
                        <div className='flex flex-row items-center gap-[1rem] px-[1rem] py-[.8rem]' key={item.id}>
                            <span className='basis-1/4 text-[.7rem]'>{item.problem}</span>
                            <span className="basis-1/2 text-[.7rem]">{item.description}</span>
                            <span className='basis-1/4 text-[.7rem]'>{item.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default List;