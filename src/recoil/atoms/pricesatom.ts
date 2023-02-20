import { atom } from 'recoil';

export interface IPricingAtom {
  countries: any[];
  pricing: {
    from_country: number;
    to_country: number;
    services: [];
  };
}

const initial = {
  countries: [],
  pricing: {
    from_country: 1,
    to_country: 2,
    services: [],
  },
};

export const pricingAtom = atom<IPricingAtom>({
  key: 'pricing',
  // @ts-ignore
  default: initial,
});
