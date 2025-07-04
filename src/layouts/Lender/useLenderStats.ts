import { useCallback, useEffect, useState } from 'react';
import { getAccessToken } from '@/utils/auth';
import { Lender, LenderStatCard } from '@/types/lender';

const useLenderStats = () => {
  const [cards, setCards] = useState<LenderStatCard[]>([]);
  const token = getAccessToken();
  const [lenders, setLenders] = useState<Lender[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLendersDatails = useCallback(async () => {
    try {
      const res = await fetch('https://accesscashflow.ionixxtech.com/nurupi/get-lender-overview', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const json = await res.json();
      const data = json.data || [];      
      console.log(data, 'data'); 
      setCards(data);
    } catch (error) {
      console.error('Error fetching lenders:', error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  const fetchLenders = useCallback(async () => {
      try {
        const res = await fetch('https://accesscashflow.ionixxtech.com/nurupi/lenders?page=1&size=10', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        const json = await res.json();
        const data = json.data?.lenderList || [];      
        console.log(data, 'data'); 
        setLenders(data);
      } catch (error) {
        console.error('Error fetching lenders:', error);
      } finally {
        setLoading(false);
      }
    }, [token]);    

  useEffect(() => {  
    fetchLendersDatails();  
    fetchLenders();    
  }, [fetchLenders, fetchLendersDatails, token]);
  return { cards, lenders, loading };
};

export default useLenderStats;
