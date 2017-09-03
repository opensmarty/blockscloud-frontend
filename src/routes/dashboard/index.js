import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Menu } from 'antd';
import Header from './components/header';
import styles from './index.less'

const Dashboard = ({
  dashboard,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  }
}) => {
  // 获取登录用户信息
  dispatch({ type: 'user/query'})
  return (
    <div className={styles.dashboardWallpaper}>
      {<Header />}
    </div>
  )
}

Dashboard.propTypes = {
  form: PropTypes.object,
  dashboard: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ dashboard }) => ({ dashboard }))(Form.create()(Dashboard))
