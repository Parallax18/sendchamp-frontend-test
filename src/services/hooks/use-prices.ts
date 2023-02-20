import { useQuery } from '@tanstack/react-query';

import { PricesService } from '@/services/pricesService';

const usePrices = () => {
  const useGetPrices = () =>
    useQuery({
      // todo: fix this
      // @ts-ignore
      queryKey: ['prices'],
      queryFn: PricesService.getPrices,
    });

  return { useGetPrices };
};

export default usePrices;
