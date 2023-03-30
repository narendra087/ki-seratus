import React from 'react'
import {
  Box,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from '@chakra-ui/react'
import FilePicker from 'chakra-ui-file-picker'
import { useFormik } from 'formik'

const AdvancedForm = () => {
  const form = useFormik({
    initialValues: {
      name: '',
      age: '',
      status: '',
      address: '',
      occupation: '',
      summary: '',
      photo: '',
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  
  return (
    <Flex minH='calc(100vh - 112px)' justify='center' alignItems={'center'}>
      <Box bg='primary.100' maxW={400} w='100%' p={5} rounded='md'>
        <form onSubmit={form.handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input
                id='name'
                name='name'
                placeholder='Enter your name'
                onChange={form.handleChange}
                value={form.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='age'>Age</FormLabel>
              <Input
                id='age'
                name='age'
                type='number'
                placeholder='Enter your age'
                onChange={form.handleChange}
                value={form.values.age}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='status'>Status</FormLabel>
              <Select
                id='status'
                placeholder='Select your marital status'
                onChange={form.handleChange}
                value={form.values.status}
              >
                <option value='Single'>Single</option>
                <option value='Married'>Married</option>
                <option value='Widowed'>Widowed</option>
                <option value='Divorced'>Divorced</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='address'>Address</FormLabel>
              <Textarea
                id='address'
                name='address'
                resize='none'
                placeholder='Enter your address'
                onChange={form.handleChange}
                value={form.values.address}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='occupation'>Occupation</FormLabel>
              <Input
                id='occupation'
                name='occupation'
                placeholder='Enter your occupation'
                onChange={form.handleChange}
                value={form.values.occupation}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='summary'>Summary of Life</FormLabel>
              <Textarea
                id='summary'
                name='summary'
                resize='none'
                placeholder='Enter your summary of life'
                onChange={form.handleChange}
                value={form.values.summary}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='photo'>Upload photo</FormLabel>
              <FilePicker
                onFileChange={(fileList) => {console.log(fileList)}}
                placeholder="Upload your photo"
                clearButtonLabel="Clear"
                multipleFiles={false}
                accept="png/jpg/jpeg"
                hideClearButton={false}
              />
            </FormControl>
            
            <Button
              type='submit'
              mt='30px!important'
              w='full'
              colorScheme='linkedin'
              bg='primary.300'
              _hover={{bg: 'primary.400'}}
              _active={{bg: 'primary.400'}}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  )
}

export default AdvancedForm