import React from "react";
import anime from "animejs";
import { useEffect } from "react";
import "./anime.css";
export default function Letter(props) {
    useEffect(() => {
        let tl = anime.timeline({
          easing: "easeOutSine",
          duration: 300,
          loop: true
        });
        for(let i = 1; i <= 7; i++){
          tl.add({
            targets: `.title${i}`,
            translateY: 0,
          })
        }
        tl.add({
          targets: ".orange",
          rotate: {
            value: "+=2turn", // 0 + 2 = '2turn'
            duration: 1800,
            easing: "easeInOutSine",
          },
        });
        tl.add({
          targets: ".orange",
          opacity: 0,
          translateX: -32 * 5,
          duration: 500,
        });
        for (let i = 1; i <= 6; i++) {
          tl.add({
            targets: `.title${i}`,
            keyframes: [{ translateY: -20 }, { translateY: 0 }],
            duration: 100,
            easing: "easeOutSine(1, .8)",
          });
        }
        tl.add({
          targets: ".orange",
          opacity: 1,
          translateX: 0,
          duration: 200,
        });
    });
    return(
        <div className={`css-selector-demo ${props.title}`}
        style={{transform: "translateY(-130px)"}}>
          <span>{props.content}</span>
        </div>
    )
}