import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        console.log('Use effect triggers when rendering content');
        console.log('for this example only runs when value of name is changed');
        const abortCont = new AbortController();
        fetch(url,{signal:abortCont.signal})
            .then(res=>{
                console.log(res)
                if(!res.ok){
                    throw Error('could not fetch data');
                }
                return res.json()
            })
            .then(data=>{
                console.log(data)
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
        return ()=>abortCont.abort()
    },[url])
    return { data, isPending, error }
}

export default useFetch;
