import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title} - Turkish Table Treasure`
    } , [title])
}


export default useTitle;