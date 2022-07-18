import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import { Cascader } from 'antd';
/* eslint-enable no-template-curly-in-string */

const AdminGroupAdd = () => {
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
      required: '${label} không được để trống',
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

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'tennhomchitieu']}
        label="Tên nhóm chỉ tiêu"
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
        name={['user', 'titrong']}
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
        name={['user', 'canhan']}
        label="Cá nhân"
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
        name={['user', 'quanly']}
        label="Quản lý"
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
        name={['user', 'dongnghiep']}
        label="Đồng nghiệp"
        rules={[
          {
            required: true,
          },
        ]}
        className="titleForm"
      >
        <Input />
      </Form.Item>
      <Form.Item style={{width:800}} wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={onClickExit} type="primary" htmlType="submit">
          Thoát
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminGroupAdd;
