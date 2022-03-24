import Letter from "./letter";
import "./anime.css";

let order = 0;

export default function Anime() {
  return (
    <div>
      <div id="container" style={{ display: "flex" }}>
        <Letter title={`title1`} content="O"></Letter>
        <Letter title={`title2`} content="R"></Letter>
        <Letter title={`title3`} content="A"></Letter>
        <Letter title={`title4`} content="N"></Letter>
        <Letter title={`title5`} content="G"></Letter>
        <Letter title={`title6`} content="E"></Letter>
        <div className="css-selector-demo title7 orange"
        style={{transform: "translateY(-30px)"}}>
          <span style={{fontSize: "20px"}}>🍊</span>
        </div>
      </div>
    </div>
  );
}
