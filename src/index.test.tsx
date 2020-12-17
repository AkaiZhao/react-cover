/* eslint-disable no-unused-vars */
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import Cover from './index'
import { mount } from 'enzyme'
import { spy } from 'sinon'

describe('test cover component props', () => {
  const Test = () => <div id="test" className="test" style={{ width: 300, height: 400 }}>test</div>
  const onLoad = spy()
  const TestImage = () => <img id="img" src={'https://picsum.photos/id/237/200/300'} onLoad={onLoad}/>
  const wrapper = mount(
    <Cover on>
      <Test/>
      <TestImage/>
    </Cover>,
  )

  beforeAll(() => {
    wrapper.mount()
  })

  afterAll(() => {
    wrapper.unmount()
  })

  it('multi component', () => {
    expect(wrapper.contains(<Test/>)).toBe(true)
    expect(wrapper.contains(<TestImage/>)).toBe(true)
  })

  it('children exist', () => {
    expect(wrapper.contains(<Test/>)).toBe(true)
    expect(wrapper.exists('.rc__root')).toBe(true)
  })

  it('component exist', () => {
    expect(wrapper.exists('.rc__root')).toBe(true)
    expect(wrapper.exists('.rc__cover--on')).toBe(true)

    wrapper.setProps({ on: false })
    expect(wrapper.exists('.rc__root')).toBe(true)
  })

  it('check display style', () => {
    expect(wrapper.find('.rc__root').prop('style')?.display).toBe('block')

    wrapper.setProps({ inline: true })
    expect(wrapper.find('.rc__root').prop('style')?.display).toBe('inline-block')
    wrapper.setProps({ inline: false })
  })

  it('check cover adornment', () => {
    wrapper.setProps({ coverAdornment: (props: React.Attributes) => <Test {...props}/> })
    expect(wrapper.find('.rc__cover').html()).toBe(mount(<Test/>).html())
    wrapper.setProps({ coverAdornment: null })
  })

  it('check size', () => {
    wrapper.setProps({ size: '12px' })
    expect(wrapper.find('.rc__cover').last().props().style?.width).toBe('12px')
    expect(wrapper.find('.rc__cover').last().props().style?.height).toBe('12px')

    wrapper.setProps({ size: '12' })
    expect(wrapper.find('.rc__cover').last().props().style?.height).toBe(12)
    expect(wrapper.find('.rc__cover').last().props().style?.height).toBe(12)

    wrapper.setProps({ size: '0' })
    expect(wrapper.find('.rc__cover').last().props().style?.height).toBe('0')
    expect(wrapper.find('.rc__cover').last().props().style?.height).toBe('0')
  })

  it('check resize', () => {
    act(() => {
      global.dispatchEvent(new Event('resize'))
    })
  })

  it('check image onload', () => {
    wrapper.find('img').simulate('load')
    expect(onLoad.called).toBe(true)
  })
})
