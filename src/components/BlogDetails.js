import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from './Spinner';

import DETAIL from '../assets/prog_1.jpg';

function BlogDetails() {
    const {id} = useParams();
    const [blogDetails, setBlogDetails] = useState([]);
    const [isPending,setIsPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/blog/${id}`);
            const responseData = await response.json();

            setBlogDetails(responseData);
            setIsPending(false);
            

        }

        

        fetchData();
    },[])
  return (
    <main>  
                {isPending && <Spinner/>}
            <div className="blog-listing-media">
                <div className="blog-listing-left">
                    {isPending && <Spinner/>}
                    <img src={blogDetails.featured_image} alt=""/>
                </div>
                <div className="blog-listing-right">
                    <h1 className="blog-title">
                        {blogDetails.title}
                    </h1>
                    <div className="tags">
                    {blogDetails.tags?.map(tag => {
                            return <div key={tag.name} className="tags-1">{tag.name}</div>
                        })}
                    </div>
                    <p className="details-date">{blogDetails.created_at}</p>

                    <p className="article-content">
                    {isPending && <Spinner/>}
                        {blogDetails.body}
                    </p>
                </div>
            </div>
                
             
                 

            {/* End of projects section */}
        </main>
        
  )
}

export default BlogDetails