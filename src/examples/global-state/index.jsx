import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const values = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

const Page = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`p-4` + (theme === "dark" ? " bg-gray-900" : " bg-white")}>
      <Button />
    </main>
  );
};

const Button = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
      onClick={toggleTheme}
    >
      Cambiar tema
    </button>
  );
};
export const GlobalState = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
};
