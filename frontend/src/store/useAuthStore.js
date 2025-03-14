import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    checkAuth: async() => {
        try {
            const res = await aciosInstance.get("/auth/check");
        } catch (error) {
            
        }
    }
}));