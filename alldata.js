const { useContext } = require("react");

function AllData(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext);  

  return (
    <Card
      bgcolor="success"
      header="User Information"
      status={status}
      body={show ? (  
              <>
              Name: {ctx.users[0].name}<br/>
              
              Email: {ctx.users[0].email}<br/>
              
              Password: {ctx.users[0].password}<br/>

              Balance: {ctx.users[0].balance}<br/>
              </>
            ):(
              <>
              </>
            )}
    />
  )
}