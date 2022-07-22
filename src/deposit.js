import React  from 'react'; 
import Button from 'react-bootstrap/Button';
import Card   from 'react-bootstrap/Card';
import { UserContext } from './context';

export function Deposit() {
  const [show, setShow]         = React.useState(true)
  const [status, setStatus]     = React.useState('')
  const [deposit, setDeposit]   = React.useState('')
  const ctx = React.useContext(UserContext)

  function validate(deposit) {
    if (isNaN(parseFloat(deposit))) {
      setStatus('Error: not a number')
      setTimeout(() => setStatus(''),3000)
    return false
    }
    if (deposit < 0) {
      setStatus('Error: deposit is less then 0')
      setTimeout(() => setStatus(''),3000)
    return false
    }
    return true
  };

  function handleDeposit() {
    if (!validate(deposit)) return
    ctx.users[0].balance = ctx.users[0].balance + parseInt(deposit)
    setShow(false)
  };    

  function clearForm() {
    setDeposit('')
    setShow(true)
  };

  return (
    <Card style={{ width: '30rem' }} bg='success' border='success' text="dark">
      <Card.Header as="h5">Make A Deposit</Card.Header>
      {show ? <Card.Body>
        <Card.Text>Current Balance {ctx.users[0].balance}</Card.Text>
        <Card.Text>Amount to deposit</Card.Text>
        <input type="text" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} />
        <br></br>
        <Button type="submit" className="btn btn-light" disabled={deposit.length > 0 ? false : true} onClick={handleDeposit}>Submit Deposit</Button>
        {status}
      </Card.Body>
      : 
      <Card.Body>
        <Card.Text>Deposit successful</Card.Text>
        <Button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit?</Button>
      </Card.Body>
      }
    </Card>
  );
}; 