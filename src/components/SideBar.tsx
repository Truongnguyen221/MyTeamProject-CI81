import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import Label from '../components/Label'

const SideBar = () => {
   return (
      <Box position="fixed" bg="#F4F3F1" width="280px" height="100vh">
         <Flex direction="column">
            <Text color="#119C59" fontFamily="Inter" fontWeight="600">
               NEWSLETTER APP
            </Text>
            <Label />
         </Flex>
      </Box>
   )
}

export default SideBar
