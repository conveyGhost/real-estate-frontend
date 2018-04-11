/* eslint-env jest */
import {shallow} from 'enzyme'
import Counter from 'components/shared/Common/Counter'
import {CounterButton} from 'components/shared/Common/Counter/styles'

describe('<Counter />', () => {
  it('should start counter with 0', () => {
    const wrapper = shallow(<Counter />)
    const counterState = wrapper.state().counter
    expect(counterState).toBe(0)
  })

  it('should start counter with "min" prop ', () => {
    const wrapper = shallow(<Counter min={2} />)
    const counterState = wrapper.state().counter
    expect(counterState).toBe(2)
  })

  it('should output counter correctly ', () => {
    const minProp = 50
    const wrapper = shallow(<Counter min={minProp} />)
    const text = wrapper.find('span').text()
    expect(text).toEqual(minProp.toString())
  })

  it('should increment the counter when increment button is clicked and update state', () => {
    const wrapper = shallow(<Counter />)
    const counterState = wrapper.state().counter
    const incrementBtn = wrapper.find(CounterButton).at(1)
    incrementBtn.simulate('click')
    const text = wrapper.find('span').text()
    expect(text).toEqual((counterState + 1).toString())
  })

  it('should decrease the counter when decrease button is clicked and update state', () => {
    const wrapper = shallow(<Counter />)
    wrapper.setState({counter: 4})
    const counterState = wrapper.state().counter
    const decrementBtn = wrapper.find(CounterButton).at(0)
    decrementBtn.simulate('click')
    const text = wrapper.find('span').text()
    expect(text).toEqual((counterState - 1).toString())
  })

  it('should disable decrement button if counter === 0', () => {
    const wrapper = shallow(<Counter />)
    wrapper.setState({counter: 1})
    let decrementBtn = wrapper.find(CounterButton).at(0)
    decrementBtn.simulate('click')
    decrementBtn = wrapper.find(CounterButton).at(0)
    expect(decrementBtn.prop('disabled')).toBeTruthy()
  })
})
