import React, { useEffect, useState } from 'react'

import axios from 'axios';
import MovieCard from './MovieCard';

function ShowBooking(props) {


  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this component is for the listing all the movie which is booked 
  first fetch all movie from the API with the function called GetData with the help of 
  axios library and getting all movie as list the iterate that list to show movie.
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  const [movieList, setmovieList] = useState([]);
  const getData = () => {
<<<<<<< HEAD
    // axios.get('http://localhost:8080/api/booking').then((res) => {
// =======
    axios.get('https://deploymovieticket.onrender.com/api/booking').then((res) => {
>>>>>>> 3b25ba481f97ca15c74003db2c52d1a0a9f0ad6c
      setmovieList((res.data));
    })

  }

  useEffect(() => { getData() }, [])

  return (
    <div style={{ display:'flex', flexDirection:'column'}} >
      
      <div style={{ borderBottom: "3px dotted black", marginBottom: '5px' }}>All  Booked movie will be here</div>
      <div id = 'MovieCardParent' style={{  display:'flex' ,flexDirection:'column-reverse' }}>
        {
<<<<<<< HEAD
          movieList.length!==0? <MovieCard movie={movieList[movieList.length-1]} />:<div>" NO MOVIE DETAILS FOUND..."</div>   }
=======
           movieList.length!==0? <MovieCard movie={movieList[movieList.length-1]} />:<div>" NO MOVIE DETAILS FOUND..."</div>   }
{/*           movieList.length!==0?(movieList.map((val) =>
        <MovieCard key={val._id} movie={val} />
      )):<div>" NO MOVIE DETAILS FOUND..."</div> */}
      }
>>>>>>> 3b25ba481f97ca15c74003db2c52d1a0a9f0ad6c
      </div>
   </div>
  )
}

export default ShowBooking
