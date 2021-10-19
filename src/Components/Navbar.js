function Navbar(props) {
  const { currentScore, bestScore } = props.scores;
  return (
    <nav>
      <div className="left-div"></div>
      <div className="right-div">
        <span>Current Score: {currentScore} </span>
        <span>Best Score: {bestScore}</span>
      </div>
    </nav>
  );
}

export default Navbar;
