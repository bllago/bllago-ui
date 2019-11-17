import root from '../root'
import fontSize from './fontSize'

const lineHeight = {
  mega1: Math.round(fontSize.mega1 * root._step),
  mega2: Math.round(fontSize.mega2 * root._step),
  maintitle: Math.round(fontSize.maintitle * root._step),
  title: Math.round(fontSize.title * root._step),
  subtitle: Math.round(fontSize.subtitle * root._step),
  body1: Math.round(fontSize.body1 * root._step),
  body2: Math.round(fontSize.body2 * root._step),
  caption1: Math.round(fontSize.caption1 * root._step),
  caption2: Math.round(fontSize.caption2 * root._step),
  _dimension: 'rem'
}

export default lineHeight
