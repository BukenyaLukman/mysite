import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner'
const ProjectDetails = () => {

    const [projectDetails, setProjectDetails] = useState([]);
    const [isPending,setIsPending] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/projects/${id}`);
            const responseData = await response.json();

            setProjectDetails(responseData);
            setIsPending(false);
        }

        fetchData();
    },[])
    

  return (
    <div className="project-section-detail">
           {isPending && <Spinner/>}
             <div  className="project-card-detail">
                
                <div className="project-card-image-detail">
                    <img src={projectDetails.featured_image} alt=""/>
                </div>
                <div className="project-card-content-detail">
                    <h1>{projectDetails.title}</h1>
                    <p>
                        {projectDetails.description}
                    </p>
                </div>
                
            </div>

           


    </div>
  )
}

export default ProjectDetails