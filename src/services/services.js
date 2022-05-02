import './services.css';
import imgs1 from './arthritis.PNG';
import imgs2 from './blesspalsy.PNG';
import imgs3 from './cerebral.PNG';
import imgs4 from './gbs1.PNG';
import imgs5 from './paralysis.PNG';
import imgs6 from './postfracture.PNG';
import imgs7 from './postjoin.PNG';
import imgs8 from './spondylitis.PNG';
import imgs9 from './sprain.PNG';
import imgs10 from './vertigo.PNG';


function Services(){
    return(
        <>
           
           <div id='divs1'>
               <h1 id='h1s1'> What We Offer</h1>
               <p id='p1s'> Get Your Life Style Back <br></br>
                            Our Ouststanding team is here to help you reach your healthcare goals
                </p>

                <div id='divs2'>

                    <button id='b1'>&lt; </button>
                    
                    <img src={imgs1} id="img1"  width="100%" height="350px"></img><br></br>

                    <button  onclick="document.getElementById('img1').src={imgs2} "> </button>
                    
              

                    
                    
                    <button id='b2'> &gt;</button>
                </div>            

           </div>
        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default Services;