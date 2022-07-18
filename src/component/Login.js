import 'antd/dist/antd.css';
import '../App.css'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, setInfo } from '../api';
import { useState } from 'react';
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({ hits: [] });
  const [infoUser, setInfoUser] = useState();

  const onFinish = async (values) => {
    try {
      const results = await loginUser(values.username, values.password)
      if (results.message === "Login Success") {
        let token = results.data.accessToken
        window.localStorage.setItem('token', JSON.stringify(token));
        
        try {
            const in4 = await setInfo(token)
            setInfoUser(in4)
            window.localStorage.setItem('info', JSON.stringify(in4));
        } catch (err) {
            throw err
        }
        
        navigate("/home/ket-qua")
        window.location.reload();
      }
    } catch (err) {
      message.error(err?.response?.data?.message)
      throw err
    }
  }

  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='backgroundLogin' >
      <div className='container' >
        <div className='formLogin ' >
          <div className='iconLogin' style={{marginBottom:"5x"}} >
            <img src='https://statics.vntrip.vn/images/svg/logo-vntrip-black.svg' style={{marginRight:"-25px"}} />
          </div>
          <h2 style={{fontSize:28,textAlign:'center', marginBottom:"20px"}} >Đăng nhập</h2>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <p style={{marginBottom:"0px"}} >Email :</p>
            <Form.Item
              name="username"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Vui lòng nhập email !',
                },
              ]}
            >
              <Input style={{height:"40px",borderRadius:"5px"}} />
            </Form.Item>
            <p style={{marginBottom:"0px"}} >Mật khẩu :</p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
              ]}
            >
              <Input.Password style={{height:"40px",borderRadius:"5px"}} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox >Ghi nhớ</Checkbox>
              <a className="login-form-forgot" href="">
                Quên mật khẩu?
              </a>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button style={{width:"100%",borderRadius:"5px", height:"40px", backgroundColor:"#fd8c13", borderColor:"#fd8c13"}} type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;