import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from './BaseAPI'

export const NewsAPIFunc = () => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ['news'],
      queryFn: () =>
         axios.get(BASE_URL['top-headlines']).then((res) => res.data),
   })

   if (isLoading) {
      return console.log('Loading...')
   }

   if (isError) {
      return console.log('Error loading data')
   }

   console.log(data)
}
