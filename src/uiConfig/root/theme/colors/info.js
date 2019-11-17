import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const info = {
  darken1: Color(colors.info).darken(blending.darken1),
  default: colors.info,
  lighten1: Color(colors.info).darken(blending.lighten1),
  lighten2: Color(colors.info).darken(blending.lighten2),
  lighten3: Color(colors.info).darken(blending.lighten3),
  lighten4: Color(colors.info).darken(blending.lighten4),
  lighten5: Color(colors.info).darken(blending.lighten5),
  lighten6: Color(colors.info).darken(blending.lighten6)
}

export default info
