// hooks/useLenderActions.ts
import { useMemo } from 'react';

type LenderActions =  {
  handleSearchChange: (value: string) => void;
  handleDownload: () => void;
  handleLog: () => void;
  handleFilter: () => void;
}

const useSearchAction = (): LenderActions => {
  return useMemo(() => {
    const handleSearchChange = (value: string) => {
      console.log('Search:', value);
    };

    const handleDownload = () => {
      console.log('Download Report');
    };

    const handleLog = () => {
      console.log('Activity Log');
    };

    const handleFilter = () => {
      console.log('Filter clicked');
    };
    return {
      handleSearchChange,
      handleDownload,
      handleLog,
      handleFilter,
    };
  }, []);
};

export default useSearchAction;
