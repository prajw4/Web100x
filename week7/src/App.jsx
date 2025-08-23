// import { Routes,Route,BrowserRouter } from "react-router-dom";
// import  Dashboard  from "./components/dashboard";
// import  Landing  from "./components/landing";


// function App(){
//   return(
//   <div>
//     <div>
//       <button onClick={()=>{window.location.href="/dashboard"}}>dashboard</button>
//       <button onClick={()=>{window.location.href="/landing"}}>landing</button>

//     </div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard/>}/>
//         <Route path="/landing" element={<Landing/>}/>
//       </Routes>
//     </BrowserRouter>
//   </div>
// )

// }

// export default App;

//--------------------------------------------------------------------------------------------------------------

// import { Routes,Route,BrowserRouter,useNavigate} from "react-router-dom";
// import {React,Suspense} from "react";
// import {lazy} from "react"
// const  Dashboard = lazy(()=>import('./components/dashboard'));
// const Landing  =  lazy(()=>import('./components/landing'));



// function App(){
  
//   return(
//   <div>
   
//     <BrowserRouter>
//     <Appbar/>
//       <Routes>
//         <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
//         <Route path="/landing" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
//       </Routes>
//     </BrowserRouter>
//   </div>
// )

// }

// function Appbar(){
//   const navigate = useNavigate();
//   return(
//      <div>
//       <div>
//       <button onClick={()=>{navigate("/dashboard")}}>dashboard</button>
//       <button onClick={()=>{navigate("/landing")}}>landing</button>

//     </div>
//      </div>

//   )
// }

// export default App;

//--------------------------------------------------------------------------------------------------------

// import React, { useContext, useState, createContext } from "react";

// // Create the context
// export const countContext = createContext();

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <countContext.Provider value={{ count, setCount }}>
//       <div>
//         <ButtonClick />
        
//         <CountRerender />
//       </div>
//     </countContext.Provider>
//   );
// }


// function CountRerender() {
//   const { count } = useContext(countContext);

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// function ButtonClick() {
//   const { count, setCount } = useContext(countContext);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

// export default App;

//-------------------------------------------------------------------------------------------------------

// import React from "react";
// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { countAtom } from "./assets/store/atoms/count";



// function App() {
//   return (
//     <div>

      
//         <ButtonClick />
//         <CountRerender />
      
//     </div>
//   );
// }

// function CountRerender() {
//   const count = useRecoilValue(countAtom);
//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// function ButtonClick() {
//   const [count, setCount] = useRecoilState(countAtom); //  fixed destructuring

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------------------------------

import { useState , useCallback } from "react";
import {atom , useAtom} from "jotai"

const countAtom = atom(0);
function App(){

  
const [count, setCount] = useAtom(countAtom);

  const Evenodd = useCallback(() => {
    if (count % 2 === 0) {
      return <p>The number is even</p>;
    } else {
      return <p>The number is odd</p>;
    }
  }, [count]);

  return(
    <div>
      <Count/>
      <ButtonClick/>
      {Evenodd()}
    </div>
  )
}

function Count(){
  const [count] = useAtom(countAtom);
  return(
    <div>
      <p>Count:{count}</p>
    </div>
  )
}

 
function ButtonClick(){
  const [count, setCount] = useAtom(countAtom);

  return(
    <div>
      <button onClick={()=>{setCount(count + 1)}}>Increase</button>
       <button onClick={()=>{setCount(count -1)}}>Decrease</button>
    </div>
  )

}
export default App;