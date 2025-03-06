
import { create } from "zustand";

// API for login and registration

const fetchAuthAPI = (userData, type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === "login" && userData.email !== "test@example.com") {
        return reject("Користувач не знайдений");
      }
      resolve({ token: "fake-token-123", user: userData });
    }, 1000);
  });


// Store

export const useAuthStore = create((set) => ({
    
    user: null,
    token:null,
    isLoading: false,
    isLogin: false,
    error: null,
    
// Login

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { token, user } = await fetchAuthAPI({ email, password }, "login");
      set({ user, token, isLogin: true, isLoading: false });
    } catch (err) {
      set({ error: err, isLoading: false });
    }},
    
// Registration
    
  register: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { token, user } = await fetchAuthAPI({ email, password }, "register");
      set({ user, token,isLogin:true, isLoading: false });
    } catch (err) {
      set({ error: err, isLoading: false });
        }
    },
   // Вихід із системи
    logout: () => set({ user: null, token: null }),
}))


// Opening and closing modals

export const useModalStore = create((set) => ({

    isRegistrationFormOpen: false,
    isLoginFormOpen: false,
    isForgetPasswordOpen: false,
    
    openRegistration: () => set({ isRegistrationFormOpen: true,isLoginFormOpen: false }),
    closeRegistration: () => set({ isRegistrationFormOpen: false }),
    openLogin: () => set({ isLoginFormOpen: true,isRegistrationFormOpen: false,isForgetPasswordOpen: false } ),
    closeLogin: () => set({ isLoginFormOpen: false }),
    openForgetPassword: () => set({ isForgetPasswordOpen: true,isLoginFormOpen: false }),
    closeForgetPassword: () => set({ isForgetPasswordOpen: false }),
}))