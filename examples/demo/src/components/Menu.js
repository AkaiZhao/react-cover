import React from 'react'

const Menu = () => {
  return (
    <ul>
      <li>Welcome</li>
      <li>Getting Started</li>
      <li>Demo</li>
      <li>
        <a>Documents</a>
        <ul>
          <li>Basic Use</li>
          <li>With React Loading</li>
          <li>Custom</li>
        </ul>
      </li>
    </ul>
  )
}

export default Menu
