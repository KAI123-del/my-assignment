import create from 'zustand';
import axios from 'axios';

export const useGlobalState = create((set) => (
    {
        jwtToken: '',
        randomData: [],
        loginUser: async (arg) => {
            const { data } = await axios.post('https://jobless-nerd.onrender.com/api/users/login', arg);

            set({ jwtToken: data?.token })


        },
        fetchProduct: async () => {
            const { data } = await axios.get('https://jobless-nerd.onrender.com/api/products/630531ad22e95fcf696a8722');
            set({ randomData: [data] })
        }
    }
))