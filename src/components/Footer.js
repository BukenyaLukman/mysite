import React,{useState,useEffect} from 'react'

const Footer = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_PROXY}/api/v1/tech_skills/`);
            const responseData = await response.json();

            const loadedData = [];
            for (const item of responseData) {
                loadedData.push({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    description: item.description,
                })
            }

            setSkills(loadedData);
            
        }

        fetchData();
    },[])


  return (
    <footer className="footer-section">
                <div className="footer-left">
                    <h1>Skills</h1>
                    <ul>
                        {skills.map(skill => {
                            return <li key={skill.id}>{skill.name}</li>

                        })}
                        
                    </ul>
                </div>
                <div className="footer-second-middle">
                    <h1>News Letter</h1>
                    <p>
                        Subscribe to my newsletter to get the latest news and updates.
                    </p>
                    <form action="" className="form-control">
                        <input type="email" placeholder="Enter your email"/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-third-middle">
                    <h1>Research</h1>
                    <p>
                        check out my research here. 
                    </p>
                    <h3>
                        <a href="/research.html">Publications</a>
                    </h3>
                </div>

                <div className="footer-right">
                    <h1>Contact </h1>
                    <p>
                        Email: <a href="mailto:bukenyalukman@gmail.com">bukenyalukman@gmail.com</a>
                    </p>
                </div>
            </footer>
  )
}

export default Footer