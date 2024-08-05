export interface DataItem {
  id: string;
  value: {
    age: number;
    date_of_birth: string;
    diagnosis_history: {
      blood_presure: {
        diastolic: {
          levels: string,
          value: number
        },
        systolic: {
          levels: string,
          value: number
        }
      },
      heart_rate: {
        levels: string,
        value: number
      },
      month: string,
      respiratory_rate: {
        levels: string,
        value: number
      },
      temparature: {
        value: number,
        levels: string
      },
      year: number
    }[];
    diagnostic_list: {
      description: string,
      name: string,
      status: string
    }[];
    emergency_contact: string;
    gender: string;
    insurance_type: string;
    lab_results: string[];
    name: string;
    phone_number: string;
    profile_picture: string;
  };
}

export interface UseFetchArrayResult {
  data: DataItem[] | null;
  loading: boolean;
  error: string | null;
}


