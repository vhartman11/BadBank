const { useContext } = require("react");

function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);  

console.log(ctx)
let user = ctx.users[ctx.users.length - 1]

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function valiDeposit(deposit) {
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

  function handleCreate(){
    console.log(deposit);
    if (!validate(deposit, 'deposit')) return;
    if (!valiDeposit(deposit, 'deposit')) return;
    ctx.users[ctx.users.length - 1].push({balance:deposit});
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
              Current Balance {user.balance}<br/>
              
              Amount to deposit<br/>
              <input type="text" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit Deposit</button>
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