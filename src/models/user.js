import { routerRedux } from 'dva/router'
import { query } from '../services/user'
import { message } from 'antd';

export default {
  namespace: 'user',
  state: {
    loginLoading: false,
    loading: false,
    visible: false,
    confirmDirty: false
  },
  effects: {
    * query ({}, { put, call }) {
      const response = yield call(query)
      // 如果没有获取到用户信息则跳转到登录
      if (!response.data.name) {
          yield put(routerRedux.push('/login'))
      }
    }
  }
}
