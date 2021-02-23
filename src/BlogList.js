import {Link} from 'react-router-dom'
const BlogList = ({blogs,title,handleDelete})=>{
    return(
        <div className="blog-list">
            <h2 className="title" >{ title }</h2>
            {
                blogs.map(blog=>(
                    <div className="blog-preview" key={blog.id} >
                        <Link to={`/blogs/${blog.id}`}>
                        <h2> Name: {blog.name} </h2>
                        <p> Address: {blog.address}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}
export default BlogList
