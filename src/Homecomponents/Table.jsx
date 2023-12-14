// import React, { useState } from "react";

// function Table() {

//     const [name,setname]=useState("")
    
//     const add=(e)=>{
//         setname(e.target.value)
//     }
// const [adddata,setadddata]=useState()
// const click=(e)=>{
//     e.preventDefault()
//     setadddata(name)
// }

// const deletee=()=>{
//     setadddata("")
// }

//     return (
//         <>
//             <form>
//                 <input onChange={add} type="text" placeholder="Enter your name...." />
//                 <button onClick={click}>Add</button>
//             </form>

//             <table border="3px">
//                 <tr>
//                     <th>Name:</th>
//                     <th>Delete:</th>
//                 </tr>
//                 <tr>
//                     <td>{adddata}</td>
//                     <td><button onClick={deletee}>Dlt</button></td>
//                 </tr>
//             </table>

//         </>
//     )
// }

// export { Table }