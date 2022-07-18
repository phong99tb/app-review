import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Dangky = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
      <div className='container' >
          <div style={{margin: " 0 auto ", width: "80%", paddingTop:"100px" }} >
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'họ']}
                label="Họ"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'tên']}
                label="Tên"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                {
                    required: true,
                    type: 'email',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name={['user', 'password']}
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Re-Password"
                name={['user', 're-password']}
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name={['user', 'ngaysinh']} label="Ngày sinh">
                <DatePicker />
            </Form.Item>
            <Form.Item name={['user', 'chucvu']} label="Chức Vụ">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'nguoihuongdan']} label="Người hướng dẫn">
                <Select>
                    <Select.Option value="Nguyễn Thành Đạt">Nguyễn Thành Đạt</Select.Option>
                    <Select.Option value="Nguyễn Anh Tuấn">Nguyễn Anh Tuấn</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button style={{marginRight:"33% " }} className='ButtonForm' type="primary" htmlType="submit">
                Đăng ký ngay
                </Button>
            </Form.Item>
            </Form>
          </div>
      </div>
  );
};

export default Dangky;