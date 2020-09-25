import React, {Component} from "react"; 
  
export default class QuestionBox extends Component { 
  constructor(props) { 
    super(props); 
    console.log(this.props.questions[0]);
    this.state = { 
        question: this.props.questions[0].question,
        option1: this.props.questions[0].option1,
        option2: this.props.questions[0].option2,
        currentQuestion: 0,
        responses: []
      }; 
  }
  
  getNextQuestion = () => { 
    let cur = this.state.currentQuestion + 1;
    this.setState({currentQuestion: cur});
    this.setState({question: this.props.questions[cur].question});
    this.setState({option1: this.props.questions[cur].option1});
    this.setState({option2: this.props.questions[cur].option2});
  }; 

  onOptionClick = (option) => {
    let currentResponses = this.state.responses;
    currentResponses.push(option);
    this.getNextQuestion();
  }
  
  render() { 
    return (<div className="container"> 
      <div className="title"> 
        {this.state.question}
      </div> 
        <button className="option1" onClick = {() => this.onOptionClick(this.state.option1)}>{this.state.option1}</button>
        <button className="option2" onClick = {() => this.onOptionClick(this.state.option2)}>{this.state.option2}</button>
    </div>) 
  } 
} 