import React , {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
const App = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();  
  
  async function login(){
    console.warn(email,password)
    let item= {email,password};
    let result= await fetch("https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login",{
      method:'POST',
      headers:{
        "Content-Type" : "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/add")

  }
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
  
        autoComplete="off"
      >
        <Form.Item
          label={<label style={{color: "white"}}>Username :</label>}
          name="username"

          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder='email'
          onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>Password :</label>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password type="password" placeholder='password'
          onChange={(e)=>setPassword(e.target.value)}/>
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
            span: 10,
          }}
        >
         <Button onClick={login} block>Sign in</Button>
        </Form.Item>
      </Form>
    </section>
    </div>
  );
}

export default App;
