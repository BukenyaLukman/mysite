import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Spinner from './Spinner';
// import BRANDY from '../assets/brangy_post.jpg'
// import MAO_POST from '../assets/mao_post.jpg'
// import NAVLAB from '../assets/navlab-1.png'

const Home = () => {

    const [homeInfo, setHomeInfo] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isPending,setIsPending] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/profile`);
            const responseData = await response.json();

            //console.log(responseData);

            const loadedData = [];
            for (const item of responseData) {
                loadedData.push({
                    id: item.id,
                    bio: item.bio,
                    short_intro: item.short_intro,
                    profile_image: item.profile_image,
                    name: item.name,
                    location: item.location,
                })
            }
            setHomeInfo(loadedData);
            setIsPending(false);
            
        }
        

        const fetchProjects = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/projects`);
            const responseData = await response.json();

            const loadedData = [];
            for (const item of responseData) {
                loadedData.push({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    image: item.featured_image,
                    link: item.demo_link,
                    github: item.source_link,
                    tags: item.tags,
                })
                
            }

            setProjects(loadedData);
            setIsPending(false);
            //console.log(loadedData);
        }
        fetchProjects();
        fetchData();
        
    }, [])


    
    return <main className="main-section">
              {isPending && <Spinner/>}
             {homeInfo.map(item => {
                 
                return <div key={item.id}  className="main-section-content"> 
                
                         <div className="main-section-left-grid">
                            
                            <h1>About Me</h1>
                            
                            <p>
                                Hi, I am {item.name} 
                            </p>
                            <p>
                                 {item.short_intro}
                            </p>
                            <p>
                                {item.bio}
                            </p>
                        </div>
                     
                    <div className="main-section-right-grid">
                        <img src={item.profile_image} alt=""/>
                    </div>
                </div>
            })}
            {/* Middle Section */}
                <div className="banner">
                    <h1>Search For the Trending Projects</h1>
                </div>
            {/* End of Middle Section */}

            {/* beginning of projects section */}
                <div className="project-section">
                    {projects.map(item => {
                        return <div key={item.id} className="project-card">
                            <div className="project-card-image">
                                <Link to={`/project-details/${item.id}`}>
                                    <img src={item.image} alt=""/>
                                </Link>
                            </div>
                            <div className="project-card-content">
                                <h1>{item.title}</h1>
                                <p>
                                    {item.description}
                                </p>
                                <div className='tag-view'>
                                {item.tags.map(tag => {
                                    return <span className='btn btn-tag'  key={tag.name}>{tag.name}</span>
                                })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                {/* End of projects section */}
        </main>
}

export default Home;