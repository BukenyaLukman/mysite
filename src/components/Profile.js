import React, {useEffect,useState} from 'react'
import PROFILE from '../assets/prog_1.jpg';
import Spinner from './Spinner';

const Profile = () => {

  const [empStatus, setEmpStatus] = useState([]);
  const [profile, setProfile] = useState([]);
  const [isPending,setIsPending] = useState(true);

  useEffect(() => {
      const FetchData  = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/employment_status/`);
            const responseData = await response.json();
            
             
            const loadedData = [];
            for (const item of responseData) {
                loadedData.push({
                    id: item.id,
                    employer: item.employer,
                    job_title: item.job_title,
                    location: item.location,
                    start_date: item.start_date,
                    stillEmployed: item.stillEmployed,
                    work_description: item.work_description,
                })
            }
            setEmpStatus(loadedData);
            setIsPending(false);

      }

      const FetchProfile = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/profile`);
            const responseData = await response.json();
            
             
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
            setProfile(loadedData);
            setIsPending(false);

      }

        FetchData();
        FetchProfile();
  },[])



  return (
    <div className="contact-section">
        {isPending && <Spinner />}
        {profile.map(item => {
          return  <div key={item.id} className="profile-image">
                <img src={item.profile_image} alt=""/>
            </div>
        })}
             <div  className="profile-card">
             {isPending && <Spinner />}
             {empStatus.map(item => {
                   return <div key={item.id} className="employer-card">
                            <ul className='employement-details'>
                                <li>Employer: {item.employer}</li>
                                <li>Designation: {item.job_title}</li>
                                <li>Location: {item.location}</li>
                                <li>Description: {item.work_description} </li>
                            </ul>
                    </div>
                    })} 
            </div>
           
    </div>
  )
}

export default Profile