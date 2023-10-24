
import React, { useState} from 'react';
import './App.css'

function App() {
  const [profile, setProfile] = useState(
    {
      fullname: "Victor Osimhen",
      bio: "I am a footballer",
      image: "public/osimhen.jpeg",
      profession: "footballer"
    }
  );

  const [show, setShow] = useState(false);

  const toggleProfile = () => {
    setShow(!show);
  }

  return (
    <>
    <div>
      {show ? (
        <div>
          <img src={profile.image} alt="" />
          <h1>{profile.fullname}</h1>
          <h3>{profile.profession}</h3>
          <p>{profile.bio}</p>
          <button onClick={toggleProfile}>Hide Profile</button>
        </div>
      ) : (
        <button onClick={toggleProfile}>Show Profile</button>
      )} 
    </div>
    </>
  );
}

export default App
