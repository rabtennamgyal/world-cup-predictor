import { useRef } from "react";

function Knockout({ teams }) {
  const a = useRef();
  const b = useRef();
  const c = useRef();
  const d = useRef();

  const arr = [a, b, c, d];
  let curRef = 0;
  let max = arr.length * 2;

  const matchUp = []; // Round of 16

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

    // if (cur === 8) {
    //   console.log(`${name} is World Champion 🏆`);
    //   return;
    // }

    // 1. Make the visual changes
    // e.target.parentElement.style.backgroundColor = "#005CFF";
    // team.childNodes[1].style.color = "#fff";

    // 2. Make the functional changes

    matchUp.forEach((el) => {
      el.forEach((el) => {
        if (el.code === name) {
          const curDataId =
            e.target.parentElement.parentElement.getAttribute("data-id");

          if (curDataId === "0") {
            const els = document.getElementById(`q${1}`).childNodes[0]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
                // e.target.parentElement.style.backgroundColor = "#fff";
                // team.childNodes[1].style.color = "#000";
                console.log(e.target.parentElement.parentElement);
                console.log(cur);
              }

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
            } else {
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
          } else if (curDataId === "1") {
            const els = document.getElementById(`q${1}`).childNodes[1]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";

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
            } else {
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
          } else if (curDataId === "2") {
            const els = document.getElementById(`q${2}`).childNodes[0]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "3") {
            const els = document.getElementById(`q${2}`).childNodes[1]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "4") {
            const els = document.getElementById(`q${3}`).childNodes[0]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "5") {
            const els = document.getElementById(`q${3}`).childNodes[1]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "6") {
            const els = document.getElementById(`q${4}`).childNodes[0]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "7") {
            const els = document.getElementById(`q${4}`).childNodes[1]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "8") {
            const els = document.getElementById(`q${5}`).childNodes[0]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }

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
            } else {
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
          } else if (curDataId === "9") {
            const els = document.getElementById(`q${5}`).childNodes[1]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "10") {
            const els = document.getElementById(`q${6}`).childNodes[0]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }

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
            } else {
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
          } else if (curDataId === "11") {
            const els = document.getElementById(`q${6}`).childNodes[1]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          } else if (curDataId === "12") {
            const els = document.getElementById(`q${7}`).childNodes[0]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }

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
            } else {
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
          } else if (curDataId === "13") {
            const els = document.getElementById(`q${7}`).childNodes[1]
              .childNodes[0];

            if (els.hasChildNodes()) {
              while (els.hasChildNodes()) {
                els.removeChild(els.firstChild);
              }
              e.target.parentElement.style.backgroundColor = "#fff";
              team.childNodes[1].style.color = "#000";
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
            } else {
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
          }
        }
      });
    });
  };

  function slideLeft(e) {
    if (curRef === max - 2) {
      curRef = 0;
    } else {
      curRef++;
      curRef++;
    }

    arr.forEach((el, i) => {
      el.current.style.transform = `translateX(${100 * (i - curRef)}%)`;
    });
  };

  function declareWinner(e) {
    const winner = e.target.parentElement;
    const img = winner.childNodes[0].childNodes[0];
    const code = winner.childNodes[0].childNodes[1].textContent;

    console.log(`${img} ${code} is World Champion.`);
    alert(`${code} is world champion.`)
  };

  setInterval(() => {
    let viewportWidth = window.innerWidth;

    function resetCar() {
      if (viewportWidth > 1501) {
        arr.forEach((el, i) => {
          el.current.style.transform = `translateX(${0}%)`;
        });
      }
    }

    window.addEventListener("resize", resetCar);
  });

  return (
    <div className="knockout">
      <div className="title">
        <h1>MAKE YOUR WORLD CUP PREDICTIONS</h1>
      </div>

      <div className="btns">
        <button className="btn" id="left">
          &larr;
        </button>
        <button className="btn" id="right" onClick={slideLeft}>
          &rarr;
        </button>
      </div>

      <div className="draws">
        <div className="stages" id="six" ref={a}>
          <h2>ROUND OF 16</h2>

          <div className="stage" id="roundof16">
            {matchUp.map((el, i) => (
              <div className="boxx" key={i} data-id={i}>
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
            <span id="ver1">
              <span className="hor1"></span>
              <span className="hor2"></span>
              <span className="mid"></span>
            </span>

            <span id="ver2">
              <span className="hor1"></span>
              <span className="hor2"></span>
              <span className="mid"></span>
            </span>

            <span id="ver3">
              <span className="hor1"></span>
              <span className="hor2"></span>
              <span className="mid"></span>
            </span>

            <span id="ver4">
              <span className="hor1"></span>
              <span className="hor2"></span>
              <span className="mid"></span>
            </span>
          </div>
        </div>

        <div className="stages" id="quar" ref={b}>
          <h2>QUARTER-FINALS</h2>

          <div className="stage" id="quarter">
            <div className="boxx" id="q1" data-id={8}>
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q2" data-id={9}>
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q3" data-id={10}>
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q4" data-id={11}>
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent" id="secondBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <span id="ver5">
              <span className="hor1"></span>
              <span className="hor2"></span>
              <span className="mid"></span>
            </span>

            <span id="ver6">
              <span className="hor1"></span>
              <span className="hor2"></span>
              <span className="mid"></span>
            </span>
          </div>
        </div>

        <div className="stages" id="semi" ref={c}>
          <h2>SEMI-FINALS</h2>

          <div className="stage" id="semi">
            <div className="boxx" id="q5" data-id={12}>
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <div className="boxx" id="q6" data-id={13}>
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>

              <div className="boxContent">
                <div className="teamName"></div>

                <button onClick={logTeams}></button>
              </div>
            </div>

            <span id="ver7">
              <span className="hor1"></span>
              <span className="hor2"></span>
              <span className="mid"></span>
            </span>
          </div>
        </div>

        <div className="stages" id="final" ref={d}>
          <h2>FINAL</h2>

          <div className="stage" id="final">
            <div className="boxx" id="q7" data-id={14}>
              <div className="boxContent" id="firstBox">
                <div className="teamName"></div>

                <button onClick={declareWinner}></button>
              </div>

              <div className="boxContent">
                <div className="teamName"></div>

                <button onClick={declareWinner}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knockout;
//  else if (curDataId === "8") {
//   const els = document.getElementById(`q${5}`).childNodes[0]
//   .childNodes[0];

// const imgs = img.cloneNode(true);
// const p = document.createElement("p");
// p.textContent = el.code;

// els.appendChild(imgs);
// els.appendChild(p);

// if (nodes === 0) {
//   nodes = 1;
// } else if (nodes === 1) {
//   nodes = 0;
//   cur++;
// }
// } else if (curDataId === "9") {
// const els = document.getElementById(`q${5}`).childNodes[1]
//   .childNodes[0];

// const imgs = img.cloneNode(true);
// const p = document.createElement("p");
// p.textContent = el.code;

// els.appendChild(imgs);
// els.appendChild(p);

// if (nodes === 0) {
//   nodes = 1;
// } else if (nodes === 1) {
//   nodes = 0;
//   cur++;
// }
// }
