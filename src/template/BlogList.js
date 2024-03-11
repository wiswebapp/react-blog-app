const BlogList = ({title, today, blogs, handleDelete, isLoading}) => {
    // const blogs = props.blogs;
    // const blogTitle = props.title;
    // const today = props.today;

    return (
        <div className="row">
            <p>{title} <span className="float-end">{today}</span></p>
            <p className="text-muted">Total Blogs: {(blogs && blogs.length) ? blogs.length : 0}</p>
            { (blogs && blogs.length > 0) ?
                blogs.map((blog) => (
                    <div className="card mb-3" key={blog.id}>
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body">
                        <h5 className="card-title">{ blog.title }</h5>
                        <p className="card-text">{ blog.body }</p>
                        <p className="card-text"><small className="text-muted">Likes : { blog.reactions }</small></p>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(blog.id)}>Remove</button>
                        </div>
                    </div>
                ))
                :
                ((isLoading) ?
                    <div align="center">
                        <h6 className="display-6">Please wait <img src="https://i.stack.imgur.com/kOnzy.gif" style={{height:50}} alt="Loading" /></h6>
                    </div>
                    :
                    <figure className="text-center">
                        <blockquote className="blockquote">
                        <p>No Blogs found!</p>
                        </blockquote>
                    </figure>)
            }
        </div>
    )
}

export default BlogList;