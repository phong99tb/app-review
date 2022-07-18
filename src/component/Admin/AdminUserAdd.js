import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
/* eslint-enable no-template-curly-in-string */

const AdminUserAdd = () => {
    let navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values);
    };
    const onClickExit = () => {
        navigate(-1);
    }
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
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'first name']}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
        className="titleForm"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'last name']}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}
        className="titleForm"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Date of birth"
        rules={[
          {
            type: 'day',
            min: 0,
            max: 99,
          },
        ]}
      >
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Người quản lý">
        <Input />
      </Form.Item>
      <Form.Item style={{width:800}} wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button className="ButtonForm" type="primary" htmlType="submit">
          Thêm vào
        </Button>
        <Button className="ButtonForm" onClick={onClickExit} type="primary" htmlType="submit">
          Thoát
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminUserAdd;
