import React,{useState, useEffect, Fragment} from 'react'
import axios from 'axios'
// import Fragment from './Fragment'

const Datafetch=()=> {

    const [posts,setPost] = useState([])
    const [limit,setLimit] = useState(20)



useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>{
        console.log(res.data)
        setPost(res.data)
    })
    .catch(error=>console.log(error))
},[])
// [] empty array is useEffect which is use only once can be execute
// `` to pass variable we must use ``
    return (
        <>
        {posts.slice(0,limit).map(p=>{
            return(

                <Fragment key={p.id}>
                    <li>{p.title}</li>
                    <p>{p.body}</p>
                </Fragment>

                // in reactjs Frangment is same as div


            )
        }

        )}
        {limit<100 && 
        <button style={{backgroundColor:'green'}} onClick={()=>setLimit(limit+20)}>Load More</button>} 
        </>
    )
}

export default Datafetch
