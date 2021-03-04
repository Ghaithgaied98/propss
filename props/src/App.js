import "./App.css";

import Profile from "./profile/Profile";

function App() {
  var fullname = "Ghaith Gaied";
  var work = "Web Developer";
  var bio = "nothing to say";
  const Notify = (fullname) => alert(`${fullname} is taking control`);
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullname={fullname} work={work} bio={bio} Notify={Notify(fullname)}>
          <img className="example"
            src="https://images.wsj.net/im-97978?width=620&size=1"
            alt="Please reload"
            width='250' height='250' position='relative' 
            
          
          />
        </Profile>
      </header>
    </div>
  );
}

export default App;