import {useState} from 'react';
import {useHistory} from 'react-router-dom'
const Create = ()=>{
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog = {name,address,phone};
        fetch('http://localhost:4000/information',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setIsPending(false);
            // history.go(-1);
            history.push('/')
        })
    }
    return(
        <div className="create">
            <h2>
                Create a New blog
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" required onChange={(e)=>setName(e.target.value)} />
                <label>Address</label>
                <input type="text" name="address" required onChange={(e)=>setAddress(e.target.value)} />
                <label>Phone</label>
                <input type="text" name="phone"  required onChange={(e)=>setPhone(e.target.value)} />
                {!isPending && <button>Add Blog</button> }
                {isPending && <button>Adding Blog...</button> }
            </form>
        </div>
    )
}
export default Create;
