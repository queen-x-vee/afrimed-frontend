import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import useMessage from "./messageStore";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: null,
        accessToken: "",

        login: (userData) =>
          set((state) => ({
            isLoggedIn: true,
            user: userData,
          })),

        storeToken: (token) => {
          set((state) => ({
            accessToken: token,
          }));
        },

        logout: () => {
          // Clear user state
          set(() => ({
            isLoggedIn: false,
            user: null,
            accessToken: "",
          }));

          useMessage.getState().clearMessage();
        },
      }),
      { name: "profile" }
    )
  )
);

export default useAuthStore;
