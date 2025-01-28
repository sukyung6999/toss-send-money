import { create, StateCreator } from 'zustand';
import { RemittanceType } from '../types/receive';

interface RemittanceStore {
  data: RemittanceType;
  setData: (newData: Partial<RemittanceType>) => void;
}

const storeCreator: StateCreator<RemittanceStore> = (set) => ({
  data: {
    amount: '0',
    payee: '',
    account: '',
    bank: '',
    tel: '',
  },
  setData: (newData) => {
    set((state) => ({
      data: { ...state.data, ...newData },
    }));
  },
});

export const useRemittanceStore = create<RemittanceStore>(storeCreator);
