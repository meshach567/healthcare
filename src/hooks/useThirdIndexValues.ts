import { useMemo } from 'react';

interface Data {
    name_person?: string;
    contact_info: string;
    date_of_birth: string;
    gender: string;
    insurance_provider: string;
    emergency_contact: string;
    profile_picture: string;
  }

const useThirdIndexValues = (data: Data[], fields: (keyof Data)[]) => {
  return useMemo(() => {
    if (data.length < 3) return [];
    return fields.map(field => data[2][field]);
  }, [data, fields]);
};

export default useThirdIndexValues;
