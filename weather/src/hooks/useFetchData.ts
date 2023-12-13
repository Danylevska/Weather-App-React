import { useContext, useEffect, useState } from "react"


export const useFetchData = <TData> (url: string, options: RequestInit, isSearched: boolean) => {

const [data, setData] = useState<TData | null>();
const[isLoading, setIsLoading] = useState<boolean>(false)  



 const getData = (() => {
setIsLoading(true);
return fetch(url, options)
.then(response => response.json())
.then(responseData => {
setData(responseData)
 return responseData   
})
.catch(() => {
    setIsLoading(false)
    setData(null)
})
})




 useEffect(() => {
isSearched && getData()

 }, [url, options])

console.log(data)

 return isSearched ? data : getData;

 


}