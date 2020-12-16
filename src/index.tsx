import './style.css'
import * as React from 'react'
import ReactLoading, { LoadingProps, LoadingType } from 'react-loading'
interface CoverProps {
  on: boolean;
  opacity?: React.ReactText;
  color?: string;
  type?: LoadingType;
  size?: React.ReactText;
  loadingProps?: LoadingProps;
  coverAdornment?: Function;
  inline?: boolean;
  cursor?: string
}

interface ContainerSize {
  width: number | string;
  height: number | string;
}

const initialContainerSize: ContainerSize = { width: '', height: '' }
const getStyleNumber = (el:Element, key: any):number => Number(window.getComputedStyle(el)[key].replace('px', ''))

const Cover: React.FunctionComponent<CoverProps> = ({
  on, // toggle loading
  opacity = 0.4,
  color = '#333', // for react-loading
  type = 'spin', // for react-loading
  loadingProps = {}, // component ReactLoading in react-loading's porps
  inline = false,
  cursor = 'initial',
  size = 32,
  coverAdornment, // replace loading element
  children,
}) => {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const parentRef = React.useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = React.useState<ContainerSize>(initialContainerSize)

  const computedChildSize = () => {
    setContainerSize(initialContainerSize) // reset size

    let width = 0
    let height = 0

    const childs: Element[] = Array.from(parentRef.current!.children!)
    for (const el of childs) {
      // fix can't correct to get image size before image loaded
      const imageEl = el as HTMLImageElement
      if (el.tagName === 'IMG' && !imageEl.complete) {
        imageEl.onload = () => computedChildSize()
      } else {
        const size = el.getBoundingClientRect()
        const computedWidth = getStyleNumber(el, 'marginLeft') + getStyleNumber(el, 'marginRight') + size.width
        const computedHeight = getStyleNumber(el, 'marginTop') + getStyleNumber(el, 'marginBottom') + size.height

        width = width > computedWidth ? width : computedWidth
        height = height + computedHeight
      }
    }
    setContainerSize({ width, height })
  }

  React.useEffect(() => {
    computedChildSize()
    const handleResize = () => {
      computedChildSize()
    }// reset size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [children, parentRef])

  return (
    <div
      ref={rootRef}
      className="rc__root"
      style={{
        display: inline ? 'inline-block' : 'block',
        cursor,
        ...containerSize,
      }}
    >
      <div className={`rc__cover--${on ? 'on' : 'off'}`}>
        { coverAdornment?.({ className: 'rc__cover' }) ||
          <ReactLoading
            className="rc__cover"
            color={color}
            type={type}
            width={Number(size) || size}
            height={Number(size) || size}
            {...loadingProps}
          />
        }
      </div>
      <div ref={parentRef} className="rc__children--blur" style={{ opacity: on ? opacity : '' }}>
        {children}
      </div>
    </div >
  )
}

export default Cover
