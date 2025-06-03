import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  corporate: "corporate",
  business: "business",
};

const initialState = {
  user: { username: "valiko" },
  theme: getThemeFromLocalStorage(),
};

function getThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme") || themes.corporate;
  applyTheme(theme);

  return theme;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully.");
    },
    toggleTheme: (state) => {
      const { corporate, business } = themes;
      state.theme = state.theme === corporate ? business : corporate;
      applyTheme(state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export const { logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
