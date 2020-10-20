import React, {useEffect, useState} from 'react'
import {UserForm} from './components/UserForm'
import {Users} from './components/Users'
import Style from './App.module.css'
import {Grid, Typography} from '@material-ui/core'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getUsers() {
      setIsLoading(true)
      const foundUsers = await axios.get('http://localhost:3001/users')
      setUsers(foundUsers.data)
      setIsLoading(false)
    }
    getUsers()
  }, [])

  return (
    <div className={Style.wrapper}>
      <Grid container justify="center">
        <Grid container item xs={4} justify="center">
          <UserForm />
        </Grid>
        <Grid
          container
          item
          xs={4}
          justify="flex-start"
          direction="column"
          alignItems="center"
        >
          <Typography variant="h4">USERS</Typography>
          {isLoading ? (
            <Typography variant="h6">Loading...</Typography>
          ) : (
            <Users users={users} />
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default App
