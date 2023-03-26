import React from 'react'

import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

import { Outlet } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
      <Header />
      <Flex w='100%' className="body-container">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </Flex>
    </>
  )
}

export default Layout