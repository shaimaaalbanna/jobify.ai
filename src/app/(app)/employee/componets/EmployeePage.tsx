import { Card, Flex, SimpleGrid } from '@mantine/core'
import React from 'react'

const EmployeePage = () => {
  return (
    <>
     <Card mr={120} shadow="sm" radius="md"  >
     <Flex justify={'space-between'}>
     <h1 className='font-bold'>Upcoming Interviews</h1>
        <h2 className='text-blue-700'>View all</h2>
     </Flex>
   
        <SimpleGrid  cols={3} h={"140px"}>
        <Card bg={"#fafbf8"} shadow="sm" radius="lg" withBorder>
        <h1>BIM Manager</h1>
        <h2>15 applications</h2>
        <h3>2 Matches</h3>
        <h4>Active</h4>
        
        </Card>
          
        <Card bg={"#fafbf8"} shadow="sm" radius="lg" withBorder>
        <h1>BIM Manager</h1>
        <h2>15 applications</h2>
        <h3>2 Matches</h3>
        <h4>Active</h4>
        </Card>
        <Card bg={"#fafbf8"} shadow="sm" radius="lg" withBorder>
        <h1>BIM Manager</h1>
        <h2>15 applications</h2>
        <h3>2 Matches</h3>
        <h4>Active</h4>
        </Card>
       
        </SimpleGrid>
     
     </Card>
        </>
  )
}

export default EmployeePage