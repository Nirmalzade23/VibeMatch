import { Stack } from "expo-router";
import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);
  const value = useMemo(() => ({ dark, toggle: () => setDark((d) => !d) }), [dark]);

  return (
    <ThemeContext.Provider value={value}>
      <Stack screenOptions={{ headerShown: false }}>
        {children}
      </Stack>
    </ThemeContext.Provider>
  );
}
