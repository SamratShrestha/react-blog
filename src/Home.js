import BlogList from './BlogList';
import {useState, useEffect} from 'react';
const Home = ()=>{
    const [name, setNames] = useState('nami');
    // const [blogs, setBlogs] = useState([
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'1' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'2' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'3' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'4' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'5' }
    // ]);
    const [blogs,setBlogs] = useState(null);

    const handleDelete = (id)=>{
        setBlogs(blogs.filter( blog => blog.id !== id));
    }

    useEffect(()=>{
        console.log('Use effect triggers when rendering content');
        console.log('for this example only runs when value of name is changed');
        fetch('http://localhost:4000/information')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setBlogs(data);
        })
    },[name])
    return (
        <div className="home">
        {blogs && <BlogList blogs={blogs} title="Information" handleDelete={handleDelete} /> }
            <p> {name} </p>
            <button onClick={()=>setNames('luffy')}>Change Name</button>
        </div>
    );
}

export default Home;
