function Header() {
  return (
    <div>
      <header>
        <div>
          <img src="/cardMatch.png"></img>
          <img src="/buttonMatch.png"></img>
          <h1>Arrasta pra cima!</h1>
          <img
            id="arrow"
            style={{ height: "50px", width: "50px" }}
            src="/down-arrow.svg"
          ></img>
        </div>
      </header>
    </div>
  );
}

export default Header;
