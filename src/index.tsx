import './style.css'
import * as React from 'react'
import ReactLoading from 'react-loading';

type CoverProps = {
  coverAdornment: Function,
  on: boolean,
  color: string,
  opacity: React.ReactText,
  loadingProps: any
}

type ContainerSize = {
  width: string,
  height: string,
  display: string,
}

const Cover: React.FunctionComponent<CoverProps> = ({
  children,
  coverAdornment, // replace loading element

  on = false, // toggle loading 
  opacity = 0.4,
  loadingProps = {
    type: 'spin',
  }, // component ReactLoading in react-loading's porps
}) => {

  const parentRef = React.useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = React.useState<ContainerSize | undefined>(undefined)

  React.useEffect(() => {
    const childs: Element[] = Array.from(parentRef.current ? parentRef.current.children : [])
    let width: number = 0
    let height: number = 0

    function getAbsoluteHeight(el: Element) {
      const EL = el as HTMLElement

      const styles = window.getComputedStyle(EL);
      const margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

      return Math.ceil(EL.offsetHeight + margin);
    }

    const loadFn = () => {
      for (let el of childs) {
        if (el.tagName === 'IMG') {
          let image = el as HTMLImageElement
          if (width < image.clientWidth) width = image.clientWidth
          height += image.offsetHeight
        } else {
          if (width < el.getBoundingClientRect().width) width = el.getBoundingClientRect().width
          height += getAbsoluteHeight(el)
        }
      }

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
      <div className={on ? 'rc__cover--on' : 'rc__cover--off'}>
        {coverAdornment?.({ className: "rc__cover" }) || <ReactLoading className="rc__cover" {...loadingProps} />}
      </div>
      <div ref={parentRef} className="rc__children--blur" style={{ opacity: on ? opacity : 1 }}>
        {children}
      </div>
    </div>
  )
}

export default Cover