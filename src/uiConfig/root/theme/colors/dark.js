import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const dark = {
  darken1: Color(colors.dark)
    .darken(blending.darken1)
    .hex(),
  default: colors.dark,
  lighten1: Color(colors.dark)
    .mix(Color('#ffffff'), 0.9)
    .hex(),
  lighten2: Color(colors.dark)
    .lighten(0.75)
    .hex(),
  lighten3: Color(colors.dark)
    .lighten(0.5)
    .hex(),
  lighten4: Color(colors.dark)
    .lighten(blending.lighten4)
    .hex(),
  lighten5: Color(colors.dark)
    .lighten(blending.lighten5)
    .hex(),
  lighten6: Color(colors.dark)
    .lighten(blending.lighten6)
    .hex()
}

export default dark
