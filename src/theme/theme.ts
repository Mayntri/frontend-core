import { createTheme, ThemeOptions } from '@mui/material/styles'
import colors from '../assets/test.module.scss'
import { componentStyleOverrides } from './componentStyleOverrides'
import { palette } from './palette'
import { typography } from './typography'

export const theme = () => {
  const color = colors

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
  }

  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: palette(themeOption),
    typography: typography(themeOption),
  }

  const themes = createTheme(themeOptions)
  themes.components = componentStyleOverrides(themeOption)

  return themes

  return themes
}
