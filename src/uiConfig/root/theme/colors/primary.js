import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const primary = {
  darken1: Color(colors.primary)
    .darken(blending.darken1)
    .hex(),
  default: colors.primary,
  lighten1: Color(colors.primary)
    .lighten(blending.lighten1)
    .hex(),
  lighten2: Color(colors.primary)
    .lighten(blending.lighten2)
    .hex(),
  lighten3: Color(colors.primary)
    .lighten(blending.lighten3)
    .hex(),
  lighten4: Color(colors.primary)
    .lighten(blending.lighten4)
    .hex(),
  lighten5: Color(colors.primary)
    .lighten(blending.lighten5)
    .hex(),
  lighten6: Color(colors.primary)
    .lighten(blending.lighten6)
    .hex()
}

export default primary
