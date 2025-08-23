// function App(){
//   return(
//     <div className=" grid grid-cols-10">
//       <div className="bg-red-500 col-span-4"> details</div>
//       <div className="bg-green-500 col-span-4"> personal</div>
//       <div className="bg-white-500 col-span-2"> phone</div>
      
//     </div>
//   )
// }

// export default App;

// export default function App() {
//   return (
//     <div className="p-6">
//       <button className="
//         bg-blue-500 text-white px-4 py-2 rounded
//         text-sm
//         sm:bg-green-500
//         md:bg-yellow-500
//         lg:bg-red-500
//       ">
//         Responsive Button
//       </button>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-4" >
//       <div className="bg-red-500 "> details</div>
//       <div className="bg-green-500 "> personal</div>
//       <div className="bg-blue-500 "> phone</div>
      
//     </div>
//   )
// }

// export default App;

//------------------------------------------------------------------------------------
import { RevenueCard } from "./components/RevenueCard";
function App() {
  return (
    <div className="grid grid-cols-2">

      <RevenueCard title={"Amount pending"} amount={"92,312.00"} orderCount={"13"}/>

    </div>
  );
}

export default App;