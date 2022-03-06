import React from "react";
import axios from "axios";
import "./Card.css";
import {
  CardBody,
  CardText,
  CardImg,
  CardTitle
} from "reactstrap";
import line from "../../public/images/pattern-divider-desktop.svg";


export default class Card extends React.Component {
  state = {
    id: "",
    advice: ""
  };
  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { id, advice } = response.data.slip;

        this.setState({ id, advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
  return(
    <div className="card">
      <CardBody>
        <div className="card-slip">
          <CardTitle className="slip-id">
            Advice #{this.state.id}
          </CardTitle>
          <CardText className="slip-advice">
            "{this.state.advice}"
          </CardText>
        </div>
          <CardImg className="card-img2" src={line}></CardImg>

        <br />
      </CardBody>
    </div>
  )
}
}
