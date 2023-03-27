import React, { useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import {
  Flex,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import FormScheduleModal from '../components/modals/FormScheduleModal'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../redux/slices/calendarSlice'

const Schedule = () => {
  const { isOpen: isFormOpen, onOpen: onFormOpen, onClose: onFormClose } = useDisclosure()
  const [openModal, setModal] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const dispatch = useDispatch()
  const events = useSelector((state:any) => state.calendar.events)
  
  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  
  const handleModalOpen = (modal: string) => {
    setModal(modal)
    if (modal === 'add') return onFormOpen()
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
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }
  
  const handleEvents = (events:any) => {
    // setEvents(events)
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
        eventsSet={handleEvents}
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
    </div>
  )
}

export default Schedule