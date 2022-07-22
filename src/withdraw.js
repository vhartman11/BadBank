import React  from 'react'; 
import Button from 'react-bootstrap/Button';
import Card   from 'react-bootstrap/Card';
import { UserContext } from './context';

export function Withdraw() {
  const [show, setShow]             = React.useState(true)
  const [status, setStatus]         = React.useState('')
  const [withdraw, setWithdraw]     = React.useState('')
  const ctx = React.useContext(UserContext)

  function validate(withdraw) {
    if (isNaN(parseFloat(withdraw))) {
      setStatus('Error: not a number')
      setTimeout(() => setStatus(''),3000)
    return false
    }
    if (withdraw < 0) {
      setStatus('Error: deposit is less then 0')
      setTimeout(() => setStatus(''),3000)
    return false
    }
    if (withdraw > ctx.users[0].balance) {
      setStatus('Error: not enough in account')
      setTimeout(() => setStatus(''),3000)
    return false
    }
    return true
  };

  function handleWithdraw() {
    if (!validate(withdraw)) return
    ctx.users[0].balance = ctx.users[0].balance - parseInt(withdraw)
    setShow(false)
  };    

  function clearForm() {
    setWithdraw('')
    setShow(true)
  };

  return (
    <Card style={{ width: '30rem' }} bg='danger' border='danger' text="dark">
      <Card.Header as="h5">Request A Withdraw</Card.Header>
      {show ? <Card.Body>
        <Card.Text>Current Balance {ctx.users[0].balance}</Card.Text>
        <Card.Text>Amount to withdraw</Card.Text>
          <input type="text" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} />
          <br></br>
          <Button type="submit" className="btn btn-light" disabled={withdraw.length > 0 ? false : true} onClick={handleWithdraw}>Request withdraw</Button>
          {status}
        </Card.Body> 
        : 
        <Card.Body>
          <Card.Text>Withdraw successful!</Card.Text>
          <Button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdraw?</Button>
        </Card.Body>
        }
    </Card>
  );
};
