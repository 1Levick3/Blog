import Left from './Left';
import Mid from './Mid';
import Right from './Right';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Pgmain=()=>{

    return(<>
      <div className='container-fluid p-0'>

<div className='row m-0'>
  <div className='col-md-3 col-12 bleft p-0'>
    <Left />
  </div>
  <div className='col-md-6 col-12 bmid p-0'>
    <Mid />
  </div>
  <div className='col-md-3 col-12 bright p-0'>
    <Right />
  </div>
</div>
<div className='row m-0'>   
</div>
</div>    
    </>)

}
export default Pgmain;