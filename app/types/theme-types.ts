type ThemeColors = "Zinc" | "Blue" | "Orange" | "Green" | "Rose";

interface ThemeColorStateParams {
  color: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}
