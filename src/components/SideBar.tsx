import React from 'react'
import { Text, Box, Flex } from '@chakra-ui/react'
import Label from '../components/Label'

const SideBar = () => {
   return (
      <Box position="fixed" bg="gray.200" height="100vh" width="250px" p={2}>
         <Flex direction="column">
            <Flex gap={1} justify="center" mt={4}>
               <Text
                  color="#119C59"
                  fontFamily="Inter"
                  fontSize="2xl"
                  fontWeight="600"
               >
                  NEWSLETTER
               </Text>
               <Text
                  color="black"
                  fontFamily="Inter"
                  fontSize="md"
                  fontWeight="600"
               >
                  APP
               </Text>
            </Flex>
            <Label />
         </Flex>
      </Box>
   )
}

export default SideBar
