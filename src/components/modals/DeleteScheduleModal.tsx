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
} from '@chakra-ui/react'

interface ModalProps {
  isOpen: boolean;
  onClose: (() => void);
  onOpen: (() => void);
  handleDeleteEvent: (() => void);
  selectedEvent: any;
}

const DeleteScheduleModal = ({isOpen, onClose, onOpen, selectedEvent, handleDeleteEvent}: ModalProps) => {
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
          <ModalHeader>Delete Schedule</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text>{`Are you sure you want to delete the event '${selectedEvent?.event?.title || '-'}'`}</Text>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' onClick={handleDeleteEvent} colorScheme='red'>
              Remove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteScheduleModal