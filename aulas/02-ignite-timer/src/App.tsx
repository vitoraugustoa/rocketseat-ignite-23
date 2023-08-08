import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="success" />
        <Button variant="danger" />
        <Button />
        <GlobalStyle />
      </ThemeProvider >
    </>
  )
}