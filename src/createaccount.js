import React  from 'react';
import Card   from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { UserContext } from './context';

export function CreateAccount() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label)
      setTimeout(() => setStatus(''),3000)
      return false
    }
      return true
  };

  function valiPass(password) {
    if (password.length < 8) {
      setStatus('Error: password to short')
      setTimeout(() => setStatus(''),3000)
      return false
    }
      return true
  };

  function handleCreate() {
    console.log(name,email,password)
    if (!validate(name,     'name'))     return
    if (!validate(email,    'email'))    return
    if (!validate(password, 'password')) return
    if (!valiPass(password, 'password')) return
    ctx.users.push({name,email,password,balance:100})
    setShow(false)
  };    

  function clearForm() {
    setName('')
    setEmail('')
    setPassword('')
    setShow(true)
  };

  return (
    <Card style={{ width: '20rem' }} bg='info' border='primary' text="dark">
      {show ? <Card.Body>
        <Card.Header as="h5">Create Account</Card.Header>
        <Card.Text>Name</Card.Text>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} />
          <br></br>
        <Card.Text>Email Address</Card.Text>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
          <br></br>
        <Card.Text>Password</Card.Text>     
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
          <br></br>
          <Button type="submit" className="btn btn-light" disabled={(!name.length > 0) ? true : (!email.length > 0) ? true : (password.length > 0) ? false : true} onClick={handleCreate} >Create Account</Button>
          <Card.Text>{status ? {status}: '' }</Card.Text>
      </Card.Body>
      :
      <Card.Body>
        <Card.Text>Account successfully created!</Card.Text> 
          <Button type="submit" className="btn btn-light" onClick={clearForm}>Add another account?</Button>  
      </Card.Body>
      }
    </Card>
  );
}; 