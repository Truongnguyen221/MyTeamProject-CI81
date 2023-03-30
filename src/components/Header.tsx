import {
   Flex,
   Input,
   InputGroup,
   InputRightElement,
   Text,
   Link,
   Avatar,
   Icon,
   Box,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineSquare2Stack } from 'react-icons/hi2'

const Header = () => {
   return (
      <Flex justify="space-between" align="center" p={6}>
         <Box>
            <InputGroup mx={0.5}>
               <Input
                  type="text"
                  variant="flushed"
                  placeholder="Search by topic, website, or RSS link"
                  width="400px"
                  px={4}
                  transition=".5s"
                  _focusVisible={{
                     outline: 'none',
                     borderColor: 'green',
                  }}
               />
               <InputRightElement>
                  <Icon
                     h="1.2em"
                     w="1.2em"
                     bg={'inherit'}
                     color="black"
                     fontWeight="400"
                     _hover={{ background: 'inherit' }}
                  >
                     <FaSearch fontSize="1.5em" />
                  </Icon>
               </InputRightElement>
            </InputGroup>
         </Box>
         <Flex align="center" gap={5}>
            <Flex align="center" gap={1.5}>
               <Link fontSize="lg">username.io</Link>
               <HiOutlineSquare2Stack fontSize="20px" />
            </Flex>
            <Avatar size="sm" name="username.io"></Avatar>
         </Flex>
      </Flex>
   )
}

export default Header
