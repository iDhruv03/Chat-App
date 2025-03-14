import {crate} from "zustand";

export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: true,
    
}))