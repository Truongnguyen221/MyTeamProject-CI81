import {
   Flex,
   Input,
   InputGroup,
   InputRightElement,
   Text,
   Avatar,
   Icon,
   Box,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
   return (
      <Flex justify="space-between">
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
                     h="1em"
                     w="1em"
                     bg={'inherit'}
                     color="black"
                     fontWeight="400"
                     _hover={{ background: 'inherit' }}
                  >
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Icon>
               </InputRightElement>
            </InputGroup>
         </Box>
         <Flex>
            <Text>username.io</Text>
            <Avatar size="sm" name="username.io"></Avatar>
         </Flex>
      </Flex>
   )
}

export default Header
