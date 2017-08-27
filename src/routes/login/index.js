import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Modal } from 'antd';
import { config } from 'utils'
import styles from './index.less'

const FormItem = Form.Item;
const Option = Select.Option;

const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  }
}) => {
  // 关联model里面的数据
  const { loginLoading,visible } = login

  function handleOk (e) {
    e.preventDefault();
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      // 关联model下reducers里面的方法
      dispatch({ type: 'login/login', payload: values })
    })
  }

  function handleRegister (e) {
    e.preventDefault();
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      // 关联model下reducers里面的方法
      dispatch({ type: 'login/register', payload: values })
    })
  }

  /* 注册框 */
  function handleCancel () {
    dispatch({
      type: 'login/hideModal',
    })
  }

  function showModal () {
    dispatch({
      type: 'login/showModal',
    })
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 14,
        offset: 6,
      },
    },
  };
  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
  })(
    <Select style={{ width: 60 }}>
      <Option value="86">+86</Option>
    </Select>
  );

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

          {/* 注册弹框 */}
          <Modal
            visible={visible}
            title="用户注册"
            width='480'
            onOk={handleRegister}
            onCancel={handleCancel}
            footer={[
              <Button key="back" size="large" onClick={handleCancel}>取消</Button>,
              <Button key="submit" type="primary" size="large" onClick={handleRegister}>
                注册
              </Button>,
            ]}
            >
              {/* 注册表单 */}
              <Form>
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>
                      昵称
                    </span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: '昵称不能为空！', whitespace: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="邮箱"
                  hasFeedback
                >
                  {getFieldDecorator('email', {
                    rules: [{
                      type: 'email', message: '您输入的邮箱格式有误！',
                    }, {
                      required: true, message: '邮箱不能为空！',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="密码"
                  hasFeedback
                >
                  {getFieldDecorator('password', {
                    rules: [{
                      required: true, message: '密码不能为空！',
                    }],
                  })(
                    <Input type="password" />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="确认密码"
                  hasFeedback
                >
                  {getFieldDecorator('confirm', {
                    rules: [{
                      required: true, message: '请输入确认密码！',
                    }],
                  })(
                    <Input type="password" />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="手机号码"
                >
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: '手机号码不能为空！' }],
                  })(
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="验证码"
                >
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: '请输入您收到的验证码！' }],
                      })(
                        <Input size="large" />
                      )}
                    </Col>
                    <Col span={12}>
                      <Button size="large">获取验证码</Button>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                  {getFieldDecorator('同意', {
                    valuePropName: 'checked',
                  })(
                    <Checkbox>我已经阅读了<a href="">用户协议</a></Checkbox>
                  )}
                </FormItem>
              </Form>
          </Modal>
      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
