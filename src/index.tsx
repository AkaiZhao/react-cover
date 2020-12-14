import './style.css'
import * as React from 'react'
import ReactLoading, { LoadingProps, LoadingType } from 'react-loading'
interface CoverProps {
  on: boolean;
  unmountOnExit?: boolean;
  opacity?: React.ReactText;
  color?: string;
  type?: LoadingType;
  size?: number;
  loadingProps?: LoadingProps;
  coverAdornment?: Function;
  inline?: boolean;
  cursor?: string
}

interface ContainerSize {
  width: number | string;
  height: number | string;
}

function getAbsoluteHeight (el: Element): number {
  const EL = el as HTMLElement
  const styles = window.getComputedStyle(EL)

  const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
  return Math.ceil(EL.offsetHeight + (margin || 0))
}

const CoverComponent: React.FunctionComponent<CoverProps> = ({
  on = false, // toggle loading
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
  const [containerSize, setContainerSize] = React.useState<ContainerSize>({ width: '', height: '' })

  const setRefSize = ():void => {
    setContainerSize(() => ({
      width: parentRef.current?.getBoundingClientRect().width!,
      height: parentRef.current?.getBoundingClientRect().height!,
    }))
  }
  // set width and height when resize
  React.useEffect(() => {
    const handleResize = () => {
      // reset size first
      setContainerSize(() => ({
        width: '',
        height: '',
      }))

      setContainerSize(() => ({
        width: parentRef.current?.getBoundingClientRect().width!,
        height: parentRef.current?.getBoundingClientRect().height!,
      }))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [children, parentRef])

  // set width and height on load
  React.useEffect(() => {
    // reset size first
    setContainerSize(() => ({
      width: '',
      height: '',
    }))

    const childs: Element[] = Array.from(parentRef.current ? parentRef.current.children : [])
    let width: number = 0
    let height: number = 0

    for (const el of childs) {
      // fix can't correct to get image size before image loaded
      if (el.tagName === 'IMG') {
        const image = el as HTMLImageElement
        const evt = () => {
          setRefSize()
          image.removeEventListener('load', evt)
        }
        image.addEventListener('load', evt)
      }

      if (width < el.getBoundingClientRect().width) width = el.getBoundingClientRect().width
      height += getAbsoluteHeight(el)
    }
    setContainerSize(() => ({
      width: width === 0 ? '' : width,
      height: height === 0 ? '' : height,
    }))
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
      <div className={on ? 'rc__cover--on' : 'rc__cover--off'}>
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
      <div ref={parentRef} className="rc__children--blur" style={{ opacity: on ? opacity : 1 }}>
        {children}
      </div>
    </div >
  )
}

const Cover: React.FunctionComponent<CoverProps> = ({ on, unmountOnExit = false, children, ...props }) => {
  return (
    <>
      {
        children
          ? on || !unmountOnExit
              ? <CoverComponent on {...props}>{children}</CoverComponent>
              : children
          : null
      }
    </>
  )
}

export default Cover
