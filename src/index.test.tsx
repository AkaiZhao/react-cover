/* eslint-disable no-unused-vars */
import * as React from 'react'
import Cover from './index'
import { mount } from 'enzyme'

describe('test cover component props', () => {
  const Test = () => <div id="test" className="test" style={{ width: 30, height: 40 }}>test</div>

  it('children exist', () => {
    const wrapper = mount(
      <Cover on>
        <Test/>
      </Cover>,
    )
    expect(wrapper.contains(<Test/>)).toBe(true)
    expect(wrapper.exists('.rc__root')).toBe(true)
  })

  it('component exist', () => {
    const wrapper = mount(
      <Cover on>
        <Test/>
      </Cover>,
    )
    expect(wrapper.exists('.rc__root')).toBe(true)

    wrapper.setProps({ on: false })
    expect(wrapper.exists('.rc__root')).toBe(true)
  })

  it('check unmountOnExit true', () => {
    const wrapper = mount(
      <Cover on unmountOnExit={true}>
        <Test/>
      </Cover>,
    )
    expect(wrapper.exists('.rc__root')).toBe(true)

    wrapper.setProps({ on: false })
    expect(wrapper.exists('.rc__root')).toBe(false)
  })

  it('check unmountOnExit false', () => {
    const wrapper = mount(
      <Cover on unmountOnExit={false}>
        <Test/>
      </Cover>,
    )
    expect(wrapper.exists('.rc__root')).toBe(true)

    wrapper.setProps({ on: false })
    expect(wrapper.exists('.rc__root')).toBe(true)
  })

  it('check display style', () => {
    const wrapper = mount(
      <Cover on>
        <Test/>
      </Cover>,
    )
    expect(wrapper.find('.rc__root').prop('style')?.display).toBe('block')
    wrapper.setProps({ inline: true })
    expect(wrapper.find('.rc__root').prop('style')?.display).toBe('inline-block')
  })

  it('check cover adornment', () => {
    const wrapper = mount(
      <Cover on coverAdornment={(props: React.Attributes) => <Test {...props}/>}>
        <Test/>
      </Cover>,
    )
    const test = mount(<Test/>)
    expect(wrapper.find('.rc__cover').html()).toBe(test.html())
  })
})
