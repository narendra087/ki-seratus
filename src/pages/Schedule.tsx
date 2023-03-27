import React, { useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import {
  Flex,
  Text,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'
import { BiXCircle } from 'react-icons/bi'

import FormScheduleModal from '../components/modals/FormScheduleModal'
import DeleteScheduleModal from '../components/modals/DeleteScheduleModal'

import { useDispatch, useSelector } from 'react-redux'
import { addEvent, removeEvent } from '../redux/slices/calendarSlice'

const Schedule = () => {
  const { isOpen: isFormOpen, onOpen: onFormOpen, onClose: onFormClose } = useDisclosure()
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()
  const [openModal, setModal] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const dispatch = useDispatch()
  const events = useSelector((state:any) => state.calendar.events)
  
  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <Flex
          bg='primary.400'
          color='white'
          justifyContent='space-between'
          alignItems='center'
          p={'4px 8px'}
        >
          <Text>{eventInfo.event.title}</Text>
          <Icon as={BiXCircle} />
        </Flex>
      </>
    )
  }
  
  const handleModalOpen = (modal: string) => {
    setModal(modal)
    if (modal === 'add') return onFormOpen()
    if (modal === 'delete') return onDeleteOpen()
  }
  
  const handleDateSelect = (selectInfo: any) => {
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    console.log(selectInfo)

    setSelectedEvent(selectInfo)
    handleModalOpen('add')
  }
  const handleAddEvent = (title: string) => {
    let calendarApi = selectedEvent.view.calendar
    if (title) {
      const data = {
        id: Math.floor((Math.random() * 10000) + 1),
        title,
        start: selectedEvent.startStr,
        end: selectedEvent.endStr,
        allDay: selectedEvent.allDay
      }
      calendarApi.addEvent(data)
      dispatch(addEvent(data))
    }
    
    onFormClose()
  }
  
  const handleEventClick = (clickInfo:any) => {
    setSelectedEvent(clickInfo)
    handleModalOpen('delete')
  }
  
  const handleDeleteEvent = () => {
    selectedEvent?.event?.remove()
    dispatch(removeEvent(selectedEvent?.event?.id || undefined))
    onDeleteClose()
  }
  
  return (
    <div>
      <Flex alignItems='center' justifyContent="space-between" mb={'20px'}>
        <Text fontSize='3xl' fontWeight='bold'>Scheduling</Text>
      </Flex>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
      
      { isFormOpen &&
        <FormScheduleModal
          isOpen={isFormOpen}
          onOpen={onFormOpen}
          onClose={onFormClose}
          type={openModal}
          selectedEvent={selectedEvent}
          handleAddEvent={handleAddEvent}
        />
      }
      {
        isDeleteOpen &&
        <DeleteScheduleModal
          isOpen={isDeleteOpen}
          onOpen={onDeleteOpen}
          onClose={onDeleteClose}
          selectedEvent={selectedEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      }
    </div>
  )
}

export default Schedule