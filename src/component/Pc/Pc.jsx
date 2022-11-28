// // import axios from 'axios';
// import React from 'react';
// import useFetchData from '../../Hooks/useFetch';



// export default function Pc() {

//   const allGames = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
//   const { data, loading } = useFetchData(allGames, );
//   console.log(data, loading)
//   useFetchData(allGames);


//   return <>
//     <div className="home border-4 shadow-lg d-flex justify-content-center align-items-center " >

//       <div className="overlay mt-4">
//         <h1>Find & track the best <span className='text-info'>free-to-play </span> games!</h1>
//         <h4>Track what you've played and search for what to play next! Plus get free premium loot!</h4>
//         <button className='btn  mt-3'>Browse Game</button>
//       </div>

//     </div>
//     <div className="games ">

//       <div className="container">
//         <h1 className='text-white'>Personalized Recommendations</h1>
//         <div className="row">

//           {data.length && data.map( allGames => (
//             <div className="col-md-4">
//               <h1>{allGames.title}</h1>
//               <img src={allGames.thumbnail} alt="" />
//             </div>
//           )
//           )}
//         </div>
//       </div>
//     </div>
//     </>




// // return<>


// //   <h1 className='home text-white'>hello from home</h1>
// //   </>
// }

