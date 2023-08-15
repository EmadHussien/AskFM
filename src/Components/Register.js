import { useState } from 'react';
import axios from 'axios';

function Register() {

const [formData, setFormData] = useState({
    username: '',
    pwd: '',
    bio: '',
    location: '',
    nickname: '',
  });

const [Err,setErr] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(formData)

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    try{
      
      const response = await axios.post('http://localhost:3500/users/register', formData);
      if(response.status === 201)
      console.log(response.data.data.accessToken);
      const token = response.data.data.accessToken;

      const getFakeData = await axios.get('http://localhost:3500/fake', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(getFakeData.data);

   
    }catch(e){
/*       console.log(e.response.data.message , e.response.status);
      setErr(e.response.data.message); */
      if(e.code === 'ERR_NETWORK')
      {
        setErr('Server is unavailable now try again later');
      }
      console.log(e.code)
    }

  };


  


return (
    <section className='reg-container' >
          <h2>Register</h2>
          <form onSubmit={handleSubmit} className='reg-form'>
          <p className='err'>{Err}</p>
            <div className='form-control'>
                <label htmlFor="username" className='form-lbl'>Username:</label>
                <input
                  className='form-input'
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>

            <div className='form-control'>
              <label htmlFor="pwd" className='form-lbl'>Password:</label>
              <input
                className='form-input'
                type="password"
                id="pwd"
                name="pwd"
                value={formData.pwd}
                onChange={handleInputChange}
              />
            </div>
          
            <div className='form-control'>
              <label htmlFor="bio" className='form-lbl'>Bio:</label>
              <input 
                type="text"
                className='form-input'
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor="location" className='form-lbl'>Location:</label>
              <input
                className='form-input'
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor="nickname" className='form-lbl'>Nickname:</label>
              <input
                className='form-input'
                type="text"
                id="nickname"
                name="nickname"
                value={formData.nickname}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className='form-btn'>Register</button>
          </form>
      </section>
      );
    
}

export default Register;

