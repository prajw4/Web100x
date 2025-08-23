/*import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const bgStyle = {
    backgroundColor: count > 5 ? 'lightgreen' : 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  return (
    <div style={bgStyle}>
      <h2>Click Counter</h2>
      <p>You clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>

      <button onClick={() => setCount(0)}>
        Reset Me!
      </button>
    </div>
    
  );
}
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;


import React , {useState} from 'react';

function Form(){
  const[name,setName] = useState(" ");
  const[age,setAge] = useState(" ");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedAge, setSubmittedAge] = useState("");


  const handleInput =() =>{
    setSubmittedName(name);
    setSubmittedAge(age);
  }


  return(
    <div>
      <h2>
        Type your name here
      </h2>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) =>setName(e.target.value)}>
      </input>
      <input type='number' placeholder='Enter your age' value={age} onChange={(e) =>setAge(e.target.value)}>
      </input>
      <button onClick={(handleInput)}>Submit!</button>
     {submittedName && submittedAge && (
        <p>Hello {submittedName}, you are {submittedAge} years old!</p>
      )}

    </div>
  );
}

export default Form;


import React, { useState } from "react";

function Killer(){
  const[name,setName] = useState("")
  const[age,setAge]= useState("")

  const[submittedName,setSubmittedName] =useState("")
  const[submittedAge,setSubmittedAge] = useState("")

  const[error,setError]= useState("")

  const handleSubmit =() =>{
    if(name.trim()===("") || age.trim()===("")){
      setError("Please fill out both the fields");
      return;
    }

    setError("")
    setSubmittedName(name)
    setSubmittedAge(age)
    setName("")
    setAge("")
  };

return (

  <div>
    <h2>Type your name here:</h2>

    <input
    type="text"
    placeholder="type your name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />

    <input
    type="number"
    placeholder="Enter your age"
    value={age}
    onChange={(e)=>setAge(e.target.value)}
    />

    <button onClick={handleSubmit}>Submit!</button>

    {error && <p style={{color:'red'}}>{error}</p>}

    {submittedName && SubmittedAge && !error &&(<p>Hello {submittedName},you are {submittedAge} years old!</p>)}
  </div>

  );

}

export default Killer;



import React, { useState } from "react";

function Killer() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      name.trim() === "" ||
      age.trim() === "" ||
      role.trim() === "" ||
      gender.trim() === ""
    ) {
      setError("Please fill all the fields");
      return;
    }

    setError(""); // Clear any existing errors
    setSubmitted(true); // Show submitted result

    // Clear the form inputs
    setName("");
    setAge("");
    setRole("");
    setGender("");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <br />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select role</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>

      
      {error && <p style={{ color: "red" }}>{error}</p>}

      
      {submitted && !error && (
        <p>
          Hello {name}, you are a {role} and identify as {gender}.
        </p>
      )}
    </div>
  );
}

export default Killer;  

import React from "react";

// ✅ Child component
function ChildComponent({ message, color }) {
  return (
    <div>
      <p style={{ color: color }}>{message}</p>
    </div>
  );
}

// ✅ Parent component
function ParentComponent() {
  return (
    <div>
      <h2>This is the parent component</h2>
      <ChildComponent message="HII HOW ARE YOU" color="red" />
    </div>
  );
}

export default ParentComponent;





import React, { useState } from 'react';

function ParentComponent(){
  const[message, setMessage]=useState("Hey my name is Pravin")

  return(
    <div>
      <h1>This is your parent element</h1>
      <p>{message}</p>

      <ChildComponent changeMessage={setMessage}/>

    </div>
  )
}

function ChildComponent(props){
  const newMessage = "Hey My name is prajwal";

  return(
    <div>
      <p>This is the child component</p>

      <button
      onClick={(e)=>props.changeMessage(newMessage)}>
        UPDATE!
      </button> 
    </div>
  )
}
export default ParentComponent;
*/


import React, { useState } from 'react';

function Jpp() {
  const [islogin, setIslogin] = useState(false); // For login status
  const [Name, setName] = useState("");          // For storing input name
  const [error, setError] = useState("");        // For error messages

  // Function runs when "Login" button is clicked
  const Handleinput = () => {
    if (Name.trim() === "") {
      setError("Fill the fields, they are compulsory.");
      return;
    }

    setError("");       // Clear any existing error
    setIslogin(true);   // Set user as logged in
  };

  // Function runs when "Logout" button is clicked
  const handleLogout = () => {
    setIslogin(false);  // Log user out
    setName("");        // Clear name
  };

  return (
    <div>
      {/* Show error message if exists */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {islogin ? (
        <div>
          <h2>Welcome {Name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={Name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={Handleinput}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Jpp;
