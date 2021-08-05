import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import Interests from './Interests'
import React, { useState} from 'react'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [interested, setInterested] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
    console.log(newTours)
  }

  const addTour = (id) => {
    const newTours = tours.filter((tour) => tour.id === id)
    console.log(newTours)
    newTours.map((newTour) => setInterested(interested => Array.from(new Set([...interested,newTour]))))
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
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main tours={tours} interested={interested} loading={loading} removeTour={removeTour} addTour={addTour} fetchTours={fetchTours}/>
          </Route>
          <Route exact path='/interests'>
            <Interests interested={interested}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
