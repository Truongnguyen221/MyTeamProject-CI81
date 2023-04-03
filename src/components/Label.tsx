import { Box, Text, Flex, Stack, Link } from '@chakra-ui/react'
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
               <Link
                  href="/explore"
                  color={primaryColor}
                  fontSize="lg"
                  _hover={{ textDecoration: 'none' }}
               >
                  FEEDS
               </Link>
               <Stack spacing={1} mt={1.5} ml={1}>
                  <Link href="/explore/1">Business</Link>
                  <Link href="/explore/2">Science</Link>
                  <Link href="/explore/3">Technology</Link>
                  <Text>Show more...</Text>
               </Stack>
            </Box>
            <Box>
               <Link
                  href="/todolist"
                  color={primaryColor}
                  fontSize="lg"
                  _hover={{ textDecoration: 'none' }}
               >
                  TODO LIST
               </Link>
            </Box>
         </Stack>
      </Flex>
   )
}

export default Label
