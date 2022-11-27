import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    
    <div className="App">
      <section>
      
      
        <h1>Sign In</h1>
        <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<label style={{color: "white"}}>Username :</label>}
          name="username"

          rules={[
            {
              message: 'Please input your username!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>Password :</label>}
          name="password"
          rules={[
            {
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password type="password"/>
        </Form.Item>

        <Form.Item
          name = "remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 18,
            span: 16,
          }}
        >
          <Checkbox style={{color: "white"}}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </section>
    </div>
  );
}

export default App;
