import styledComponent from 'styled-components'
import media from './media'

const MEDIA = {
  XS: `@media (max-width: ${media.xs}px)`,
  SM: `@media (max-width: ${media.sm}px)`,
  MD: `@media (max-width: ${media.md}px)`,
  LG: `@media (max-width: ${media.lg}px)`
}

const styled = (tagName) =>
  (style = [], ...keys) => {
    if (!Array.isArray(style)) {
      if (typeof tagName === 'string') return styledComponent[tagName](style)
      else return styledComponent(tagName)(style)
    }

    const styleString = style.map((str) => {
      while (1) {
        const mediaStyle = str.match(/(XS|SM|MD|LG)/gs)
        if (mediaStyle) str = str.replace(/_(XS|SM|MD|LG)/, MEDIA[mediaStyle[0]])
        else break
      }
      return str
    })

    if (typeof tagName === 'string') return styledComponent[tagName](styleString, ...keys)
    else return styledComponent(tagName)(styleString, ...keys)
  }

export default styled
