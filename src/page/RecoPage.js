import React, { useState } from 'react';
import './RecoPage.css';
import '../App.css';
import { surveys } from '../surveys';
import { Link } from 'react-router-dom';


const RecoPage = () => {
    const [count, setCount] = useState(0);
    const [survey, setSurvey] = useState(surveys[count]);
    const [result, setResult] = useState([]);

    const changeColor = (e) =>{
        e.target.classList.add("highlight");
        const section = document.querySelector('.section');
        section.classList.add('disappear');      
        setResult([...result, e.target.value])
        setTimeout(moveNext, 500);
    }

    const moveNext = () =>{    
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn=> btn.classList.contains('highlight') && btn.classList.remove('highlight'));
        
        const section = document.querySelector('.section');
        section.classList.remove('disappear');

        const newCount = count+1;
        setSurvey(surveys[newCount]);
        setCount(newCount);
    }


    return( 
        <div className='App-header'>
            <div className='section'>
                <h1 className='question'>{survey.question}</h1>
                <div className='buttons'>
                    <button className="btn" onClick={changeColor} value={survey.answer1}>{survey.answer1}</button>
                    <button className="btn" onClick={changeColor} value={survey.answer2}>{survey.answer2}</button>
                </div>
                
                <Link to = "/result" state = {{ result: result }}>
                    {(count===surveys.length-1)&& <button className="resultBtn">check out</button>}
                </Link>
            </div> 
        </div>
    )           
};

export default RecoPage;
