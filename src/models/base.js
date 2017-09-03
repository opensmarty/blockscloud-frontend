import { routerRedux } from 'dva/router'
import { login } from '../services/login'
import { register } from '../services/register'
import { message } from 'antd';

export default {
  namespace: 'base',
  state: {
    loginLoading: false,
    loading: false,
    visible: false,
    confirmDirty: false
  },

  effects: {
    * login ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoading' })
      const response = yield call(login, payload)
      yield put({ type: 'hideLoading' })
      if (response.data.status=="success") {
          yield put(routerRedux.push('/dashboard'))
      } else {
        console.log(response);
        message.error(response.data.msg);
      }
    },
    * register ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoading' })
      const response = yield call(register, payload)
      yield put({ type: 'hideLoading' })
      if (response.data.status=="success") {
        yield put(routerRedux.push('/dashboard'))
      } else {
        console.log(response);
        message.error(response.data.msg);
      }
    }
  },
  reducers: {
    showLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
    showModal (state) {
      return { ...state, visible: true }
    },
    hideModal (state) {
      return { ...state, visible: false }
    },
  },
}
