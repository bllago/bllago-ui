import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const linkedin = {
  darken1: Color(colors.linkedin).darken(blending.darken1),
  default: colors.linkedin,
  lighten1: Color(colors.linkedin).darken(blending.lighten1),
  lighten2: Color(colors.linkedin).darken(blending.lighten2),
  lighten3: Color(colors.linkedin).darken(blending.lighten3),
  lighten4: Color(colors.linkedin).darken(blending.lighten4),
  lighten5: Color(colors.linkedin).darken(blending.lighten5),
  lighten6: Color(colors.linkedin).darken(blending.lighten6)
}

export default linkedin
