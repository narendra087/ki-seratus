import React, { useRef } from 'react'
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
  handleAddEvent: any;
  handleUpdateEvent: any;
  showDeleteModal: (() => void);
}

interface FormProps {
  title: string;
}

const FormScheduleModal = ({isOpen, onClose, onOpen, type, selectedEvent, handleAddEvent, handleUpdateEvent, showDeleteModal}: ModalProps) => {
  const form = useFormik({
    initialValues: {
      title: type === 'add' ? '' : (selectedEvent?.event?.title || ''),
    },
    onSubmit: values => {
      handleSubmit(values)
    }
  })
  
  const inputRef = useRef(null)
  
  const handleSubmit = (values: FormProps) => {
    if (type === 'add') {
      handleAddEvent(values?.title || '')
    } else {
      handleUpdateEvent(values?.title || '')
    }
  }
  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset='slideInBottom'
        scrollBehavior='inside'
        initialFocusRef={inputRef}
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
                      { 
                        type === 'add' ?
                          selectedEvent?.startStr + ' - ' + selectedEvent?.endStr
                        :
                          selectedEvent?.event?.startStr + ' - ' + selectedEvent?.event?.endStr
                      }
                    </Text>
                  </Text>
                  <FormControl>
                    <FormLabel htmlFor='title'>Title</FormLabel>
                    <Input
                      ref={inputRef}
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
              { type === 'delete' &&
                <Button colorScheme='red' mr='10px' onClick={showDeleteModal}>
                  Delete
                </Button>
              }
              <Button type='submit' colorScheme='linkedin' bg='primary.300' _hover={{bg: 'primary.400'}} _active={{bg: 'primary.400'}}>
                { type === 'add' ? 'Add Event' : 'Update Event' }
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormScheduleModal