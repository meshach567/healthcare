import React from 'react'
import useThirdIndexValues from '../../hooks/useThirdIndexValues';
import ChildComponent from './historyChild';
import HistoryChild from './historyChild';

interface Data {
  name_person?: string;
  contact_info: string;
  date_of_birth: string;
  gender: string;
  insurance_provider: string;
  emergency_contact: string;
  profile_picture: string;
}

const History = () => {
  const data: Data[] = [
    {
      name_person: 'John Doe',
      contact_info: '123-456-7890',
      date_of_birth: '1990-01-01',
      emergency_contact: 'Jane Doe',
      gender: 'Male',
      insurance_provider: 'Type A',
      profile_picture: 'Type C'
    },
    {
      name_person: 'Alice Smith',
      contact_info: '987-654-3210',
      date_of_birth: '1985-05-15',
      gender: 'Male',
      emergency_contact: 'Bob Smith',
      insurance_provider: 'Type B',
      profile_picture: 'Type D'
    },
    {
      name_person: 'Jessica Taylor',
      contact_info: "(415) 555-1234",
      date_of_birth: "08/23/1996",
      gender: 'Female',
      emergency_contact: '(415) 555-5678',
      insurance_provider: 'Sunrise Health Assurance',
      profile_picture: "https://fedskillstest.ct.digital/4.png"
    },
    
  ];

  const fields: (keyof Data)[] = [
    'name_person',
    'contact_info',
    'date_of_birth',
    'gender',
    'emergency_contact',
    'insurance_provider',
    'profile_picture'
  ];

  const [name_person, contact_info, gender, date_of_birth, emergency_contact, insurance_provider, profile_picture] = useThirdIndexValues(data, fields);
  // const thirdIndexValues = useThirdIndexValues(data, fields);

  return (
    <section className="testimonial bg-white shadow-md">
      <HistoryChild 
      name_person={name_person}
      contact_info={contact_info}
      gender={gender}
      date_of_birth={date_of_birth}
      emergency_contact={emergency_contact}
      insurance_provider={insurance_provider}
      profile_picture={profile_picture}
    />
    </section>
  )
}

export default History