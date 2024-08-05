import Image from 'next/image';
import React from 'react';

interface HistoryChildProps {
    name_person?: string;
    contact_info?: string;
    gender: string;
    date_of_birth?: string;
    emergency_contact?: string;
    insurance_provider?: string;
    profile_picture?: string;
}

const HistoryChild: React.FC<HistoryChildProps> = ({
    name_person,
    contact_info,
    date_of_birth,
    gender,
    emergency_contact,
    insurance_provider,
    profile_picture
}) => {
    return (
        <div className='flex flex-col space-y-[2.5rem]'>
            <div className='flex flex-col items-center space-y-4 max-w-full my-[2rem] block'>
                <Image className='rounded-full object-center object-cover' src={profile_picture} alt="Profile" width={150} height={150} />
                <span className='text-[1.25rem]'><strong>{name_person}</strong> </span>
            </div>

            <div className='flex flex-col space-y-4 gap-[1rem]'>
                <div className='flex flex-row space-x-4 items-center'>
                    <Image className='rounded-full object-center object-cover' src="/birth.svg" alt='' width={30} height={30} />
                    <div className='flex flex-col space-y-1'>
                        <span>Date Of Birth</span>
                        <span>{date_of_birth}</span>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <Image className='rounded-full object-center object-cover' src="/female.svg" alt='' width={30} height={30} />
                    <div className='flex flex-col space-y-1'>
                        <span>Gender</span>
                        <span>{gender}</span>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <Image className='rounded-full object-center object-cover' src="/phone.svg" alt='' width={30} height={30} />
                    <div className='flex flex-col space-y-1'>
                        <span>Contact Info</span>
                        <span>{contact_info}</span>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <Image className='rounded-full object-center object-cover' src="/phone.svg" alt='' width={30} height={30} />
                    <div className='flex flex-col space-y-1'>
                        <span>Emergency Contact</span>
                        <span>{emergency_contact}</span>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <Image className='rounded-full object-center object-cover' src="/insurance.svg" alt='' width={30} height={30} />
                    <div className='flex flex-col space-y-1'>
                        <span>Insurance Provider</span>
                        <span>{insurance_provider}</span>
                    </div>
                </div>
            </div>

            <div className='m-auto'>
                <button className='bg-lightgreen rounded-full py-[.7rem] px-[1.3rem]'>Show All Information</button>
            </div>

        </div>
    );
};

export default HistoryChild;
