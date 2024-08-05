"use client"
import { useState, useEffect } from 'react';
import { DataItem, UseFetchArrayResult } from '../utils/intefaces';

let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

const DEFAULT_OPTIONS = {
  headers: {
    'Authorization': `Basic ${auth}`
  }
}

const useFetch = (url: string): UseFetchArrayResult => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...DEFAULT_OPTIONS });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const jsonData: { [key: string]: DataItem["value"] } = await response.json();
        const dataArray: DataItem[] = Object.keys(jsonData).map(key => ({
          id: key,
          value: jsonData[key],
        }));
        setData(dataArray);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      };
    }
    fetchData();

  }, [url]);

  return { data, loading, error };
};

export default useFetch;
