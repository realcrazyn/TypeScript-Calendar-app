import { Layout } from 'antd'
import React, { FC, useEffect } from 'react'
import { AppRouter } from './components/AppRouter'
import { Navbar } from './components/Navbar'
import './App.css'
import { useActions } from './hooks/useActions'
import { IUser } from './models/IUser'

const App: FC = () => {
  const { setIsAuth, setUser } = useActions()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
      setUser({ username: localStorage.getItem('username' || '') } as IUser)
    } else {
    }
  }, [])

  return (
    <Layout className="App">
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App
