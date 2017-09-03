import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styles from './login.less'
import Modal from './regModal'

const FormItem = Form.Item;
const Option = Select.Option;

const Base = ({
  base,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  }
}) => {
  // 关联model里面的数据
  const { loginLoading,visible } = base
  // modal组件参数
  const modalProps = {
    visible: visible,
    title: '注册账号',
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      console.log(data);
      dispatch({ type: 'base/register', payload: data })
    },
    onCancel () {
      dispatch({
        type: 'base/hideModal',
      })
    },
  }

  function handleOk (e) {
    e.preventDefault();
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      // 关联model下reducers里面的方法
      dispatch({ type: 'base/login', payload: values })
    })
  }

  /* 显示注册框 */
  function showModal () {
    dispatch({
      type: 'base/showModal',
    })
  }

  return (
    <div className={styles.loginWallpaper}>
        <div className={styles.loginBlurBackground}></div>
        <div className={styles.loginBox}>
          <span className={styles.loginHeader}>
            <div className={styles.loginLogo}></div>
          </span>
          <Form className={styles.loginForm}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名！' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码！' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a className={styles.loginFormForgot} href="">忘记密码？</a>
              <Button type="primary" onClick={handleOk} loading={loginLoading} className={styles.loginFormButton}>
                登录
              </Button>
              <a onClick={showModal}>还没有账号，注册账号！</a>
            </FormItem>
          </Form>
          {<Modal {...modalProps} />}
      </div>
    </div>
  )
}

Base.propTypes = {
  form: PropTypes.object,
  base: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ base }) => ({ base }))(Form.create()(Base))
