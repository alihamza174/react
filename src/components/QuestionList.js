import QuestionDetails from './QuestionDetails'
function QuestionList() {
  const questionList = [
    {
      id: 1,
      name: "Question 0",
      tag: "Ruby"
    },
    {
      id: 2,
      name: "Question 2",
      tag: "Ruby"
    }
  ]
  return(
    <div className="row">
      {questionList.map((question) =>
        <QuestionDetails question={question} key={question.id}/>
      )}
    </div>
  )
}

export default QuestionList;