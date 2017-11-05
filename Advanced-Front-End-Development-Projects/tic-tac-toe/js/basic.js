
function ScoreBoard(props){
  return(
    <div className="score-result">
      <div className="participant-title"><p>{props.category}</p></div>
      <div className="participant-score"><p>{props.score}</p></div>
    </div>
  )
}
class Tile extends React.Component {
  render(){
   return(
     <div className="tile" onClick={this.props.renderSymbol}>
     </div>
   )}
}
class GameBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPlayer : "playerOne",
      playerOne:{symbol:"X",type:"Human"},
      playerTwo:{symbol:"O",type:"Computer"}
    }
    this.renderSymbol = this.renderSymbol.bind(this)
  }
  
  startGame(){
    
  }
  
  switchPlayer(){
    const currentPlayer = this.state.currentPlayer;
    const nextPlayer = currentPlayer==="playerOne"?"playerTwo":"playerOne";
    this.setState(()=>({currentPlayer:nextPlayer}))
  }
  
  renderSymbol(e){
    const currentPlayer = this.state.currentPlayer;
    e.target.innerText=this.state[currentPlayer].symbol;
    this.switchPlayer()
  }
  
  render(){
    return(
      <section id="board">
        <div className="row-tile">
          <Tile renderSymbol={this.renderSymbol} />
          <Tile renderSymbol={this.renderSymbol} />
          <Tile renderSymbol={this.renderSymbol}/>
        </div>
        <div className="row-tile">
          <Tile renderSymbol={this.renderSymbol}/>
          <Tile renderSymbol={this.renderSymbol}/>
          <Tile renderSymbol={this.renderSymbol}/>
        </div>
        <div className="row-tile">
          <Tile renderSymbol={this.renderSymbol}/>
          <Tile renderSymbol={this.renderSymbol}/>
          <Tile renderSymbol={this.renderSymbol}/>
        </div>
      </section>
    )
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameNumber:1
    }
  }
  render(){
    return(
      <div>
        <main>
          <h1>Tic Tac Toe</h1>
          <section id="game-area">
            <ScoreBoard category={"Player"} score={0}/>
            <GameBoard/>
            <ScoreBoard category={"Computer"} score={0}/>
          </section>
        </main>
        <div className="question-area">
          { this.state.gameNumber===0 &&
            <div className="currentQuestion">
              <h3 className="question">How many games do you wish to play:</h3>
              <input className="answer" name="answer"></input>
            </div>
           }
        </div>  
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById("app"))