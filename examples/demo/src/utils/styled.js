import styledComponent from 'styled-components'
import media from './media'

const MEDIA = {
  XS: `@media (max-width: ${media.xs}px)`,
  SM: `@media (max-width: ${media.sm}px)`,
  MD: `@media (max-width: ${media.md}px)`,
  LG: `@media (max-width: ${media.lg}px)`
}

const styled = (tagNmae) =>
  (style = [], ...keys) => {
    if (!Array.isArray(style)) return styledComponent[tagNmae](style)

    let styleString = style.reduce((res, styleString, i, array) => {
      res = res + styleString
      if (array[i + 1] && keys[i]) res = res + keys[i]
      return res
    }, '')

    while (1) {
      const mediaStyle = styleString.match(/(XS|SM|MD|LG)/gs)
      if (mediaStyle) styleString = styleString.replace(/_(XS|SM|MD|LG)/, MEDIA[mediaStyle[0]])
      else break
    }

    return styledComponent[tagNmae]`${styleString}`
  }

export default styled
