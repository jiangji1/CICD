import { describe, it, expect, beforeEach } from 'vitest'
import counterReducer, { increment, decrement, incrementByAmount, fetchCount } from '../store/counterSlice'

describe('counterSlice', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      value: 0,
      status: 'idle',
    }
  })

  describe('同步操作', () => {
    it('应该处理初始状态', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('应该处理 increment', () => {
      const actual = counterReducer(initialState, increment())
      expect(actual.value).toEqual(1)
    })

    it('应该处理 decrement', () => {
      const actual = counterReducer(initialState, decrement())
      expect(actual.value).toEqual(-1)
    })

    it('应该处理 incrementByAmount', () => {
      const actual = counterReducer(initialState, incrementByAmount(5))
      expect(actual.value).toEqual(5)
    })
  })

  describe('异步操作', () => {
    it('应该处理 fetchCount.pending', () => {
      const action = { type: fetchCount.pending.type }
      const actual = counterReducer(initialState, action)
      expect(actual.status).toEqual('loading')
    })

    it('应该处理 fetchCount.fulfilled', () => {
      const action = { type: fetchCount.fulfilled.type, payload: 10 }
      const actual = counterReducer(initialState, action)
      expect(actual.status).toEqual('succeeded')
      expect(actual.value).toEqual(10)
    })

    it('应该处理 fetchCount.rejected', () => {
      const action = { type: fetchCount.rejected.type }
      const actual = counterReducer(initialState, action)
      expect(actual.status).toEqual('failed')
    })
  })
})