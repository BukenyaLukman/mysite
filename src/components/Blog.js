import React,{ useState , useEffect} from 'react';
import {Link} from 'react-router-dom'
import Spinner from './Spinner';
// import PROG from '../assets/prog_1.jpg'

const Blog = () => {
   const [blog, setBlog] = useState([]);
    const [isPending,setIsPending] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/blog`);
            const responseData = await response.json();


            const loadedData = [];
            for (const item of responseData) {
                loadedData.push({
                    id: item.id,
                    title: item.title,
                    body: item.body,
                    image: item.featured_image,
                    tags: item.tags,
                    created_at: item.created_at,
                })
                
            }

            setBlog(loadedData);
            setIsPending(false);
            
        }

        fetchData();
    },[])


    return <main>  
        {isPending && <Spinner/>}
        {blog.map(item => {
           return <div key={item.id} className="blog-listing-media">
                <div className="blog-listing-left">
                    <img src={item.image} alt=""/>
                </div>
                <div className="blog-listing-right">
                    <Link to={`/blog_details/${item.id}`}>
                        <h1 className="blog-title">
                            {item.title}
                        </h1>
                    </Link>
                    <div className="tags">
                        {item.tags.map(tag => {
                            return <div key={tag.name} className="tags-1">{tag.name}</div>
                        })}
                    </div>
                    <p className="date">{item.created_at}</p>
                </div>
            </div>
       })}                 

        {/* <!--End of projects section--> */}
    </main>
    {/* End of main section */}
}


export default Blog;