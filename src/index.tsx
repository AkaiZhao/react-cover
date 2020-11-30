import './style.css'
import * as React from 'react'
import ReactLoading, { LoadingProps, LoadingType } from 'react-loading';

interface CoverProps {
  on: boolean;
  opacity?: React.ReactText;
  color?: string;
  type?: LoadingType;
  loadingProps?: LoadingProps;
  coverAdornment?: Function;
  inline?: boolean;
  cursor?: string
}

interface ContainerSize {
  width: string;
  height: string;
  display: string;
}

function getAbsoluteHeight(el: Element): number {
  const EL = el as HTMLElement
  const styles = window.getComputedStyle(EL)
  const margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom'])
  return Math.ceil(EL.offsetHeight + margin)
}

const Cover: React.FunctionComponent<CoverProps> = ({
  on = false, // toggle loading 
  opacity = 0.4,
  color = '#333', // for react-loading
  type = 'spin', // for react-loading
  loadingProps = {}, // component ReactLoading in react-loading's porps
  inline = false,
  cursor,

  coverAdornment, // replace loading element
  children,
}) => {
  const parentRef = React.useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = React.useState<ContainerSize | undefined>(undefined)

  React.useEffect(() => {
    const childs: Element[] = Array.from(parentRef.current ? parentRef.current.children : [])
    let width: number = 0
    let height: number = 0

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
    <div
      className="rc__root"
      style={{
        display: inline ? 'inline-block' : 'block',
        cursor,
        ...containerSize,
      }}
    >
      <div className={on ? 'rc__cover--on' : 'rc__cover--off'}>
        {coverAdornment?.({ className: "rc__cover" }) ||
          <ReactLoading
            className="rc__cover"
            color={color}
            type={type}
            {...loadingProps}
          />
        }
      </div>
      <div ref={parentRef} className="rc__children--blur" style={{ opacity: on ? opacity : 1 }}>
        {children}
      </div>
    </div >
  )
}

export default Cover