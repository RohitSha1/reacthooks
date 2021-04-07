import React,{useState} from 'react'

const Increment=()=> {
    const [count,setCount]=useState(0)
    // const increase=()=>{
    //     setCount(count+1)
    // }
    return (
        <>
        <h1>{count}</h1>

        {count<50 &&<button onClick={()=>setCount(count+1)}>Click to increase value</button>}
        {count>0 && <button onClick={()=>setCount(count-1)}>Click to decrease value</button>}

        {/* onclick cerlibracket use for callback function */}
        
        </>
        // <>
        // <h2>{count}</h2>
        // <button onClick={()=>setCount(count-1)}>Click to decrease value</button>
        // {/* onclick cerlibracket use for callback function */}
        
        // </>
    )
}

export default Increment


// usestate to count values implementation where 0 is set as a initial value
// 
