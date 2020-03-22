//https://git.generalassemb.ly/ira/SEIR-FLEX-123/blob/master/unit_3/w14d3/student_labs/react_taco.md

class TacoList extends React.Component {

 
    render () {
      console.log("taco props is:", this.props)
      return  (
        <div>
          <h1>tacos!</h1>
          <h1 onClick={() => this.props.handleSubmit()}>
            click me
          </h1>
          <h2>{this.props.shellName}</h2>
          <h2>{this.props.mixinName}</h2>
          <h2>{this.props.condimentName}</h2>
          {/* <h1>Title: {this.props.movie.Title}</h1>
          <h2>Year: {this.props.movie.Year}</h2>
          <img src={this.props.movie.Poster} alt={this.props.movie.Title}/>
          <h3>Genre: {this.props.movie.Genre}</h3>
          <h4>Plot: {this.props.movie.Plot}</h4> */}
        </div>
      )
    }
  }

class App extends React.Component {
    state = {
      URL: "http://taco-randomizer.herokuapp.com/random/?full-tack=true"
    }

  makeApiCall = () => {
    console.log("Ap - makeApiCall ");
    this.setState(
      {
        fetchURL: this.state.URL,
      },
      () => {
      fetch("http://taco-randomizer.herokuapp.com/random/?full-tack=true")  
          .then(response => {return response.json()
        }).then(json => this.setState({
            taco: json
        }),
            err => console.log(err))
      })
  };

  render() {
    console.log("state is", this.state);
    if (this.state.taco){
        return (
            <div className="App">
                <h1>Random Taco Is:</h1>
                <TacoList 
                    handleSubmit={this.makeApiCall}
                    shellName={this.state.taco.shell.name}
                    mixinName={this.state.taco.mixin.name}
                    condimentName={this.state.taco.condiment.name}
                />
            </div>
        )
    } else {
        return (
            <div className="App">>
                <h1>Random Taco:</h1>
                    <TacoList 
                        handleSubmit={this.makeApiCall}
                    />
            </div>
        );
    }
    }
}

ReactDOM.render(<App />, document.querySelector("main"));