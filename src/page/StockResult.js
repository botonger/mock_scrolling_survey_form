import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './StockResult.css';
// import './RecoPage.css';



const StockResult = ()=>{
    const location = useLocation();

    const choices = location.state.result;

    return(
        <div className='App-header'>
            <div className='section'>
                <div className="choices">
                    Check your answers:
                    {choices.map(choice=><div className="choice">{choice}</div>)}
                    </div>
                <div className="again">
                    Try again:
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default StockResult;