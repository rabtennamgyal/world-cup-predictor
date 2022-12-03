function Knockout({ teams }) {
  const matchUp = [];
  console.log(matchUp)

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

  return (
    <div className="knockout">
      <div className="title">
        <h1>MAKE YOUR WORLD CUP PREDICTIONS</h1>
      </div>

      <div className="draws">
        <div className="stages" id="roundof16">
          <h2>ROUND OF 16</h2>

          <div className="stage">
            {matchUp.map((el, i) => (
              <div className="boxx" key={i}>
                <div className="boxContent" id='firstBox'>
                  <div className='teamName'>
                    <img src={el[0].img} alt="flag" />
                    <p>{el[0].team}</p>
                  </div>

                  <button>
                    btn
                  </button>
                </div>

                <div className="boxContent">
                  <div className='teamName'>
                      <img src={el[1].img} alt="flag" />
                      <p>{el[1].team}</p>
                  </div>

                  <button>
                    btn
                  </button>
                </div>
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
