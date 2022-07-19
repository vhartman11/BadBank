const { useContext } = require("react");

function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(deposit) {
     if (isNaN(parseFloat(deposit))) {
      setStatus('Error: not a number');
      setTimeout(() => setStatus(''),3000);
      return false;
     }
     if (deposit < 0) {
      setStatus('Error: deposit is less then 0');
      setTimeout(() => setStatus(''),3000);
      return false;
     }
     return true;
  }

  function handleDeposit(){
    if (!validate(deposit)) return;
    ctx.users[0].balance = ctx.users[0].balance + parseInt(deposit)
    setShow(false);
  }    

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Make A Deposit"
      status={status}
      body={show ? (  
              <>
              Current Balance {ctx.users[0].balance}<br/>
              
              Amount to deposit<br/>
              <input type="text" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              
              <button type="submit" className="btn btn-light" disabled={deposit.length > 0 ? false : true} onClick={handleDeposit}>Submit Deposit</button>
              </>
            ):(
              <>
              <h5>Deposit successful</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit?</button>
              </>
            )}
    />
  )
}