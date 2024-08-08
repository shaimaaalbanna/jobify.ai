import React from 'react'
import EmployeePage from './componets/EmployeePage'
import { Input, Space } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import EmployeePage2 from './componets/EmployeePage2'
import EmployeePage3 from './componets/EmployeePage3'

const Page = () => {
  return (
    <>
    <Input  ml={470} mx={220} mr={220} width={"80px"} height={"42px"} top={"30px"} left={"607"} placeholder='search'  rightSection={<IconSearch/>} size='sm' radius={'lg'}></Input>
    <Space mt={10} h="md"/>
    <EmployeePage/>
    <Space mt={10} h="md"/>
    <EmployeePage2/>
    <Space mt={10} h="md"/>
    <EmployeePage3/>
    </>
  )
}

export default Page