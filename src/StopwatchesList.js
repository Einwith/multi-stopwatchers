import Stopwatch from "./Stopwatch"
import {useState} from 'react'


const StopwatchesList = () => {

    const [array, setArray] = useState([0,1]);
    const addWatch = () => {
        setArray(oldArray => [...oldArray, array.length]);

    }

    return ( 
        <div className="stopwatches-list">
            <button className="add"onClick={addWatch}>add stopwatch</button>
            <div className="cards">{array.map( (e) => {
                if(e != -1) {
                    return <Stopwatch num={e}/>
                }
            }
            )}
            </div>
            
            

        </div>
     );
}
 
export default StopwatchesList;