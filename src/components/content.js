// Group A
import holland from "../assets/flags/holland.svg";
import senegal from "../assets/flags/senegal.png";
import ecuador from "../assets/flags/ecuador.svg";
import qatar from "../assets/flags/q.svg";
// Group B
import England from "../assets/flags/england.svg";
import Iran from "../assets/flags/iran.webp";
import USA from "../assets/flags/usa.png";
import Wales from "../assets/flags/wales.png";
// Group C
import Argentina from "../assets/flags/argentina.webp";
import Saudi from "../assets/flags/suadi.png";
import Mexico from "../assets/flags/mexico.png";
import Poland from "../assets/flags/poland.png";
// Group D
import France from "../assets/flags/france.png";
import Aus from "../assets/flags/australia.png";
import Den from "../assets/flags/denmark.png";
import Tun from "../assets/flags/tunisia.png";
// Group E
import Spain from "../assets/flags/spain.svg";
import rica from "../assets/flags/costa.svg";
import ger from "../assets/flags/germany.png";
import japan from "../assets/flags/japan.svg";
// Group F
import Bel from "../assets/flags/belgium.png";
import can from "../assets/flags/canada.png";
import mar from "../assets/flags/morocco.png";
import cor from "../assets/flags/croatia.png";
// Group G
import bra from "../assets/flags/brazil.png";
import ser from "../assets/flags/serbia.webp";
import sui from "../assets/flags/swiss.webp";
import cam from "../assets/flags/cam.png";
// Group H
import port from "../assets/flags/por.webp";
import gha from "../assets/flags/ghana.png";
import uru from "../assets/flags/uru.png";
import kor from "../assets/flags/korea.svg";

const allFlags = {
  NED: "Netherlands",
  ECU: "Ecuador",
  SEN: "Senegal",
  QAT: "Qatar",
  ENG: "England",
  IRN: "Iran",
  USA: "USA",
  WAL: "Wales",
  ARG: "Argentina",
  KSA: "Saudi Arabia",
  MEX: "Mexico",
  POL: "Poland",
  FRA: "France",
  AUS: "Australia",
  DEN: "Denmark",
  TUN: "Tunisia",
  ESP: "Spain",
  CRC: "Costa Rica",
  GER: "Germany",
  JPN: "Japan",
  BEL: "Belgium",
  CAN: "Canada",
  MAR: "Morocco",
  CRO: "Croatia",
  BRA: "Brazil",
  SRB: "Serbia",
  SUI: "Swiss",
  CMR: "Cameroon",
  POR: "Portugal",
  GHA: "Ghana",
  URU: "Uruguay",
  KOR: "Korea",
};

let groupStage = 0;

function Content({ setroundOne, setroundTwo, teams, setTeams }) {
  // This function deals with all the dom manipulation.
  const pickTeams = (e) => {
    const card =
      e.target.parentElement.parentElement.parentElement.parentElement;

    let val = card.getAttribute("value");

    const groupName =
      card.childNodes[0].childNodes[0].textContent.split(" ")[1];

    const pic = e.target.src;
    let cur;
    let cur2;
    cur = card.children[1].children[val].children[0].children[1];
    cur2 = card.children[1].children[val].children[1];

    // a. create img element
    const img = document.createElement("img");
    img.classList.add("flagstyle");
    img.src = pic;
    // b. create para element
    const para = document.createElement("p");
    para.classList.add("parastyle");

    for (let key in allFlags) {
      const code = e.target.parentElement.childNodes[1].textContent;

      if (code === key) {
        para.textContent = allFlags[`${code}`];

        if (val <= 1) {
          
          let data = {
            group: groupName,
            team: allFlags[`${code}`],
            position: val
          };

          setTeams([...teams, data]);
        }
      }
    }

    cur.appendChild(img);
    cur2.appendChild(para);

    // setting the new attribute for that particular html element
    let num = Number(val);
    card.setAttribute("value", Number(num + 1));

    const cards = e.target.parentElement;
    let child = cards.lastElementChild;

    while (child) {
      cards.removeChild(child);
      child = cards.lastElementChild;
    }

    groupStage = groupStage + 1;

    if (groupStage === 32) {
      setroundOne(false);
      setroundTwo(true);
    }
  };

  return (
    <div className="content">
      <div className="title">
        <h1>MAKE YOUR WORLD CUP PREDICTIONS</h1>
      </div>

      <div className="cards" id='parent'>
        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group A</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={holland}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>NED</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={ecuador}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>ECU</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={senegal}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>SEN</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={qatar}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>QAT</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>

        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group B</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={England}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>ENG</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Iran}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>IRN</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={USA}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>USA</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Wales}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>WAL</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>

        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group C</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={Argentina}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>ARG</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Saudi}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>KSA</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Mexico}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>MEX</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Poland}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>POL</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>

        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group D</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={France}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>FRA</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Aus}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>AUS</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Den}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>DEN</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={Tun}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>TUN</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>

        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group E</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={Spain}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>ESP</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={rica}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>CRC</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={ger}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>GER</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={japan}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>JPN</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>

        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group F</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={Bel}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>BEL</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={can}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>CAN</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={mar}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>MAR</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={cor}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>CRO</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>

        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group G</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={bra}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>BRA</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={ser}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>SRB</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={sui}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>SUI</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={cam}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>CMR</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>

        <div className="card" value={0}>
          <div className="cardOne">
            <h2>Group H</h2>

            <div className="flags">
              <div className="container">
                <img
                  className="flag"
                  src={port}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>POR</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={gha}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>GHA</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={uru}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>URU</p>
              </div>

              <div className="container">
                <img
                  className="flag"
                  src={kor}
                  alt="flag"
                  onClick={pickTeams}
                />
                <p>KOR</p>
              </div>
            </div>
          </div>

          <div className="cardTwo">
            <div className="first box">
              <div className="list">
                <p>1</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="second box">
              <div className="list">
                <p>2</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="third box">
              <div className="list">
                <p>3</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>

            <div className="fourth box">
              <div className="list">
                <p>4</p>
                <span></span>
              </div>

              <div className="choice"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
