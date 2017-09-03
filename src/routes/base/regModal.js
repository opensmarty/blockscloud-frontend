import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Modal } from 'antd';

const FormItem = Form.Item

const modal = ({
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {

  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
      }
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
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
 const agreement = true;
  return (
          <Modal
            {...modalOpts}
            onCancel={onCancel}
            footer={[
              <Button key="back" size="large" onClick={onCancel}>取消</Button>,
              <Button key="submit" type="primary" size="large" onClick={handleOk}>
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
                      用户名
                    </span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('username', {
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
                {/* <FormItem
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
                </FormItem> */}
                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                  {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                  })(
                    <Checkbox>我已经阅读了<a href="">用户协议</a></Checkbox>
                  )}
                </FormItem>
              </Form>
          </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
