import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import { Cascader } from 'antd';
/* eslint-enable no-template-curly-in-string */

const AdminConfigAdd = () => {
    let navigate = useNavigate();
    let [user,setUser]=useState()
    const onFinish = (values) => {
      console.log(values);
      setUser(values);
      console.log(user);
      // navigate(-1)
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

      const options = [
        {
          value: true,
          label: 'true',
        },
        {
          value: false,
          label: 'false',
        },
      ];
    
      const onClickAdd = () => {
        console.log();
      }

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'tên chỉ tiêu']}
        label="Tên chỉ tiêu"
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
        name={['user', 'tỉ trọng']}
        label="Tỉ trọng"
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
        name={['user', 'liệt kê']}
        label="Liệt kê"
        rules={[
            {
              required: true,
            },
        ]}
      >
        <Cascader options={options} onChange={onChange} placeholder="Please select" />
      </Form.Item>
      <Form.Item style={{width:800}} wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button className="ButtonForm" onClick={onClickAdd} type="primary" htmlType="submit">
          Lưu chỉ tiêu
        </Button>
        <Button className="ButtonForm" onClick={onClickExit} type="primary" htmlType="submit">
          Thoát
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminConfigAdd;
