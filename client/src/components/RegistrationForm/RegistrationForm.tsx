import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { registration } from 'store/action-creators/auth';

type RegistartionProps = {
  handleHideReg: () => void;
};

const RegistartionForm: React.FC<RegistartionProps> = ({ handleHideReg }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    registration(email, password);
    handleHideReg();
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off">
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Please input your e-mail!' }]}>
        <Input value={email} onChange={(event) => setEmail(event.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleClick}>
          <Link to="/">Зарегистрироваться</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistartionForm;
