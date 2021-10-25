import {useEffect} from 'react'

const useUpdatedConsoleLog = (value) => {

    useEffect(() => {
        console.log(value)

    },[value]) 
}

export default useUpdatedConsoleLog
