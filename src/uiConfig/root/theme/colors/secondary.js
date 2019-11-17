import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const secondary = {
  darken1: Color(colors.secondary).darken(blending.darken1),
  default: colors.secondary,
  lighten1: Color(colors.secondary).darken(blending.lighten1),
  lighten2: Color(colors.secondary).darken(blending.lighten2),
  lighten3: Color(colors.secondary).darken(blending.lighten3),
  lighten4: Color(colors.secondary).darken(blending.lighten4),
  lighten5: Color(colors.secondary).darken(blending.lighten5),
  lighten6: Color(colors.secondary).darken(blending.lighten6)
}

export default secondary
