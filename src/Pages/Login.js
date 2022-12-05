import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import './Login.css';
import { useEffect } from 'react';
import { Card, notification, Spin } from 'antd';
import { UserOutlined, SettingFilled, LoginOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useAuth } from '../Auth';


export default function Login() {
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  const authFunction = useAuth()
  const [api, contextHolder] = notification.useNotification();

  const loginFailureAlert = () => {
        api['error']({
            message: 'Login Failed',
            description:
                'Username or password wrong.',
        });
    };
    
  const onFinish = (user) => {
    authFunction.login(user)
  };
  const onFinishFailed = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (auth.isSuccess) {
        navigate('/dashboard')
    }
    if (auth.isFailed) {
        loginFailureAlert()
    }
}, [auth.isSuccess, auth.isFailed])

  
 
  return (
    
    <div className="Login1">
      {contextHolder}
      <Spin spinning={auth.loading}>
        <Card type='inner' title="Login"
          headStyle={{ backgroundColor: '#0000007d', color: '#ffffff' }}
          bodyStyle={{ backgroundColor: '#0000007d', color: '#ffffff' }}
          bordered={false}
          style={{ width: 600 }}>
          <Form
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
              label={<label style={{color: "white"}}>Email</label>}
              name="email"

              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: 'email',
                  message: 'Please input valid email!',
                },
              ]}>
              <Input
                placeholder='Email'
                prefix= {<UserOutlined />}
                
              />
            </Form.Item>

            <Form.Item
              label={<label style={{color: "white"}}>Password</label>}
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min: 8,
                  message: 'Please input minimum 8 characters',
                }
              ]}>
              <Input.Password 
                type="password"
                placeholder='Password'
                prefix= {<SettingFilled />}
                
                />
            </Form.Item>

            <Form.Item
              name = "remember"
              valuePropName="checked"
              >
              <Checkbox style={{color: "white"}}>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              className='btn-login-item'
              wrapperCol={{
                offset: 8,
                span: 10,
              }}>
              <Button
                size='large'
                shape = "round"
                className='btn-login'
                htmlType='submit'
                loading={auth.loading}
                >
                  <LoginOutlined />
                  Sign in
              </Button>
            </Form.Item>
          </Form>
        </Card> 
      </Spin>  
    </div>
  );
}

