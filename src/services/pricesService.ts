import type { IPricingAtom } from '@/recoil/atoms/pricesatom';

import { ApiEndpoints } from './utils/api-endpoints';
import { HttpClient } from './utils/http';

export const PricesService = Object.freeze({
  getPrices: (): Promise<IPricingAtom> =>
    HttpClient.get({
      url: ApiEndpoints.prices,
    }),
});
