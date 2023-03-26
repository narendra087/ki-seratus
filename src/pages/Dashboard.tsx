import React from 'react'
import { Center, Text } from '@chakra-ui/layout'

const Dashboard = () => {
  return (
    <Center className='dashboard-page' height='calc(100vh - 112px)' color={'gray.400'} flexDirection={'column'}>
      <Text fontSize={{md: '3xl', base: 'xl'}}>Selamat datang di</Text>
      <Text fontSize={{md: "5xl", base: '3xl'}} align={'center'}>Aplikasi KiSeratus</Text>
    </Center>
  )
}

export default Dashboard