import React from 'react'
import { Text, Grid, GridItem, Image, Stack, Link } from '@chakra-ui/react'
import FeedItem from '../data/img/FeedItem.png'
import { categoryList } from '../data/variables'

const primaryColor = '#119C59'

const Feed = () => {
   return (
      <div>
         <Stack spacing={2} m={4}>
            <Text fontSize="30px" fontWeight="600">
               Feeds
            </Text>
            <Link color={primaryColor} fontSize="22px">
               All
            </Link>
         </Stack>
         <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            {categoryList.map((category, idx) => (
               <GridItem
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  w="90%"
                  h="220px"
                  bg="transparent"
                  key={idx}
               >
                  <Image src={FeedItem} alt="FeedItem" w="85%" py={2} />
                  <Link fontWeight="600">{category.name}</Link>
                  <Text fontSize="sm">
                     {category.numberOfSources}
                     {''} sources
                  </Text>
               </GridItem>
            ))}
         </Grid>
         <Stack spacing={1} mx={4} my={6}>
            <Text fontWeight="600">What I can follow?</Text>
            <Text>
               Follow blogs, news, RSS feeds, web comics, job boards, Google
               Alerts. Basically anything. Find popular feeds & learn more.
            </Text>
         </Stack>
      </div>
   )
}

export default Feed
