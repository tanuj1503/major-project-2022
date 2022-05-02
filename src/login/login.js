import './login.css';


import imgr1 from './back2.png';
import imgr2 from './mm4.jpg';
import imgr3 from './women1.jpg';




function Login(){
    return(
        <>
           
            <div id='divr1'>

       

                <div id='divr21'>
             
                      <img src={imgr2} alt="img" id='imgr2'></img> 
      
                      <input type="text" placeholder='Enter Email '  id='inpr1' required></input>
                      <input type="text" placeholder='Password '  id='inpr1' required></input>
      
                      <button id='butnr11'>Sign Up</button>
                      <h1 id='h1l'>OR</h1>
                      <button id='butnr21'>Sign In</button>
      
                </div>
        

        
                   <div id='divr3'>
                         <h1 id='h1r'>COMMITED FOR BEST PHYSIOTHERAPHY TREATMENT</h1>
                   </div>

                    <div id='divr4'>
                      <img src={imgr3} alt="img" id='imgr31'></img>
                   </div>


             </div>





        </>
    );
}
export default Login;
