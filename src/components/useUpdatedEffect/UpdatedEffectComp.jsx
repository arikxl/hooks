import {useState} from 'react'

import useUpdatedEffect from './useUpdatedEffect';

const TimeOutComp = () => {

    const [count, setCount] = useState(10);
    useUpdatedEffect(() => alert(count), [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c+ 1)}>Increment</button>
        </div>
    )
}

export default TimeOutComp
