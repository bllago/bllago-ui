import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const warning = {
  darken1: Color(colors.warning).darken(blending.darken1),
  default: colors.warning,
  lighten1: Color(colors.warning).darken(blending.lighten1),
  lighten2: Color(colors.warning).darken(blending.lighten2),
  lighten3: Color(colors.warning).darken(blending.lighten3),
  lighten4: Color(colors.warning).darken(blending.lighten4),
  lighten5: Color(colors.warning).darken(blending.lighten5),
  lighten6: Color(colors.warning).darken(blending.lighten6)
}

export default warning
