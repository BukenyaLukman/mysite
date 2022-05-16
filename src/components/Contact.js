import React,{useState,useEffect} from 'react'
import PROFILE from '../assets/prog_1.jpg';

const Contact = () => {

    const [contact, setContact] = useState([]);
    const [isPending,setIsPending] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
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
                    email: item.email,
                    social_twitter: item.social_twitter,
                    social_linkedin: item.social_linkedin,
                    social_github: item.social_github,
                    phone_number: item.phone_number,
                })
            }

            setContact(loadedData);
            setIsPending(false);
            console.log(loadedData);
        }

        fetchData();
    },[])

  return (
      <>
            {contact.map(item => {
                return <div key={item.id} className="contact-section">
                    <div className="profile-image">
                        <img src={item.profile_image} alt=""/>
                    </div>
                    <div className="contact-card">
                        <h1>{item.name}</h1>
                        <p>{item.short_intro}</p>
                        <div>
                            <h1>Connect With Me</h1>
                        </div>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <i className="fa fa-envelope"></i>
                                <p>phone: {item.phone_number}</p>
                            </div>
                            <div className="contact-info-item">
                                <i className="fa fa-envelope"></i>
                                <p>LinkedIn:{item.social_linkedin}</p>
                            </div>
                            <div className="contact-info-item">
                                <i className="fa fa-envelope"></i>
                                <p>Twitter:{item.social_twitter}</p>
                            </div>
                            <div className="contact-info-item">
                                <i className="fa fa-envelope"></i>
                                <p>email:{item.email}</p>
                            </div>
                            <div className="contact-info-item">
                                <i className="fa fa-envelope"></i>
                                <p>github:{item.social_github}</p>
                            </div>
                        </div>
                    </div>      
            </div>
            })}
      </> 
  )
}

export default Contact;