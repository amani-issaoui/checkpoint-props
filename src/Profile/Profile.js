import React from 'react'
import PropTypes from 'prop-types'
import "./style.css"

function Profile({fullName ,bio,profession,handleName,children}) {
    return (
        <div className='contenu'>
          <div className="image">
              {children}
          </div>
          <div className='content'>
            <h1>{fullName}</h1>
           <h2> {profession}</h2>
            
            <p>{bio}</p>
            
            <button onClick={()=>handleName(fullName)}> Contact Me <i className="fas fa-user"/></button>
            </div>
        </div>
    )
}
Profile.defaultProps={
    fullName:"Amani Issaoui",
    bio:"Hello",
    profession:"Web Developer",
    handleName:()=>{},

};
Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    handleName:PropTypes.func,
};

export default Profile;
