import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Label = () => {
    return (
        <>
            <Box>
                <Text>MY LABEL</Text>
                <Box>
                    <Text>News</Text>
                    <Text>Digital</Text>
                </Box>
            </Box>
            <Box>
                <Text>READ LATER</Text>
                <Text>READ HISTORY</Text>
            </Box>
            <Box>
                <Text>FEEDS</Text>
                <Box>
                    <Text>Business</Text>
                    <Text>Science</Text>
                    <Text>Technology</Text>
                </Box>
            </Box>
        </>
    )
}

export default Label
