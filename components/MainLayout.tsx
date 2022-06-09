import React, { Children, FC, ReactNode } from 'react'
import Header from './Header'

interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
      <>
      <Header></Header>
      {children}
      <footer></footer>
      </> 
  )
}

export default MainLayout