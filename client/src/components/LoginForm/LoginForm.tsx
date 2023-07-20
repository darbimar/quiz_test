import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from 'store/action-creators/auth';

type LoginProps = {
  showRegForm: () => void;
};

const LoginForm: React.FC<LoginProps> = ({ showRegForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(login(email, password));
  };

  const handleShowForm = () => {
    showRegForm();
  };

  return (
    <>
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
          rules={[{ required: true, message: 'Введите ваш e-mail' }]}>
          <Input value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите ваш пароль' }]}>
          <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Item>

        <Form.Item>
          <div style={{ display: 'flex' }}>
            <Button type="link" onClick={handleShowForm}>
              Зарегистрироваться
            </Button>
            <Button type="primary" htmlType="submit" onClick={handleClick}>
              Войти
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
