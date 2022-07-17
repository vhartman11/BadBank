const { useContext } = require("react");

function Withdraw(){
  const [show, setShow]             = React.useState(true);
  const [status, setStatus]         = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const ctx = React.useContext(UserContext);  

console.log(ctx)
let user = ctx.users[ctx.users.length - 1]
let balance = user.balance

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function valiWithdraw(withdraw) {
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
    if (withdraw > balance) {
      setStatus('Error: not enough in account');
      setTimeout(() => setStatus(''),3000);
      return false;
     }
    return true;
 }

  function handleCreate(){
    console.log(withdraw);
    if (!validate(withdraw, 'withdraw')) return;
    if (!valiWithdraw(withdraw, 'withdraw')) return;
    //ctx.users.push({name,email,password,balance:100});
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
              Current Balance {user.balance}<br/>
              
              Amount to withdraw<br/>
              <input type="text" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
              
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Request withdraw</button>
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