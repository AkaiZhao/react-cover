export const getStyleNumber = (el:Element, key: any):number => Number(window.getComputedStyle(el)[key].replace('px', ''))

export const getElHeight = (el:Element) :number => {
  return getStyleNumber(el, 'marginTop') +
  getStyleNumber(el, 'marginBottom') +
  el.getBoundingClientRect().height
}

export const getElWidth = (el:Element) :number => {
  return getStyleNumber(el, 'marginLeft') +
  getStyleNumber(el, 'marginRight') +
  el.getBoundingClientRect().width
}
