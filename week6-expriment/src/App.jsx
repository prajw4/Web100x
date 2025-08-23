/*import { useState } from "react"
let counter = 4;

function App() {
  const [Todos,setTodos]= useState([{
    id:1,
    title:"Go to gym",
    description:"gymmmmmm"
  },
{   id:2,
    title:"Go to school",
    description:"schollyy"

},{
  id:3,
    title:"Go to Concert",
    description:"Music"
}])

function addTodo(){
  setTodos([...Todos,{
    id:counter++,
    title:"Go to jail",
    description:"Bail"
  }])
}
return(
  <div>
    <button onClick={addTodo}>AddTodo</button>
    {Todos.map(todo => <Todo key={todo.id}title={todo.title} description={todo.description}></Todo> )}

  </div>
)
}

function Todo({title,description}){
  return(
    <div>
      <h5>{title}</h5>
      <h1>{description}</h1>
    </div>
  )
}
export default App;

//----------------------------------------------------------------------------------------------------------------//
import { useState } from "react";

function App(){
    return (
      <div>
        <HeaderWithButton></HeaderWithButton>
        <Header title= "Pintu"></Header>
        <Header title= "chintu"></Header>
      </div>
      
  )
}

function HeaderWithButton(){

  const [title, settitle] = useState("My name is prajwal");

function updateTitle(){
  settitle("my name is "+ Math.random());
}

return(
  <div>
    <button onClick={updateTitle}>Update the name</button>
       <Header title= {title}></Header>
  </div>
)
  
}

function Header({ title }) {
  return <h2 style={{ color: "blue" }}>{title}</h2>;
}
export default App;
*/

// const { useState } = require("react");

//----------------------------------------------------------------------------------------------------------------//

/*import { Component, useState } from "react";

function App(){
return(
  <div style={{display:"flex"}}>
    <Card> Hii ow are You !</Card>
    <Card>
      <div>
        Hellow from second card !
      </div>
    </Card>
  </div>
)

}

function Card({children}){
  return(
    <div style={{border:"50px solid black",
      padding:"10px",
      margin:"10px"
    }}>
      {children}
  </div>
  )

}
  export default App;
*/

//----------------------------------------------------------------------------------------------------------------//



// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//   console.log("Only when count changes");
// },[count]);



//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }
// export default App;


//-------------------------------------------------------------------------------------------------------------


// import { useMemo, useState } from "react";
//                                                                          //this the memo code which defines how to increanse the 
                                                                         
// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   let result = 0;

//   const expensiveCalculation = useMemo(()=>{
//     console.log("Calculating...");
  
//     for (let i = 0; i < 10; i++) {
//       result += count;
//     }
//     return result;
//   },[count])

//   return (
//     <div>
//       <h2>Expensive Result: {expensiveCalculation}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }
// export default App;

//-------------------------------------------------------------------------------------------------------------

//usecallBack(1-this code has no usecallback so it rerenders unnecessarily 2) use of Usecallback)
//1)
// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Clicked!");
//   };

//   useEffect(() => {
//     console.log("handleClick changed");
//   }, [handleClick]);  // 👈 observing if handleClick changes

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// }

// function ChildComponent({ onClick }) {
//   console.log("Child re-rendered");
//   return <button onClick={onClick}>Click Me</button>;
// }

// export default App;

//2)With usecallBack

// import React, { useState, useEffect, useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked!");
//   }, []);  // 👈 now handleClick is memoized and stable

//   useEffect(() => {
//     console.log("handleClick changed");
//   }, [handleClick]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// }

// function ChildComponent({ onClick }) {
//   console.log("Child re-rendered");
//   return <button onClick={onClick}>Click Me</button>;
// }

// export default App;

//memo and usecallback-------------
// import React,{ useCallback,memo,useState, useEffect} from "react";

// function App(){
//   const [counter ,setCounter]=useState(0);

//   console.log("App rendered");

//  const HandleClick = useCallback(()=>{
//     console.log("clicked")
  
//  },[])

//   useEffect(()=>{
//     console.log("again rerendered")
//   },[HandleClick])

//   return(
//     <div>
//       <button onClick={()=>setCounter(counter+1)}>Increase</button>
//       <ChildComponent onClick={HandleClick}></ChildComponent>
//     </div>
//   )

// }

// const ChildComponent = React.memo(function ChildComponent({onClick}){
//   console.log("rerendered")
// return <button onClick={onClick}> Click me!</button>

// })

// export default App;


// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [id, setId] = useState(1);

//   return (
//     <div>
      
//       <button onClick={()=>setId(1)}>1</button>
//       <button onClick={()=>setId(2)}>2</button>
//       <button onClick={()=>setId(3)}>3</button>
//       <button onClick={()=>setId(4)}>4</button>
//       <button onClick={()=>setId(5)}>5</button>

//       <Todo id={id}/>

