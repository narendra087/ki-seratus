import React from 'react'
import { Center, Box, Text, Input, Divider, Button } from '@chakra-ui/react'

import { ReactComponent as Wave } from '../assets/wave.svg'

import '../components/login.css'

const Login = () => {
  return (
    <div className='login'>
      <Center maxW='lg' w='full' zIndex='1' boxShadow='xl'>
        <Box maxW='lg' w='full' borderRadius='lg' bg='primary.100' bgGradient="linear(to-br, primary.100, primary.200)" p='30px'>
          <Text fontSize='4xl' fontWeight='bold'>Q100</Text>
          <Divider borderColor='primary.400' my='20px' />
          <Box w='full' display='flex' flexDirection='column' gap='20px' mt='20px'>
            <Text fontSize='2xl' fontWeight='bold'>Login to your account</Text>
            <div>
              <Text fontSize='sm' fontWeight='bold' mb='5px'>Username:</Text>
              <Input placeholder='Enter username'></Input>
            </div>
            <div>
              <Text fontSize='sm' fontWeight='bold' mb='5px'>Password:</Text>
              <Input type='password' placeholder='Enter password'></Input>
            </div>
            <Button w='full' colorScheme='linkedin' bg='primary.300' _hover={{bg: 'primary.400'}} >Login</Button>
          </Box>
        </Box>
      </Center>
      <div className='login__bg'>
        <Wave />
      </div>
    </div>
  )
}

export default Login