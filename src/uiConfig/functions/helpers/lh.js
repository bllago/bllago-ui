import { lineHeight } from '../../root/typography'

export default function lh(size) {
  return lineHeight[size] + lineHeight._dimension
}
