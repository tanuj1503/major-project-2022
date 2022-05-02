
import imgm1 from './logo1.png';
import imgm2 from './main4.PNG';
import imgm3 from './bb2.png';
import imgm4 from './m1.png';
import imgm5 from './n1.png';
import imgm6 from './n3.png';
import imgm7 from './n5.png';


import './homepage.css';




function Homepage(){
        return(
        <>

        <div id='divm1'>  
                    <div id='divm1a'> 
                    <img src={imgm1} alt="logo" id='imgm1'></img>
                    </div>

                   <div id='divm1a1'><h1 id='h1a1'>REJUVINATION CENTER</h1> </div>

                     <div id='list'>
                             <ul id='ul1'>
                                   <li id='li1'>Home</li> 
                                   <li id='li1'>About</li>  
                                   <li id='li1'>Services</li>  
                                   <li id='li1'>Gallery</li>  
                                   <li id='li1'>Equipments</li>  
                                   <li id='li1'>Contact</li>   
                             </ul>
                     </div>
                     <div id='butndiv'> <button id='butn1'>Book Appointment</button> </div>
        </div>                 





                     <div id='div2'>
                              <div id='div2a'>
                                <h1 id='h1b'>COMMITED FOR BEST <br></br>PHYSIOTHERAPHY TREATMENT</h1>
                                <button id='butn2'> Book Appointment</button>
                               </div>
                               




                               <div id='div3'>
                                       <div id='div3a'>
                                       <h1 id='h1b1'>WE HELPING <br></br>PATIENT SINCE 2008</h1>
                                       <p id='p1'>WE ARE COMMITED FOR DELIVERING RAPID RESULT<br></br>
                                        WITH HIGH QUALITY PHYSIOTHERAPY AND EXCEPTIONAL<br></br>
                                        CUSTOMER SERVICE . THOUSANDS OF PATIENT CHOOSE<br></br>
                                        REJUVINATION EVERY YEAR . LET US HELP YOU<br></br>
                                        CALL NOW TO SECURE AN APPOINTMENT</p>
                                     <button id='butn2a'> CALL: +91 9322933798</button>
                                      </div>   
                                       
                                       <div id='div3b'>
                                       <img src={imgm3} alt="img" id='imgm3'></img>     
                                       </div>
                               </div>





                               <div id='div4'>
                                       <div id='div4a'>
                                             <h1 id='h1b2'>We're not<br></br>your usual<br></br>
                                             physiotherapy<br></br>Clinic</h1>  
                                             <div id='divblank'></div>
                                       
                                       </div>
                                       

                                       <div id='div4b'>
                                               <img src={imgm4} alt="img" id='imgm4'></img>
                                               <h1 id='h1s'> Quality Time</h1>
                                               <p id='p2'>Good management structures ensure<br>
                                               </br> coordination among staff, services, infrastructure and
                                                supply chains to deliver high-quality care. </p>
                                       </div>

                                       <div id='div4c'>
                                               <img src={imgm5} alt="img" id='imgm4'></img>
                                               <h1 id='h1s'> Deep Knowledge</h1>
                                               <p id='p2'>A hospital is a health care 
                                                institution providing patient treatment
                                                with specialized health science and 
                                                auxiliary healthcare staff and medical equipment. </p>
                                       </div>
                                       


                                       <div id='div4d'>
                                               <img src={imgm6} alt="img" id='imgm4'></img>
                                               <h1 id='h1s'> Customer Service</h1>
                                               <p id='p2'> . The first key to providing great 
                                               customer service in the healthcare 
                                               industry is to stop treating patients as
                                               customers whose sole purpose is to generate revenue. </p>
                                        </div>



                                       <div id='div4e'>
                                               <img src={imgm7} alt="img" id='imgm4'></img>
                                               <h1 id='h1s'> Award Winning</h1>
                                               <p id='p2'>In health care, the days 
                                               business as usual are over.
                                               Around the world, every health care system 
                                               is struggling with rising costs and uneven
                                               quality, despite</p>
                                        </div>


                                </div>

                                

                               
                        </div>

       
             
        
       
        
        
        
        
        </>

        );

}

export default Homepage;