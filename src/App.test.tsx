import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DynamicThemeProvider, themes } from "./contexts/ThemeContext";
import { EmailProvider } from "./contexts/EmailContext";
import { NewsProvider } from "./contexts/NewsContext";
import Home from "./pages/Home/Home";
test("dynamic theme colors are inverting on toggle", () => {
  render(
    <DynamicThemeProvider>
      <EmailProvider>
        <NewsProvider>
          <Home />
        </NewsProvider>
      </EmailProvider>
    </DynamicThemeProvider>
  );
  const input = screen.getByTestId("toggle-theme-button");
  expect(input).toHaveStyle(`color:${themes.dark.colors.text}`);

  fireEvent.click(input);
  expect(input).toHaveStyle(`color:${themes.light.colors.text}`);
});
