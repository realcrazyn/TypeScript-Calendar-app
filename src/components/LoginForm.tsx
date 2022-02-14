import { Form, Input, Button } from 'antd'
import { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { IUser } from '../models/IUser'
import { rules } from '../utils/rules'

export const LoginForm: FC = () => {
  const { login } = useActions()
  const [user, setUser] = useState({} as IUser)
  const { error, isLoading } = useTypeSelector((state) => state.auth)

  const submit = () => {
    login(user.username, user.password)
  }

  return (
    <Form onFinish={submit}>
      <div style={{ color: 'red' }}>{error}</div>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value })
          }}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Enter
        </Button>
      </Form.Item>
    </Form>
  )
}
