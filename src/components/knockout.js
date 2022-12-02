function Knockout({ teams }) {
  //const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const matchUp = [];
  console.log(matchUp);

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

    winners.unshift("0");
    seconds.unshift("0");

    matchUp.push([winners[1], seconds[2]]); // A1-B2
    matchUp.push([winners[3], seconds[4]]); // C1-D2
    matchUp.push([winners[5], seconds[6]]); // E1-F2
    matchUp.push([winners[7], seconds[8]]); // G1-H2

    matchUp.push([winners[2], seconds[1]]); // B1-A2
    matchUp.push([winners[4], seconds[3]]); // D1-C2
    matchUp.push([winners[6], seconds[5]]); // F1-E2
    matchUp.push([winners[8], seconds[7]]); // H1-G2
  };
  fixMatchUp();

  const insertMatches = () => {
    const boxes = document.querySelectorAll(".boxx");

    boxes.forEach((el, i) => {
      // winner
      // create the para element
      const code1 = document.createElement("p");
      code1.textContent = matchUp[i][0].code;
      // create the img element
      const img1 = document.createElement("img");
      img1.src = matchUp[i][0].img;

      // second
      // create the para element
      const code2 = document.createElement("p");
      code2.textContent = matchUp[i][1].code;
      // create the img element
      const img2 = document.createElement("img");
      img2.src = matchUp[i][1].img;

      const boxContent = document.createElement("div");
      boxContent.classList.add("boxContent");
      boxContent.appendChild(code1);
      boxContent.appendChild(img1);

      const boxContent2 = document.createElement("div");
      boxContent2.classList.add("boxContent");
      boxContent2.appendChild(code2);
      boxContent2.appendChild(img2);
      el.appendChild(boxContent);
      el.appendChild(boxContent2);
    });
  };

  // if (matchUp.length > 7) {
  insertMatches();
  // }

  return (
    <div className="knockout">
      <div className="title">
        <h1>MAKE YOUR WORLD CUP PREDICTIONS</h1>
      </div>

      <div className="draws">
        <div className="stages" id="roundof16">
          <h2>ROUND OF 16</h2>

          <div className="stage">
            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>

            <div className="boxx"></div>
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
