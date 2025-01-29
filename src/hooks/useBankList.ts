import { useQuery } from '@tanstack/react-query';
import { getBanksList } from '../api/receive.api';

export const useBankList = () => {
  return useQuery({
    queryKey: ['bank'],
    queryFn: () => getBanksList(),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
  });
};
