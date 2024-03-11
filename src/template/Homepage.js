import BlogList from './BlogList';
import { useEffect, useState } from 'react';

const Homepage = () => {
    const title = ["Healthy blog", " with ","JS"];
    const [searchInput, setSearchInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setData] = useState(null);

    //Fetch initial data
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setData(data.posts)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }, []);

    //Functions to handle events
    function handleSearchInput(e) {
        setSearchInput(e.target.value)
    }
    function handleDelete(blogid) {
        console.log("delete is in progress");
    }
    function handleSearch(searchInput) {
        setIsLoading(true)
        setData(null)
        let postSearchUrl = "https://dummyjson.com/posts/search?q=" + searchInput;
        setTimeout(() => {
            fetch(postSearchUrl)
                .then(res => {
                    return res.json();
                })
                .then((data) => {
                    setData(data.posts)
                    setIsLoading(false)
                })
                .catch((err) => {
                    setIsLoading(false)
                })
        }, 2000);
    }

    //Props For bloglist
    const blogListData = {
        title:"Latest list of Posts",
        today:"11 Mar 2024",
        blogs:blogs,
        handleDelete: handleDelete,
        isLoading: isLoading
    };

    return (
        <div className="home">
            <div className="row mb-5">
                <h1 style={{color: "#456123"}}>{ title }</h1>
                <p>This blog contains features like {"like, dislikes, and much more"}. You are { [6,6,4,3] } visitor. Your current earning is { Math.random() * 100 }</p>
                <form>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Search in blogs" onChange={ handleSearchInput} value={searchInput}/>
                    </div>
                    <button type="button" className="btn btn btn-dark btn-sm mx-1" onClick={() => {handleSearch(searchInput)}}>Submit</button>
                    <button type="button" className="btn btn btn-light btn-sm mx-1" onClick={() => {
                        setSearchInput("");
                        handleSearch("")
                    }}>Reset</button>
                </form>
            </div>
            <div className="row">
                <BlogList {...blogListData}/>
            </div>
        </div>
    )
}

export default Homepage