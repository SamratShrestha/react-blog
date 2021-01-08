const BlogList = ({blogs,title,handleDelete})=>{
    return(
        <div className="blog-list">
            <h2 className="title" >{ title }</h2>
            {
                blogs.map(blog=>(
                    <div className="blog-preview" key={blog.id} >
                        <h2> Name: {blog.name} </h2>
                        <p> Address: {blog.address}</p>
                        <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}
export default BlogList
