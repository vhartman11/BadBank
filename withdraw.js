const { useContext } = require("react");

function Withdraw(){
  const [show, setShow]             = React.useState(true);
  const [status, setStatus]         = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(withdraw) {
    if (isNaN(parseFloat(withdraw))) {
      setStatus('Error: not a number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (withdraw < 0) {
      setStatus('Error: deposit is less then 0');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (withdraw > ctx.users[0].balance) {
      setStatus('Error: not enough in account');
      setTimeout(() => setStatus(''),3000);
      return false;
     }
    return true;
  }

  function handleWithdraw(){
    if (!validate(withdraw)) return;
    ctx.users[0].balance = ctx.users[0].balance - parseInt(withdraw)
    setShow(false);
  }    

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="danger"
      header="Make A Withdraw"
      status={status}
      body={show ? (  
              <>
              Current Balance {ctx.users[0].balance}<br/>
              
              Amount to withdraw<br/>
              <input type="text" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
              
              <button type="submit" className="btn btn-light" disabled={withdraw.length > 0 ? false : true} onClick={handleWithdraw}>Request withdraw</button>
              </>
            ):(
              <>
              <h5>Withdraw successful</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdraw?</button>
              </>
            )}
    />
  )
}