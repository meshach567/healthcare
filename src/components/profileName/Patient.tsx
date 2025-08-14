import React from 'react'
import useFetch from '../../hooks/useFetch'
import PatientChild from './PatientChild';
import { AiOutlineSearch } from 'react-icons/ai';

const Patient = () => {
  const { data } = useFetch('https://fedskillstest.coalitiontechnologies.workers.dev/');

  return <aside className="testimonial bg-white shadow-md ">
    <div className='flex justify-between items-center'>
      <h3 className='text-[1.04rem] font-bold'>Patients</h3>
      <span>{<AiOutlineSearch />}</span>
    </div>
    {data && data.map(item => (
      <PatientChild key={item.id} item={item} />
    ))}
  </aside>
}

export default Patient;