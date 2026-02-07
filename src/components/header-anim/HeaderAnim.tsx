import {useEffect} from "react";
import './header-anim.styles.scss';


export const HeaderAnim = () => {
  useEffect(()=>{
    const svgElement = document.getElementById("bgart");

    function drawCircles() {
      for (let i = 0; i < 5; i++) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("r", String(attributeCalc(900,30)));
        circle.setAttribute("cx", String(attributeCalc(900,0)));
        circle.setAttribute("cy", String(attributeCalc(900,0)));
        circle.setAttribute("stroke-width", String(attributeCalc(400,15)));
        circle.classList.add("circle");

        function getRandomLength() {
          return Math.floor(Math.random() * 500 + 100);
        }
        function getRandomGap() {
          return Math.floor(Math.random() * 500 + 900);
        }
        circle.setAttribute(
          "stroke-dasharray",
          `${getRandomLength()} ${getRandomGap()}`
        );

        svgElement?.appendChild(circle);
      }
    }

    function removeAll() {
      while (svgElement?.firstChild) {
        if (svgElement.lastChild) {
          svgElement.removeChild(svgElement.lastChild);
        }
      }
    }

    svgElement?.addEventListener("click", function () {
      removeAll();
      drawCircles();
    });

    drawCircles();

  },[])

  return (

    <div id="header-anim" className="header-anim">
      <p></p>
      <svg xmlns="http://www.w3.org/2000/svg" id="bgart" version="1.1" viewBox="100 100 600 600" preserveAspectRatio="xMidYMid slice">

      </svg>
      <svg style={{pointerEvents:'none'}}>
        <defs>
          <linearGradient id="bggrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function attributeCalc(x: number, y: number) {
  return Math.floor(Math.random() * x) + y;
}
