import { create } from 'zustand' 

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chat-theme") || "coffee",

    setTheme: (theme) => {
        // TODO: update user DB with prefered theme

        localStorage.setItem("chat-theme", theme);
        set({ theme });
    },
}))

