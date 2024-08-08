
import { Box, Button, Card, Center, Flex, Input} from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'
import Image from 'next/image'
import work from "../../../../../work.png"


const HRpage = () => {
  return (
    <>
    
    <Flex align={'center'} justify={'center'}>
   <Card bg={"#fafbf8"} w={720} h={180} mt={20} shadow="sm" padding="lg" radius="md" withBorder>
   <Flex justify={'space-between'}>
   <div>
    <h1 className='text-blue-700 font-mono' >Expedite your hiring with Jobify </h1>
    <h2>Ai helps you in filter the candidate and make the first interview with them.</h2>
    <h3>then introduce you the top qualified candidates</h3>
    <Button h={30} w={190} size='md' bg={'blue'} className='font-light' >Post a new Job</Button>
    </div>
    <Image src={work} alt='interveiw' width={125}height={125}></Image>
    </Flex>
    </Card>
    
    </Flex>
   
   

        
    
    </>
  )
}

export default HRpage