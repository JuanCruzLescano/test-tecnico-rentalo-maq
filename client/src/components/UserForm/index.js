import React, {useState} from 'react'
import axios from 'axios'
import {Button, makeStyles} from '@material-ui/core'
import {ToastContainer, toast} from 'react-toastify'
import Style from './index.module.css'
import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles({
  button: {
    marginTop: 16,
  },
})

export const UserForm = () => {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const emailValidate = e => {
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!data.firstName || !data.lastName || !data.email) {
      toast.error(
        `Can't submit the data because there is some invalid or missing data`
      )
    } else {
      axios
        .post('http://localhost:3001/users', {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        })
        .then(user => {
          toast('User created succesfully, please reload the page')
          setData({firstName: '', lastName: '', email: ''})
        })
        .catch(err => toast.error(`${err}`))
    }
  }

  const handleOnChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <div className={Style.cardForm}>
      <h1 className={Style.title}>FORM USER</h1>
      <form className={Style.userForm} onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          onChange={e => handleOnChange(e)}
          value={data.firstName}
          name="firstName"
          autoComplete="off"
        />
        <input
          placeholder="Last Name"
          onChange={e => handleOnChange(e)}
          value={data.lastName}
          name="lastName"
          autoComplete="off"
        />
        <input
          placeholder="Email"
          onChange={e => {
            handleOnChange(e)
            emailValidate(e)
          }}
          value={data.email}
          name="email"
          autoComplete="off"
        />
        <Button
          disabled={error ? true : false}
          variant="contained"
          color="secondary"
          className={classes.button}
          type="submit"
        >
          Submit!
        </Button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{width: 700}}
      />
    </div>
  )
}
