// counterSlice 测试文件
// 测试 Redux 状态管理的核心逻辑

import { describe, it, expect, beforeEach } from 'vitest'
import counterReducer, { increment, decrement, incrementByAmount, fetchCount } from '../store/counterSlice'

describe('counterSlice', () => {
  let initialState

  // 每个测试前初始化状态
  beforeEach(() => {
    initialState = {
      value: 0,        // 计数器初始值
      status: 'idle',  // 初始状态
    }
  })

  // 测试同步操作
  describe('同步操作', () => {
    it('应该处理初始状态', () => {
      // 当传入未知的 action 类型时，应该返回初始状态
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('应该处理 increment', () => {
      // 测试 increment 操作，计数器值应该加 1
      const actual = counterReducer(initialState, increment())
      expect(actual.value).toEqual(1)
    })

    it('应该处理 decrement', () => {
      // 测试 decrement 操作，计数器值应该减 1
      const actual = counterReducer(initialState, decrement())
      expect(actual.value).toEqual(-1)
    })

    it('应该处理 incrementByAmount', () => {
      // 测试 incrementByAmount 操作，计数器值应该增加指定的数量
      const actual = counterReducer(initialState, incrementByAmount(5))
      expect(actual.value).toEqual(5)
    })
  })

  // 测试异步操作
  describe('异步操作', () => {
    it('应该处理 fetchCount.pending', () => {
      // 测试异步操作开始时的状态
      const action = { type: fetchCount.pending.type }
      const actual = counterReducer(initialState, action)
      expect(actual.status).toEqual('loading')
    })

    it('应该处理 fetchCount.fulfilled', () => {
      // 测试异步操作成功时的状态
      const action = { type: fetchCount.fulfilled.type, payload: 10 }
      const actual = counterReducer(initialState, action)
      expect(actual.status).toEqual('succeeded')
      expect(actual.value).toEqual(10)
    })

    it('应该处理 fetchCount.rejected', () => {
      // 测试异步操作失败时的状态
      const action = { type: fetchCount.rejected.type }
      const actual = counterReducer(initialState, action)
      expect(actual.status).toEqual('failed')
    })
  })
})