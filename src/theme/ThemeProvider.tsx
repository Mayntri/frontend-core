import { CssBaseline, Theme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { theme as DefaultTheme } from '.'

export const ThemeProvider = ({
  children,
  theme = DefaultTheme(),
}: {
  children: React.ReactNode
  theme?: Theme
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
