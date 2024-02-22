import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: null,

        login: (userData) =>
          set((state) => ({
            isLoggedIn: true,
            user: userData,
          })),

        logout: () => {
          // Clear user state
          set(() => ({
            isLoggedIn: false,
            user: null,
          }));
        },
      }),
      { name: "profile" }
    )
  )
);

export default useAuthStore;
