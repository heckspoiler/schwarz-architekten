import { create } from 'zustand';

interface EmailStoreState {
  setResult: any;
  setMessage: any;
  setEmail: any;
  setPhone: any;
  setFirstname: any;
  firstname: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
  result: any;
  isLoading: boolean;
}

const emailStore = create<EmailStoreState>((set) => ({
  firstname: '',
  surname: '',
  phone: '',
  email: '',
  message: '',
  result: null,
  isLoading: false,
  setFirstname: (firstname: string) => set({ firstname }),
  setSurname: (surname: string) => set({ surname }),
  setPhone: (phone: string) => set({ phone }),
  setEmail: (email: string) => set({ email }),
  setMessage: (message: string) => set({ message }),
  setResult: (result: any) => set(() => ({ result })),
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default emailStore;
