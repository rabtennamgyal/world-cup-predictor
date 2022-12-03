import { useState } from "react";

function Knockout({ teams }) {
  const [insert, setInsert] = useState(false);
  const matchUp = [];

  const fixMatchUp = () => {
    const winners = [];
    const seconds = [];

    teams.forEach((element) => {
      if (element.position === "0") {
        winners.push(element);
      }
    });

    teams.forEach((element) => {
      if (element.position === "1") {
        seconds.push(element);
      }
    });

    // matchUp.push([winners[0], seconds[1]]); // A1-B2
    // matchUp.push([winners[2], seconds[3]]); // C1-D2
    // matchUp.push([winners[4], seconds[5]]); // E1-F2
    // matchUp.push([winners[6], seconds[7]]); // G1-H2

    // matchUp.push([winners[1], seconds[0]]); // B1-A2
    // matchUp.push([winners[3], seconds[2]]); // D1-C2
    // matchUp.push([winners[5], seconds[4]]); // F1-E2
    // matchUp.push([winners[7], seconds[6]]); // H1-G2
    matchUp.push(winners[0], seconds[1]); // A1-B2
    matchUp.push(winners[2], seconds[3]); // C1-D2
    matchUp.push(winners[4], seconds[5]); // E1-F2
    matchUp.push(winners[6], seconds[7]); // G1-H2

    matchUp.push(winners[1], seconds[0]); // B1-A2
    matchUp.push(winners[3], seconds[2]); // D1-C2
    matchUp.push(winners[5], seconds[4]); // F1-E2
    matchUp.push(winners[7], seconds[6]); // H1-G2
    setInsert(true);
  };

  fixMatchUp();

  return (
    <div className="knockout">
      <div className="title">
        <h1>MAKE YOUR WORLD CUP PREDICTIONS</h1>
      </div>

      <div className="draws">
        <div className="stages" id="roundof16">
          <h2>ROUND OF 16</h2>

          <div className="stage">
            {insert &&
              matchUp.map((el, i) => (
                <div className="boxx" key={i}>
                  {/* <div className="boxContent">
                    <p>{el.code}</p>
                  </div>

                  <div className="boxContent">
                    <p>{el.code}</p>
                  </div> */}
                </div>
              ))}
          </div>
        </div>

        <div className="stages">
          <h2>QUARTER-FINALS</h2>
        </div>

        <div className="stages">
          <h2>SEMI-FINALS</h2>
        </div>

        <div className="stages">
          <h2>THIRD-PLACE</h2>
        </div>

        <div className="stages">
          <h2>FINAL</h2>
        </div>
      </div>
    </div>
  );
}

export default Knockout;

/* <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div> */

// const insertMatches = () => {
//   const boxes = document.querySelectorAll(".boxx");

//   boxes.forEach((el, i) => {
//     // winner
//     // create the para element
//     const code1 = document.createElement("p");
//     code1.textContent = matchUp[i][0].code;
//     // create the img element
//     const img1 = document.createElement("img");
//     img1.src = matchUp[i][0].img;

//     // second
//     // create the para element
//     const code2 = document.createElement("p");
//     code2.textContent = matchUp[i][1].code;
//     // create the img element
//     const img2 = document.createElement("img");
//     img2.src = matchUp[i][1].img;

//     const boxContent = document.createElement("div");
//     boxContent.classList.add("boxContent");
//     boxContent.appendChild(code1);
//     boxContent.appendChild(img1);

//     const boxContent2 = document.createElement("div");
//     boxContent2.classList.add("boxContent");
//     boxContent2.appendChild(code2);
//     boxContent2.appendChild(img2);
//     el.appendChild(boxContent);
//     el.appendChild(boxContent2);
//     setInsert(true);
//   });
// };

// if (matchUp.length === 8 && insert === false) {
//   insertMatches();
// }