//     </div>
    
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3001/Todos/${id}`) // ✅ Corrected URL
//       .then((response) => {
//         setTodo(response.data);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch:", err);
//         setTodo(null);
//       });
//   }, [id]);

//   if (!todo) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>
//     </div>
//   );
// }

// export default App;

// import axios from "axios"
// import { useCallback,useEffect,useMemo,useState, } from "react"

//  function App(){
//   const [Todos , setTodos]=useState([]);
//   const[selectid,setSelectid]=useState(null);

//   useEffect(()=>{
//     axios.get("http://localhost:3001/Todos")
//     .then((response)=>{
//       setTodos(response.data)
//     })
//   },[]);

//   const handleClick = useCallback((id)=>{
//     setSelectid(id)
//   },[])

//   const selectedtodo = useMemo(()=>{
//     return Todos.find((todo)=> todo.id === selectid)
//   },[Todos,selectid])

//   return(
//     <div>
//       <TodosList Todos={Todos} onSelect={handleClick} />
//       {selectedtodo && <Todosdetails todo={selectedtodo} />}


//     </div>
//   )
//  }

//  const TodosList = React.memo(({Todos,onSelect}) => {

//    return(
//     <div>
//       <ul>
//         {Todos.map((todo)=>(
//           <li key={todo.id}>
//             <button onClick={()=> onSelect(todo.id)}>{todo.title}</button>
//           </li>
//         ))};
//       </ul>
//     </div>
//   )

//  })

 

//  function Todosdetails({todo}){
//   return(
//     <div>
//       {todo.title}
//       {todo.description}
//     </div>
//   )

//  }

//  export default App;


//-------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import { useState,useEffect,useMemo } from "react";

// function App(){
//   const[counter , setCounter] = useState(0);
//   const[inputvalue , setInputvalue] = useState(1);
  
   

//  const count = React.useMemo(()=>{
// let sum =0;
// for(let i = 0 ; i<=inputvalue ; i++){
//   sum += i;
// }
// return sum;
//  },[inputvalue])

  
//   return(
//     <div>
//       <input onChange={(e)=>setInputvalue(parseInt(e.target.value))} placeholder="Find the sum from 1 to n "></input>
//       <br />
//       Sum from 1 to {inputvalue} is {count}
//       <br/>
//       <button onClick={()=>setCounter(counter+1)}>Counter({counter})</button>

//     </div>
//   )
// }

// export default App;
//-----------------------------------------------------------------------------------------------------------
// import React from "react";
// import { useState , useCallback , Memo} from "react";

// function App(){
//   const [count , setCounter] = useState(0);

//   const handleClick = useCallback(()=>{
//     console.log("Button Clicked")
//   },[])

//   return(
//     <div>
//       <h2>count {count}</h2>
//       <button onClick={()=>setCounter(count + 1)}>click me !</button>
//       <Child onClick={handleClick}/>

//     </div>
//   )
// }

// const Child = React.memo(({onClick}) => {
//    console.log("child re-rendered")
//   return(
//     <div>
//       <button onClick={onClick}>ClickeMe (Child)</button>
//     </div>
//   )

// })


// export default App;

//------------------------------------------------------------------------------------------------------------------
//Practice examples based on the all the hooks
// import { useState, useMemo } from "react";

// function App() {
//   const [values, setValues] = useState(0);

//   const ExpensiveCalcu = useMemo(() => {
//     console.log("childe rendered")
//     let result = 1;
//     for (let i = 1; i <= values; i++) {
//       result *= i;
//     }
//     return result;
//   }, [values]);

//   return (
//     <div>
//       <Expensive value={values} setValues={setValues} />
//       <h1>The Factorial of {values} is {ExpensiveCalcu}</h1>
//     </div>
//   );
// }

// function Expensive({ value, setValues }) {
//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Enter the number"
//         value={value}
//         onChange={(e) => setValues(Number(e.target.value))}
//       />
//     </div>
//   );
// }

// export default App;

// import { useMemo, useState } from "react";

// const words=["hi" , "are" , "you" , "how" , "fine" , "ok" , "sad"];
// const TOTAL_LINES = 1000;
// const TOTAL_SENTENCES = [];

// for(let i = 0 ; i<=1000;i++){
//   let sentences ="";
//   for(let j=0 ; j<=5;j++){
//     const randomword = words[Math.floor(Math.random() * words.length)];
//     sentences += randomword + " ";
//   }

//   TOTAL_SENTENCES.push(sentences.trim())

// }

// function App(){

//   const[filter , setFilter]=useState("");
//   const Filterlist = useMemo(()=>{
//     return TOTAL_SENTENCES.filter((sentences)=>sentences.includes(filter));
//   },[filter]);

//   return(
//     <div>
//       <input type="text" placeholder="type the word" value={filter} onChange={(e)=> setFilter(e.target.value)}/>
//       {Filterlist.map((item,index) =>(
//         <div key={index}>{item}</div>
//       ))}
//     </div>
//   )

// }
// export default App;

// 

//import { useRef , useEffect} from "react";
// function ClickTracker() {
//   const clickCount = useRef(0); // just a container

//   function handleClick() {
//     clickCount.current += 1;
//     console.log("Clicked", clickCount.current, "times");
//   }

//   return <button onClick={handleClick}>Click me</button>;
// }

function App(){

  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  })

  function handleClick(){
    inputRef.current.focus();
  }
  return(
    <div>

      <Buttonclick onhandleclick={handleClick} inputRef={inputRef}/>

    </div>
  )
}

function Buttonclick({onhandleclick , inputRef}){

  return(
    <div>
      <input type="text" ref={inputRef} placeholder="enter the text" />
      <button onClick={onhandleclick}>Submit</button>
    </div>
  )
}
export default App;