import LINKS from 'configs/link'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'utils/styled'

const ListMenu = styled('div')`
  width: 25%; 
`

const List = styled('ul')`
  list-style: none;
  padding: 4px 0;
  margin: 0;
`

const ListItemStyle = styled('li')`
  list-style: none;
padding: 12px ${props => props.nested ? 48 : 24}px;
  margin: 0;
  color: #222;

  &:hover {
   color: rgba(0,0,0,.4);
  }
  .link_active & {
    font-weight: bold;
    color:#1976d2;
  }
`

const ListItem = ({ href = '', active = false, children, ...props }) => {
  return (
    href
      ? (
        <a style={{ textDecoration: 'none', color: 'inherit' }} href={href} className={`link ${active ? 'link_active' : ''}`}>
          <ListItemStyle {...props}>
            {children}
          </ListItemStyle>
        </a>
        )
      : (
        <ListItemStyle>
          {children}
        </ListItemStyle>
        )
  )
}

const Menu = () => {
  const [currentHash, setCurrentHash] = useState('')
  const menuRef = useRef(null)
  const listRef = useRef(null)

  // 監聽是否釘選
  useEffect(() => {
    window.addEventListener('scroll', e => {
      const menuTop = menuRef?.current?.getBoundingClientRect().top
      if (!menuTop) return
      if (menuTop < 60) {
        listRef.current.style.position = 'fixed'
        listRef.current.style.top = '58px'
      } else {
        listRef.current.style = {}
      }
    })
  }, [])

  // 監聽錨點
  useEffect(() => {
    const changeHash = (hash) => {
      history.pushState(null, null, hash)
      setCurrentHash(hash)
    }

    const anchor = () => {
      const top = window.pageYOffset
      const anchors = document.querySelectorAll('.anchor')
      anchors.forEach(e => {
        const paddingTop = 120
        const distance = top - e.offsetTop + paddingTop
        const totalHeight = e.clientHeight
        if (totalHeight - distance < totalHeight && distance < (totalHeight - paddingTop)) {
          if (e.id === '' && currentHash !== '#') {
            console.log(1, e.id)
            changeHash('#')
          }
          const menuLinks = document.querySelectorAll('.link')
          menuLinks.forEach(linkEl => {
            const hash = linkEl.attributes.href.value
            if (hash === `#${e.id}` && currentHash !== hash) changeHash(hash)
          })
        }
      })
    }
    window.addEventListener('scroll', anchor)
    return () => window.removeEventListener('scroll', anchor)
  }, [currentHash])

  return (
    <ListMenu ref={menuRef}>
      <List ref={listRef} >
        { LINKS.map(item => (
          <React.Fragment key={item.href}>
            <ListItem href={item.href} onClick={() => setCurrentHash(item.href)} active={currentHash === item.href}>
              {item.name}
            </ListItem>
            {item.children && item.children.map(item => (
              <ListItemStyle
                key={item.href}
                href={item.href}
                nested
                active={currentHash === item.href}
              >
                {item.name}
              </ListItemStyle>
            )) }
          </React.Fragment>
        ))}
      </List>
    </ListMenu>
  )
}

export default Menu
