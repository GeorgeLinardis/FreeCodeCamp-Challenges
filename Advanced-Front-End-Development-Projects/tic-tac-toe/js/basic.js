
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
      currentGameNumber:0,
      totalGames:0,
      gameType:"",
      roundEnded:false,
      gameEnded:true,
      messageToUser:""
    }
    this.checkGameNumber=this.checkGameNumber.bind(this);
    this.startGame=this.startGame.bind(this);
  }
  startGame(e){
    e.preventDefault();
    this.setState(()=>({gameEnded:false}))
  }
  checkGameNumber(e){
    const enteredNumber = e.target.elements.enteredGames.value; 
    let newMessage=""; 
    e.preventDefault();
    if(enteredNumber>20){
      newMessage = "Don't you have anything else to do? 20 games max please!";
    }else if(!parseInt(enteredNumber)){
      console.log(typeof 
                  enteredNumber)
      newMessage = "Only numbers please!"
    }else {
      this.setState(()=>({totalGames:enteredNumber}))
    } 
    this.setState(()=>({messageToUser:newMessage}))
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
        <div className="questions-area">
          { this.state.totalGames===0 &&
            <div className="current-question">
              <form onSubmit={this.checkGameNumber}>
                <label className="question">How many games would you like to play?</label>
                <input type="text" name="enteredGames" className="answer"/>
              </form>
            </div>
           }
          { this.state.totalGames!==0 && this.state.gameEnded &&
            <div className="current-question game-type">
              <form onSubmit={this.startGame}>
                <label className="question">Type of game?</label>
                <input className="game-option" type="submit" value="Human Vs Computer" />
                <input className="game-option" type="submit" value="Human vs Human" />
              </form>
            </div>
           }
          { this.state.roundEnded &&
            <div className="current-question">
              <h4 className="question">Game 1</h4>
              <h4 className="ss">Player 1 turn</h4>
            </div>
           }
           { this.state.gameEnded &&
            <div className="current-question">
              <h1>result</h1>
            </div>
           }
          { this.state.messageToUser.length>0 && 
            <p className="user-message">{this.state.messageToUser}</p>
          }  
        </div> 
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById("app"))