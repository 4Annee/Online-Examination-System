import {useState,useEffect,useRef} from 'react';
import {flushSync} from 'react-dom';
function Question({question,totalQuestions,currentQuestion,setAnswer})
{
    const[selectedOption,setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);
    function goToNextQuestion(){
        if(timer.current)
        {
            clearTimeout(timer.current);
        }
        flushSync(()=>{
            setAnswer(selectedOption);
        });
        setSelectedOption(null);
    }
    useEffect(()=>{
      progressBar.current.classList.remove("active");
      setTimeout(()=>{
        progressBar.current.classList.add("active");
        },0);
        timer.current = setTimeout(goToNextQuestion, 10*1000);
        return goToNextQuestion;
    },[question]);
    return(
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <div className='question-count'>
                <b>{currentQuestion}</b>
                of
                <b>{totalQuestions}</b>

            </div>
            <div className='main'>
                <div className='title'>
                    <span>Question :</span>
                    <p>{question.title}</p>
                </div>
                <div className='options'>
                    {
                        question.options.map((option,index)=>{
                            return (
                                <div 
                                    className={index === selectedOption ? "option active" : "option"}
                                    key={index}
                                    onClick={()=>setSelectedOption(index)}
                                >
                                    {option}
                                </div>

                            );
                        })
                    }
                </div>
            </div>
            <div className='control'>
                <button className='btn-join' onClick={goToNextQuestion}> next</button>
            </div>
        </div>
    );


}
export default Question;