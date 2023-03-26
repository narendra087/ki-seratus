import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Flex, Button, Text } from '@chakra-ui/react'

const Schedule = () => {
  const events = [
    { title: 'Meeting', start: new Date() }
  ]
  
  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  
  return (
    <div>
      <Flex alignItems='center' justifyContent="space-between" mb={'20px'}>
        <Text fontSize='3xl' fontWeight='bold'>Scheduling</Text>
        <Button colorScheme='linkedin' bg='primary.300' _hover={{bg: 'primary.400'}} _active={{bg: 'primary.400'}}>Add Schedule</Button>
      </Flex>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

export default Schedule