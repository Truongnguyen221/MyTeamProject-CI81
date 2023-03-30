import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from './BaseAPI'

export const WeatherAPIFunc = () => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ['weather'],
      queryFn: () =>
         axios.get(BASE_URL['current-weather']).then((res) => res.data),
   })

   if (isLoading) {
      return console.log('Loading...')
   }

   if (isError) {
      return console.log('Error loading data')
   }

   console.log(data)
}
