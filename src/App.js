import React, {useState} from 'react';
import Card from './components/Card';
import Users from './components/Users';
import ProjectError from './components/ProjectError';


function App() {
  const [userList, setUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getUser = (name, age) => {
    setUserList((prev) => ([...prev, {name:name, age:age, id:Math.random().toString()}]));
  };
  
  const getErrorMessage = (errorObj) =>{
    setErrorMessage(() => ({...errorObj}));
  };

  const clearErrorMessage=()=>{
    setErrorMessage("");
  };

  return (
    <div >
      <Card onGetUsers={getUser}
            onGetError={getErrorMessage}/>
      <Users list={userList}/>
      {errorMessage && <ProjectError error={errorMessage} onClear={clearErrorMessage}/>}
    </div>
  );
}

export default App;
