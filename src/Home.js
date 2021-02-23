import BlogList from './BlogList';
import {useState, useEffect} from 'react';
import useFetch from './useFetch';
const Home = ()=>{
    const [name, setNames] = useState('nami');
    // const [blogs, setBlogs] = useState([
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'1' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'2' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'3' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'4' },
    //     { name:'Samrat Shrestha',address:'Ranibari',phone:'9800000001',id:'5' }
    // ]);

    const {data:blogs, isPending, error} = useFetch('http://localhost:4000/information')

    const handleDelete = (id)=>{
        // setData(blogs.filter( blog => blog.id !== id));
    }
    return (
        <div className="home">
        {error && <h1>Error while loading data </h1>}
        {isPending && <h1>Loading...</h1>}
        {blogs && <BlogList blogs={blogs} title="Information" /> }
            <p> {name} </p>
            <button onClick={()=>setNames('luffy')}>Change Name</button>
        </div>
    );
}

export default Home;
