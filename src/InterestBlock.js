import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Interests'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function Main() {
  const [loading, setLoading] = useState(true)
  const [interested, setInterested] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
    console.log(newTours)
  }

  const addTour = (id) => {
    const newTours = tours.filter((tour) => tour.id === id)
    console.log(newTours)
    newTours.map((newTour) => setInterested(interested => [...interested,newTour]))
    console.log(interested)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
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
        <button className="delete-btn">
          Interests
        </button>
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
      <button className="delete-btn">
          Interests
        </button>
      <Tours tours={tours} addTour={addTour} removeTour={removeTour} />

    </main>
  )
}

export default Main
