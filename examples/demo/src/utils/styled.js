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

    const styleString = style.map((str) => {
      while (1) {
        const mediaStyle = str.match(/(XS|SM|MD|LG)/gs)
        if (mediaStyle) str = str.replace(/_(XS|SM|MD|LG)/, MEDIA[mediaStyle[0]])
        else break
      }
      return str
    })

    return styledComponent[tagNmae](styleString, ...keys)
  }

export default styled
