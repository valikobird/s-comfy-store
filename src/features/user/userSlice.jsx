import { createSlice } from "@reduxjs/toolkit";

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

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
