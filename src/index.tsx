import './style.css'
import * as React from 'react'
import { string } from 'prop-types'


type CoverProps = {
  coverAdornment: JSX.IntrinsicElements,
  on: boolean,
  color: string,
  opacity: React.ReactText,
}

type ContainerSize = {
  width: string,
  height: string,
  display: string,
}

const Cover: React.FunctionComponent<CoverProps> = ({
  children,
  coverAdornment,

  on = false,
  color = '',
  opacity = 0.4,
}) => {

  const parentRef = React.useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = React.useState<ContainerSize | undefined>(undefined)

  React.useEffect(() => {
    const childs: Element[] = Array.from(parentRef.current ? parentRef.current.children : [])
    let width: number = 0
    let height: number = 0
    console.log(1);

    function getAbsoluteHeight(el: Element) {
      const EL = el as HTMLElement
      var styles = window.getComputedStyle(EL);

      var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);
      console.log(margin, EL.offsetHeight);

      return Math.ceil(EL.offsetHeight + margin);
    }

    const loadFn = () => {
      for (let el of childs) {
        if (el.tagName === 'IMG') {
          let image = el as HTMLImageElement
          if (width < image.clientWidth) width = image.clientWidth
          height += image.offsetHeight
        } else {
          console.log(getAbsoluteHeight(el));

          if (width < el.getBoundingClientRect().width) width = el.getBoundingClientRect().width
          height += getAbsoluteHeight(el)
        }
      }
      console.log('final', width, height);

      setContainerSize(() => ({
        width: `${width}px`,
        height: `${height}px`,
        display: 'inline-block'
      }))
    }

    window.addEventListener('load', loadFn)
    return () => window.removeEventListener('load', loadFn)

  }, [children, parentRef])

  return (
    <div className="rc__root" style={containerSize}>
      <div className={`
        ${on
          ? 'rc__cover--on'
          : 'rc__cover--off'
        } 
        ${color}
      `}>
        {coverAdornment ||
          <svg className="rc__cover" width={32} height={32} x="0px" y="0px" viewBox="0 0 50 50" >
            <path fill={color} d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite" />
            </path>
          </svg>
        }

      </div>
      <div
        className="rc__children--blur"
        style={{ opacity: on ? opacity : 1 }}
        ref={parentRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Cover