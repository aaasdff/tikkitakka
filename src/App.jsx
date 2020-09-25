import React, {Component} from "react"; 
import QuestionBox from './components/questionbox'; 
import questions from './questions.json';

export default class App extends Component { 
  constructor() { 
    super(); 
    this.state = { 
      questionBank: [], 
      responses: []
    }; 
  }
  
  getQuestions = () => { 
    let q = [];
    let myQ = questions.questions;
    for (var i = 0; i < myQ.length; i ++) {
      q.push(myQ[i]);
    }
    this.setState({questionBank: q});
  }; 
  
  // componentDidMount function to get question 
  componentDidMount() { 
    this.getQuestions(); 
  } 
  
  render() { 
    if (this.state.questionBank.length > 0) {
      return (<div className="container"> 
      <div className="title"> 
        성향퀴즈 
      </div> 
      <QuestionBox questions={this.state.questionBank} /> 
    </div>) 
    }
  else {
    return <div></div>
  }
}
} 