import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'
import { login } from 'services/login'

export default {
  namespace: 'login',
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
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      yield put({ type: 'hideLoginLoading' })
      if (data.success) {
        const from = queryURL('from')
        yield put({ type: 'app/query' })
        if (from) {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        throw data
      }
    },
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
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
