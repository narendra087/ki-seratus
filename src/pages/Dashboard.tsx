import React from 'react'
import { Center, Text } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <Center className='dashboard-page' height='calc(100vh - 112px)'>
      <Text fontSize={{md: "5xl", base: '3xl'}} align={'center'} color={'gray.400'}>Welcome to<br />Q100+ Dashboard</Text>
    </Center>
  )
}

export default Dashboard