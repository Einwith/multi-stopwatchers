import {useState, useEffect} from 'react'

const Stopwatch = ({clockNum}) => {
    const [sec, setSec] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [event, setEvent] = useState('');
    
    
    const secToClock = () => {
        let hrs = Math.floor(sec / (60 ** 2));
        let x = sec % (60 ** 2);
        let mins = Math.floor(x / 60);
        let seconds = x % 60; 
        let time = [hrs, mins, seconds];
        time = time.map(myNumber => {
                let num = myNumber.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
                });
                return num;         
            }       
        )
        
        return time[0] + ":" + time[1] + ":" + time[2];
    }


    useEffect(() => {
        let x = null;

        if(timerOn){
            x = setInterval(() => {                    
                setSec((currentSec) => (currentSec + 1));           
                }, 1000);
        }
                        
        return () => clearInterval(x);
    }, [timerOn]);     

    const removeWatch = () => {


    }

    return ( 
        <div className="stopwatch">
           
            <div ><textarea className="watchEvent"  onChange={(e)=>{setEvent(e.target.value);}}/></div>
            
            <div className="watchBody">{secToClock()}</div>
            
            <div className="buttons">
                <button className="start" onClick={()=>{setTimerOn(true);}}>start</button>
                <button className="stop" onClick={()=>{setTimerOn(false);}}>stop</button>
                <button className="reset" onClick={()=>{setSec(0);setTimerOn(false);}}>reset</button>
            
            </div>
            

        </div>
     );
}
 
export default Stopwatch;