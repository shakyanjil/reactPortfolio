import React ,{Component} from "react";
import "./label.css";

class Label extends Component {
  render(){
    return (
      <h4>{this.props.title}</h4>
    )
  }
}


export default Label;

