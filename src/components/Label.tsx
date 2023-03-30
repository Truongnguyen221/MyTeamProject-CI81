import { Box, Text, Flex, Stack } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill, BsBook, BsBookFill } from 'react-icons/bs'
import React from 'react'

const primaryColor = '#119C59'

const Label = () => {
   return (
      <Flex mx={5} my={10} direction="column">
         <Stack spacing={5}>
            <Box>
               <Text color={primaryColor} fontSize="lg">
                  MY LABEL
               </Text>
               <Stack spacing={1} mt={1.5}>
                  <Text fontSize="lg">News</Text>
                  <Text fontSize="lg">Digital</Text>
               </Stack>
            </Box>
            <Box>
               <Stack spacing={3}>
                  <Flex justify="space-between" align="center">
                     <Text color={primaryColor} fontSize="lg">
                        READ LATER
                     </Text>
                     <Box w="1.2em" display="flex" justifyContent="center">
                        <BsBookmark fontSize="18px" color={primaryColor} />
                     </Box>
                  </Flex>
                  <Flex justify="space-between" align="center">
                     <Text color={primaryColor} fontSize="lg">
                        READ HISTORY
                     </Text>
                     <Box w="1.2em" display="flex" justifyContent="center">
                        <BsBook fontSize="18px" color={primaryColor} />
                     </Box>
                  </Flex>
               </Stack>
            </Box>
            <Box>
               <Text color={primaryColor} fontSize="lg">
                  FEEDS
               </Text>
               <Stack spacing={1} mt={1.5}>
                  <Text fontSize="lg">Business</Text>
                  <Text fontSize="lg">Science</Text>
                  <Text fontSize="lg">Technology</Text>
                  <Text fontSize="lg">Show more...</Text>
               </Stack>
            </Box>
            <Box>
               <Text color={primaryColor} fontSize="lg">
                  TODO LIST
               </Text>
            </Box>
         </Stack>
      </Flex>
   )
}

export default Label
