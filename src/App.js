import Profile from "./Profile/Profile"
import image from "./images/user.jpg"
import './App.css';


function App() {
  const fullName="Amani Issaoui";
  const bio="Hello I am a web developer";
  const profession="Web Developer";
  const handleName=(name)=>{
    return alert(`Hi I'm ${name}`)
  }

  return (
    <div className="App" style={{textAlign:"center"}}>
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName} >
        <img src={image} alt="profile"/></Profile>
    
    </div>
  );
}

export default App;
