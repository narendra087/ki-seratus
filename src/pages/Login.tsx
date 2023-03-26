import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  Center,
  Box,
  Text,
  Input,
  Divider,
  Button,
  useToast,
  FormControl,
  FormLabel,
  VStack,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice';

import users from '../mocks/users.json'
import { ReactComponent as Wave } from '../assets/wave.svg'

import '../components/login.css'

interface ToastProps {
  msg: String,
  status: 'success' | 'error' | 'warning' | 'info' | undefined
}

interface FormProps {
  username: String,
  password: String,
}

const Login = () => {
  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()
  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      handleLogin(values)
    }
  })
  
  const showToast = ({msg, status}: ToastProps) => {
    toast({
      title: msg,
      status: status,
      isClosable: true,
      position: 'top-right',
    })
  }
  
  const handleLogin = ({username, password}: FormProps) => {
    console.log(username, password)
    if (!username || !password) return
    
    const indexUser = users.findIndex((user) => user.id === username)
    if (indexUser !== -1) {
      if (users[indexUser].password === password) {
        if (users[indexUser].role.length !== 0) {
          // showToast({msg: 'Berhasil login', status: 'success'})
          dispatch(setUser(users[indexUser]))
          navigate('dashboard')
        } else {
          showToast({msg: 'Akun belum memiliki peran', status: 'error'})
        }
      } else {
        showToast({msg: 'ID / Password Salah', status: 'error'})
      }
    } else {
      showToast({msg: 'Akun tidak terdaftar', status: 'error'})
    }
  }
  
  return (
    <div className='login'>
      <Center maxW='lg' w='full' zIndex='1' boxShadow='xl'>
        <Box maxW='lg' w='full' borderRadius='lg' bg='primary.100' bgGradient="linear(to-br, primary.100, primary.200)" p='30px'>
          <Text fontSize='4xl' fontWeight='bold'>Q100+</Text>
          <Divider borderColor='primary.400' my='20px' />
          <Box w='full'>
            <Text fontSize='2xl' fontWeight='bold' my='20px'>Login to your account</Text>
            <form onSubmit={loginForm.handleSubmit}>
              <VStack spacing={5} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor='username'>Username</FormLabel>
                  <Input
                    id='username'
                    name='username'
                    placeholder='Enter username'
                    onChange={loginForm.handleChange}
                    value={loginForm.values.username}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                  />
                </FormControl>
                <Button type='submit' w='full' colorScheme='linkedin' bg='primary.300' _hover={{bg: 'primary.400'}} _active={{bg: 'primary.400'}} disabled={!loginForm.values.username || !loginForm.values.password}>Login</Button>
              </VStack>
            </form>
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