import {
  findDerived
} from '../src'

const derive = (item: number) => item > 2 ? item * 2 : false

describe('findDerived', () => {
  it('finds first derived value', () => {
    const numbers = [1, 2, 3, 4]
    const firstDerived = findDerived(numbers, derive)
    expect(firstDerived).toBe(6)
  })
})
