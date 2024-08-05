import React from 'react'
import { DataItem } from '../../utils/intefaces';
import Image from 'next/image';
import { AiOutlineEllipsis } from 'react-icons/ai';

interface ChildProps {
    item: DataItem;
}

const PatientChild: React.FC<ChildProps> = ({ item }) => {
    const { profile_picture, name, gender, age } = item.value;
    // console.log(age, name, gender, profile_picture)
    return (
        <div className='flex justify-between items-center  p-[1rem] '>
            <div className='flex flex-row gap-[1rem]'>
                <div className='max-w-full block'>
                    <Image src={profile_picture} style={{ objectFit: "cover", objectPosition: "center"}} alt='profile picture' width={40} height={40} priority />
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-[13px]'>{name}</h6>
                    <p className='text-[11px]'>{gender}, {age}</p>
                </div>
            </div>
            <div>{<AiOutlineEllipsis />}</div>
        </div>
    );
};

export default PatientChild;