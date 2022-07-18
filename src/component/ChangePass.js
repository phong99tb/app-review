import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from 'antd';

const ChangePass = () => {
    let navigate = useNavigate();
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)

    const onClickAdmin = () => {
        navigate('/admin/user');
    }
    const onClickUser = () => {
        navigate('/home/user');
    }

    const onFinish = (values) => {
        console.log(values);    
    } 
    
    const onFinishFailed = () => {
    
    };
    const onClickInfo = () => {
        navigate('/home/user')
    }
    const onChangePass = () => {
        navigate('/home/change-pass')
    }

    return(
        <div className="rightInfo">
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
                <p style={{marginBottom:"0px"}} >Mật khẩu cũ :</p>
                <Form.Item
                name="passwordOld"
                rules={[
                    {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu',
                    },
                ]}
                >
                <Input.Password style={{height:"40px",borderRadius:"5px"}} />
                </Form.Item>
                <p style={{marginBottom:"0px"}} >Mật khẩu mới :</p>
                <Form.Item
                name="passwordNew"
                rules={[
                    {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu',
                    },
                ]}
                >
                <Input.Password style={{height:"40px",borderRadius:"5px"}} />
                </Form.Item>
                <p style={{marginBottom:"0px"}} >Nhập lại mật khẩu mới :</p>
                <Form.Item
                name="rePassword"
                dependencies={['passwordNew']}
                rules={[
                    {
                    required: true,
                    message: 'Không được để trống',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('passwordNew') === value) {
                            return Promise.resolve();
                          }
            
                          return Promise.reject(new Error('Mật khẩu không khớp'));
                        },
                      }),
                ]}
                >
                <Input.Password style={{height:"40px",borderRadius:"5px"}} />
                </Form.Item>
                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                style={{paddingTop:"20px"}}
                >
                <Button style={{ width:"100%",borderRadius:"5px", height:"40px", backgroundColor:"#fd8c13", borderColor:"#fd8c13"}} type="primary" htmlType="submit">
                    Thay đổi mật khẩu
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ChangePass ;

