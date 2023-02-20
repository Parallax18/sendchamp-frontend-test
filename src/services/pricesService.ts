import { ApiEndpoints } from './utils/api-endpoints';
import { HttpClient } from './utils/http';

export const PricesService = Object.freeze({
  getPrices: () =>
    HttpClient.get({
      url: ApiEndpoints.prices,
    }),
});
