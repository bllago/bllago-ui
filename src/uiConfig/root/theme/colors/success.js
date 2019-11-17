import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const success = {
  darken1: Color(colors.success).darken(blending.darken1),
  default: colors.success,
  lighten1: Color(colors.success).darken(blending.lighten1),
  lighten2: Color(colors.success).darken(blending.lighten2),
  lighten3: Color(colors.success).darken(blending.lighten3),
  lighten4: Color(colors.success).darken(blending.lighten4),
  lighten5: Color(colors.success).darken(blending.lighten5),
  lighten6: Color(colors.success).darken(blending.lighten6)
}

export default success
