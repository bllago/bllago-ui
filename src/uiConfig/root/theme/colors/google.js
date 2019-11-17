import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const google = {
  darken1: Color(colors.google).darken(blending.darken1),
  default: colors.google,
  lighten1: Color(colors.google).darken(blending.lighten1),
  lighten2: Color(colors.google).darken(blending.lighten2),
  lighten3: Color(colors.google).darken(blending.lighten3),
  lighten4: Color(colors.google).darken(blending.lighten4),
  lighten5: Color(colors.google).darken(blending.lighten5),
  lighten6: Color(colors.google).darken(blending.lighten6)
}

export default google
