import { useState } from "react";

function QuestionDetails({question}){
  const [like, setlike] = useState(0)
  return(
    <div className="card rounded-0 mt-3">
      <h3 className="card-title">{question.name}</h3>
      <p><span className="btn btn-primary">{question.tag}</span>
      <button type="button" className="btn btn-link" onClick={() => setlike(like + 1)}>Like</button>
      { like > 0 ? (<><span className="badge bg-primary">{like}</span><button type="button" className="btn btn-link" onClick={() => setlike(like - 1)}>Dislike</button></>) : ""}
      </p>
    </div>
  )
}

export default QuestionDetails;