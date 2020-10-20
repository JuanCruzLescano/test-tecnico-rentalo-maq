import React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 0,
  },
})

export const Users = ({users}) => {
  const classes = useStyles()
  return (
    <>
      <List>
        {users &&
          users.map((user, i) => {
            return (
              <ListItem key={i} className={classes.root}>
                <ListItemText
                  primary={`${user.firstName} ${user.lastName}`}
                  secondary={user.email}
                />
                <Divider />
              </ListItem>
            )
          })}
      </List>
    </>
  )
}
