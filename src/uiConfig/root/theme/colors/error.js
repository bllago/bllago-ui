import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const error = {
  darken1: Color(colors.error).darken(blending.darken1),
  default: colors.error,
  lighten1: Color(colors.error).darken(blending.lighten1),
  lighten2: Color(colors.error).darken(blending.lighten2),
  lighten3: Color(colors.error).darken(blending.lighten3),
  lighten4: Color(colors.error).darken(blending.lighten4),
  lighten5: Color(colors.error).darken(blending.lighten5),
  lighten6: Color(colors.error).darken(blending.lighten6)
}

export default error
