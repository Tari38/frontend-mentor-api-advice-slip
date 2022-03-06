import dice from "../images/icon-dice.svg";
import "./Button.css";

export default function Button() {

return(
  <div className="button">
    <img src={dice} alt="dice" className="dice"></img>
  </div>
)
}