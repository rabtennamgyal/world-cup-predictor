function Knockout({ teams }) {
  const matchUp = []; // Round of 16
  console.log(matchUp);
  console.log(teams)

  function compare(a, b) {
    if (a.group < b.group) {
      return -1;
    }

    if (a.group > b.group) {
      return 1;
    }

    return 0;
  }

  teams.sort(compare);

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

    matchUp.push([winners[0], seconds[1]]); // A1-B2
    matchUp.push([winners[2], seconds[3]]); // C1-D2
    matchUp.push([winners[4], seconds[5]]); // E1-F2
    matchUp.push([winners[6], seconds[7]]); // G1-H2

    matchUp.push([winners[1], seconds[0]]); // B1-A2
    matchUp.push([winners[3], seconds[2]]); // D1-C2
    matchUp.push([winners[5], seconds[4]]); // F1-E2
    matchUp.push([winners[7], seconds[6]]); // H1-G2
  };

  fixMatchUp();

  let cur = 1; // sets the qs
  let nodes = 0; // sets the teams

  const logTeams = (e) => {
    const team = e.target.parentElement.childNodes[0];
    const img = team.childNodes[0];
    const name = team.childNodes[1].textContent;

    if (cur === 8) {
      console.log(`${name} is World Champion 🏆`);
      return;
    }

    // 1. Make the visual changes
    e.target.parentElement.style.backgroundColor = "#005CFF";
    team.childNodes[1].style.color = "#fff";

    // 2. Make the functional changes
    const els = document.getElementById(`q${cur}`).childNodes[nodes]
      .childNodes[0];

    matchUp.forEach((el) => {
      el.forEach((el) => {
        if (el.code === name) {
          const imgs = img.cloneNode(true);
          const p = document.createElement("p");
          p.textContent = el.code;

          els.appendChild(imgs);
          els.appendChild(p);

          if (nodes === 0) {
            nodes = 1;
          } else if (nodes === 1) {
            nodes = 0;
            cur++;
          }
        }
      });
    });
  };

  return (
    <div className="knockout">
      <div className="title">
        <h1>MAKE YOUR WORLD CUP PREDICTIONS</h1>
      </div>

      <div className="draws">
        <div className="stages">
          <h2>ROUND OF 16</h2>

          <div className="stage" id="roundof16">
            {matchUp.map((el, i) => (
              <div className="boxx" key={i}>
                <div className="boxContent" id="firstBox">
                  <div className="teamName">
                    <img src={el[0].img} alt="flag" />
                    <p>{el[0].code}</p>
                  </div>

                  <button onClick={logTeams}></button>
                </div>

                <div className="boxContent" id="secondBox">
                  <div className="teamName">
                    <img src={el[1].img} alt="flag" />
                    <p>{el[1].code}</p>
                  </div>

                  <button onClick={logTeams}></button>
                </div>
              </div>
            ))}
            {/* <span id='ver1'></span>
            <span id='ver2'></span>
            <span id='ver3'></span>
            <span id='ver4'></span> */}
          </div>
        </div>

        <div className="stages">
          <h2>QUARTER-FINALS</h2>

          <div className="stage" id="quarter">
            <div className="boxx" id="q1">
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q2">
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q3">
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q4">
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>
          </div>
        </div>

        <div className="stages">
          <h2>SEMI-FINALS</h2>

          <div className="stage" id="semi">
            <div className="boxx" id="q5">
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q6">
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>
          </div>
        </div>

        <div className="stages">
          <h2>FINAL</h2>

          <div className="stage" id="final">
            <div className="boxx" id="q7">
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent">
                <div className="teamName"></div>

                <button  onClick={logTeams}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knockout;
