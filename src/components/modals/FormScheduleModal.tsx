import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { useFormik } from 'formik';

interface ModalProps {
  isOpen: boolean;
  onClose: (() => void);
  onOpen: (() => void);
  type: string;
  selectedEvent: any;
  handleAddEvent: any
}

interface FormProps {
  title: string;
}

const FormScheduleModal = ({isOpen, onClose, onOpen, type, selectedEvent, handleAddEvent}: ModalProps) => {
  const form = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: values => {
      handleSubmit(values)
    }
  })
  
  const handleSubmit = (values: FormProps) => {
    handleAddEvent(values?.title || '')
  }
  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset='slideInBottom'
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={form.handleSubmit}>
            <ModalHeader>{type === 'add' ? 'Add Schedule' : 'Edit Schedule'}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack spacing={5} align={'flex-start'}>
                  <Text fontWeight='medium'>Date:&nbsp;
                    <Text as={'span'} fontWeight='normal'>
                      {selectedEvent?.startStr + ' - ' + selectedEvent?.endStr}
                    </Text>
                  </Text>
                  <FormControl>
                    <FormLabel htmlFor='title'>Title</FormLabel>
                    <Input
                      id='title'
                      name='title'
                      placeholder='Enter event title'
                      onChange={form.handleChange}
                      value={form.values.title}
                    />
                  </FormControl>
                </VStack>
            </ModalBody>

            <ModalFooter>
              <Button type='submit' colorScheme='linkedin' bg='primary.300' _hover={{bg: 'primary.400'}} _active={{bg: 'primary.400'}}>
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormScheduleModal