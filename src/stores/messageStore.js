import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useMessage = create(
  devtools(
    persist(
      (set) => ({
        savedMessages: [],

        storeMessage: (messageArray) =>
          set((state) => ({
            savedMessages: messageArray,
          })),

        clearMessage: () => {
          // Clear user state
          set(() => ({
            savedMessages: [],
          }));
        },
      }),
      { name: "messages" }
    )
  )
);

export default useMessage;
