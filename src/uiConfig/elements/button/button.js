import theme from '../../root/theme'
import offset from '../../root/offset'
import lh from '../../functions/helpers/lh'
import fs from '../../functions/helpers/fs'

const button = {
  shape: {
    rectangle: {
      size: {
        sm: {
          paddingTop: offset(1),
          paddingBottom: offset(1),
          paddingLeft: offset(3),
          paddingRight: offset(3),
          lineHeight: lh('body2'),
          fontSize: fs('body2')
        },
        md: {
          paddingTop: offset(2),
          paddingBottom: offset(2),
          paddingLeft: offset(4),
          paddingRight: offset(4),
          lineHeight: lh('body1'),
          fontSize: fs('body1')
        },
        lg: {
          paddingTop: offset(3),
          paddingBottom: offset(3),
          paddingLeft: offset(4),
          paddingRight: offset(4),
          lineHeight: lh('body1'),
          fontSize: fs('body1')
        }
      }
    }
  },
  color: {
    primary: {
      variant: {
        contained: {
          backgroundColor: theme.primary.default,
          color: theme.color.white,
          borderWidth: '1px',
          borderColor: theme.primary.default,
          '&:hover': {
            borderColor: theme.primary.darken1,
            backgroundColor: theme.primary.darken1,
            color: theme.color.white
          }
        },
        outlined: {
          backgroundColor: 'transparent',
          borderColor: theme.primary.default,
          color: theme.primary.default,
          borderWidth: '1px',
          boxSizing: 'border-box',
          '&:hover': {
            borderColor: theme.primary.darken1,
            color: theme.primary.darken1
          }
        },
        text: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: theme.primary.default,
          borderWidth: '1px',
          boxSizing: 'border-box',
          '&:hover': {
            backgroundColor: theme.dark.lighten1,
            color: theme.dark.default
          }
        }
      }
    }
  }
}

export default button
