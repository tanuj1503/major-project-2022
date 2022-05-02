import './signup.css';

import imgr1 from './back2.png';
import imgr2 from './mm4.jpg';
import imgr3 from './d1.jpg';



function Signup(){
    return(
        <>

            <div id='divr1'>

       

                    <div id='divr2'>
                                 
                                 

                          <img src={imgr2} alt="img" id='imgr2'></img> 
                          
                          <input type="text" placeholder='Patient name '  id='inpr1' required></input>
                          
                          
                          <input type="text" placeholder='Enter your email ' id='inpr1' required></input><br></br>
                          
                          
                          <input type="text" placeholder='Password' id='inpr1' required></input>
                          
                           <input type="text" placeholder='Re-enter Password '  id='inpr1' required></input><br></br>
                          
                          <input type="text" placeholder='Address ' id='inpr1' required></input>
                          
                          <input type="date" placeholder='Age'  id='inpr1' required></input>
                          
                          
                          <select id='inpr1'>
                          <option >Purpose </option>
                          <option >Arthritis</option>
                          <option >Spondylitis</option>
                          <option >Post Fracture Physiotherapy</option>
                          <option >Peralysis</option>
                          <option>Bless Palsy </option>
                          <option >Post Joint Replacement</option>
                          <option >GBS</option>
                          <option >Sprain</option>
                          <option>Vertigo</option>
                          <option >Cerebral Palsyitis</option>
                          </select>
                          
                          <button id='butnr1'>Sign Up</button>
                          <button id='butnr2'>Sign In</button>
                          

                            
                    </div>
                            

                            
                            <div id='divr3'>
                            <h1 id='h1r'>COMMITED FOR BEST PHYSIOTHERAPHY TREATMENT</h1>
                            </div>

                            <div id='divr4'>
                            <img src={imgr3} alt="img" id='imgr3'></img>
                            </div>


            </div>
        
        
        
        
        
        
        </>
        
    )
}
export default Signup;