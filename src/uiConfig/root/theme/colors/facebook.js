import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const facebook = {
  darken1: Color(colors.facebook).darken(blending.darken1),
  default: colors.facebook,
  lighten1: Color(colors.facebook).darken(blending.lighten1),
  lighten2: Color(colors.facebook).darken(blending.lighten2),
  lighten3: Color(colors.facebook).darken(blending.lighten3),
  lighten4: Color(colors.facebook).darken(blending.lighten4),
  lighten5: Color(colors.facebook).darken(blending.lighten5),
  lighten6: Color(colors.facebook).darken(blending.lighten6)
}

export default facebook
