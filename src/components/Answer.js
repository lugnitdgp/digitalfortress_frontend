import React, { useState } from 'react';

export default function Answer(props) {
    const [answer, setAnswer] = useState("")

    return (
        <div>
            <input className="form-control" placeholder="Enter your answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            <button className="btn btn-success float-right m-4 pl-3" onClick={(e) => props.onSubmit(answer)}>
                Submit
                <img src="https://img.icons8.com/plasticine/26/000000/idea.png" alt="daf" />
            </button>
        </div>
    );
}