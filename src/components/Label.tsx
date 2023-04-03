import { Box, Text, Flex, Stack } from '@chakra-ui/react'
import { BsBookmark, BsBook } from 'react-icons/bs'
import { HiOutlineCog8Tooth, HiOutlinePlusCircle } from 'react-icons/hi2'
import React from 'react'

const primaryColor = '#119C59'

const Label = () => {
   return (
      <Flex mx={5} my={10} direction="column">
         <Stack spacing={5}>
            <Box>
               <Flex justify="space-between" align="center">
                  <Text color={primaryColor} fontSize="lg">
                     MY LABEL
                  </Text>
                  <Box
                     w="3em"
                     display="flex"
                     alignItems="center"
                     justifyContent="center"
                     gap={2}
                  >
                     <HiOutlinePlusCircle
                        fontSize="20px"
                        color={primaryColor}
                     />
                     <HiOutlineCog8Tooth fontSize="20px" color={primaryColor} />
                  </Box>
               </Flex>
               <Stack spacing={1} mt={1.5} ml={1}>
                  <Text>News</Text>
                  <Text>Digital</Text>
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
               <Stack spacing={1} mt={1.5} ml={1}>
                  <Text>Business</Text>
                  <Text>Science</Text>
                  <Text>Technology</Text>
                  <Text>Show more...</Text>
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
