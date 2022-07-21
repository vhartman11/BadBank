import React from 'react' 
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { UserContext } from './context';

export function AllData(){
  const ctx = React.useContext(UserContext);  

  return (
    <div>{
     ctx.users.map((user,i) => {
      return (
        <div key={i}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {user.name}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Password: {user.password}</ListGroup.Item>
            <ListGroup.Item>Balance: {user.balance}</ListGroup.Item>
          </ListGroup>
        </Card>
        </div>
      )
     })
    }
    </div>) 
}