import React from 'react';

import useFetchData from '../../Hooks/useFetch';



export default function Platform() {

    const allGames = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const { data, loading } = useFetchData(allGames);
    //   console.log(data, loading)
    useFetchData(allGames);
    console.log(data.length)


    return <>
        <div className="home border-4 shadow-lg d-flex justify-content-center align-items-center " >

        <div className="games ">

<div className="container">
    <h1 className='text-white'>Personalized Recommendations</h1>
    <div className="row">

        {data.length && data.map((allGames, index) => (
            <div className="col-md-4" key={index}>
                
                <img src={allGames.thumbnail} alt="" />
                <h1 className='mb-5'>{allGames.title}</h1>
            </div>
        )
        )}
    </div>
</div>
</div>

        </div>
        
    </>




    // return<>


    //   <h1 className='home text-white'>hello from home</h1>
    //   </>
}

