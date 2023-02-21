import type React from 'react';
import { atom } from 'recoil';

import { SmsIcon } from '@/components/icons';

interface IModalAtom {
  isOpen: boolean;
  ManagedModalBody?: React.FC<any>;
  modalProps?: {
    Icon: React.FC;
    type: string;
    subtext: string[];
    sending_price: string;
    receiving_price?: string;
    unit: string;
  };
}

const initial: IModalAtom = {
  isOpen: false,
  modalProps: {
    Icon: SmsIcon,
    type: 'SMS',
    subtext: ['To Send SMS', 'To Receive SMS'],
    sending_price: 'AED 0.4044',
    unit: 'sms',
  },
};

const modalAtom = atom<IModalAtom>({
  key: 'modal',
  default: initial,
});

export default modalAtom;
