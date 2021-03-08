import React from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import axios from "axios"
import "../styles/leaderboard.css"
import AnswerAlert from "../components/AnswerAlert"
import { withStyles } from "@material-ui/core"
import Loader from "../styles/loader"
import store from "../store/leaderboard"
import "../glitch.css"
import Footer from "../components/Footer";

const useStyles = theme => ({
  root: {
    width: "100%",
  },
  main: {
    minHeight: "65vh",
  },
  wrap:{
    width:"97%",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    margin:"25px auto",
    maxWidth:"600px"
  },
  item:{
    width:"100%",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    fontWeight: "18px",
    height:"50px",
    borderRadius:"50px",
    backgroundColor: "rgba(7,7,125, 0.25)",
    backdropFilter: "blur(3px)",
    border:"1px solid rgb(70, 70, 255)",
  },
  pos:{
    paddingRight:"10px",
    width:"35px"
  },
  name:{
    color:"#fff",
    marginLeft:"5px",
    width:"80%"
  },
  score:{
    float: "right",
    paddingRight:"8px",
  },
  pic:{
    width:"50px",
    height:"50px",
    borderRadius:"50px",
    backgroundPosition:"center",
    backgroundSize:"cover"
  }
})

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerRanks: [],
      status: 0,
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    var self = this
    // this.setState({
    //   playerRanks: store.getState()
    // })
    // this.fetchData()
    // store.subscribe(() => {
    //   self.setState({
    //     playerRanks: store.getState()
    //   })
    // })
    axios
      .get(`${process.env.GATSBY_API_URL}quiz/leaderboard?format=json`)
      .then(response => {
        if (response.data.standings.length != 0 || response.data.status == 203 ) {
          self.setState({
          playerRanks: response.data.standings,
          status: 203
        })
        } else {
          self.setState({
            playerRanks: [],
          })
        }
      })
      .catch(error => {
        AnswerAlert(-1)
      })
  }

  FirstPosition({ name, image, score }) {
    return (
      <div className="one item">
        <div className="pos">1</div>
        <div
          className="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="name">{name}</div>
        <div className="score">{score}</div>
      </div>
    )
  }

  SecondPosition({ name, image, score }) {
    return (
      <div className="two item">
        <div className="pos">2</div>
        <div
          className="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="name">{name}</div>
        <div className="score">{score}</div>
      </div>
    )
  }

  ThirdPosition({ name, image, score }) {
    return (
      <div className="three item">
        <div className="pos">3</div>
        <div
          className="pic"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="name">{name}</div>
        <div className="score">{score}</div>
      </div>
    )
  }

  fetchData() {
    if(store.getState().length != 0) return;
    const { classes } = this.props
    var self = this
    axios
      .get(`${process.env.GATSBY_API_URL}quiz/leaderboard?format=json`)
      .then(response => {
        if (response.data.standings.length != 0) {
          store.dispatch({ type: "INCREMENT", data: response.data.standings })
        } else {
          self.setState({
            playerRanks: [],
          })
        }
      })
      .catch(error => {
        AnswerAlert(-1)
      })
  }
  
  render() {
    const { classes } = this.props
    const list = this.state.playerRanks
    const mystyle = {
      color: "black",
   };

    if (list.length !== 0 || this.state.status == 203) {
      return (
        <DashboardLayout>
          <div className={classes.main}>
          <div className="center" style={{fontFamily: "'Audiowide', cursive",}}>
            <div style={{fontSize:"28px", textAlign:"center", margin:"30px auto"}} className="glitch" data-text="LEADERBOARD">LEADERBOARD</div>
            <div style={{fontSize:"18px", textAlign:"center", margin:"30px auto", marginBottom:"0px"}} className="glitch" data-text="TUNE IN TO THE FRESHER'S ORIENTATION ON 24TH AT 4PM TO KNOW WHO BREACHED THE FORT">TUNE IN TO THE FRESHER'S ORIENTATION ON 24TH AT 4PM TO KNOW WHO BREACHED THE FORT</div>
            
            {/* <br/> */}
          { list.length >= 3 ? 
            <div>
            <div style={{fontSize:"18px", textAlign:"center", margin:"30px auto", marginTop:"10px"}} className="glitch" data-text="SCORE CALCULATION DISABLED">SCORE CALCULATION DISABLED</div>
            <div className="top3">
              {
                <this.SecondPosition
                  name={list[1].name}
                  image={list[1].image}
                  score={list[1].score}
                  // score={0}
                />
              }
              {
                <this.FirstPosition
                  name={list[0].name}
                  image={list[0].image}
                  score={list[0].score}
                  // score={0}
                />
              }
              {
                <this.ThirdPosition
                  name={list[2].name}
                  image={list[2].image}
                  score={list[2].score}
                  // score={0}
                />
              }
            </div>
            <div >
              {list.map((v, index) => {
                return (
                  <div key={v.rank}>
                    {v.rank > 3 ? (
                      <div className={classes.wrap}>
                      <div className={classes.pos} style={{color: "white"}}>{v.rank}</div>
                      <div className={classes.item}>
                        
                        <div
                          className={classes.pic}
                          style={{ backgroundImage: "url(" + v.image + ")" }}
                        ></div>
                        <div className={classes.name}>{v.name}</div>
                       <div className="score" style={{color: "white"}}>{v.score}</div> 
                        <div className={classes.score} style={{color: "white"}}>{v.score}</div>
                      </div>
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
            </div>
          : <div> </div>}
          </div>
          </div>
          <Footer />
          
        </DashboardLayout>
      )
    } else
      return (
        <DashboardLayout>
          <Loader />
        </DashboardLayout>
      )
  }
}

export default withStyles(useStyles)(LeaderBoard)
