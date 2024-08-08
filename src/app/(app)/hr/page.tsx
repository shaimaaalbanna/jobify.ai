import React from 'react'
import HRpage from './components/HRpage'
import { Input, Space } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import HRpage2 from './components/HRpage2'


const Page = () => {
  return (
    <>
    <Input  ml={470} mx={220} mr={220} width={"80px"} height={"42px"} top={"30px"} left={"607"} placeholder='search'  rightSection={<IconSearch/>} size='sm' radius={'lg'}></Input>
    <Space mt={40} h="md"/>
    <HRpage/>
    <Space mt={40} h="md"/>
    <HRpage2/>
    </>
    
  )
}

export default Page