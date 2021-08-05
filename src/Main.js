import React, { useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import {Link} from 'react-router-dom'

function Main({tours,interested,loading,addTour,removeTour,fetchTours}) {

  
  useEffect(() => {
    fetchTours()
  },[])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <Link to='/interests'>
          <button className="delete-btn">
            Interests
          </button>
        </Link>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Link to='/interests'>
        <button className="delete-btn">
          Interests
        </button>
      </Link>
      <Tours tours={tours} addTour={addTour} removeTour={removeTour}/>

    </main>
  )
}

export default Main
