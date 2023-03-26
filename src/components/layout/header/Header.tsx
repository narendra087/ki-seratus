import React from 'react'
import { Text, Button, Flex } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { removeUser } from '../../../redux/slices/userSlice'

const Header = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(removeUser())
    // navigate('dashboard')
  }
  
  return (
    <Flex className='header' h='80px' bg={'primary.400'} direction={'row'} p={'10px 20px'} justifyContent='space-between' alignItems={'center'}>
      <Text color={'white'} fontSize={36} fontWeight={'bold'}>Q100+</Text>
      <Button onClick={handleLogout}>Logout</Button>
    </Flex>
  )
}

export default Header