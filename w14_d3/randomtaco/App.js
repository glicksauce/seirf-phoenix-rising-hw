//https://git.generalassemb.ly/ira/SEIR-FLEX-123/blob/master/unit_3/w14d3/student_labs/react_taco.md
//import TacoList from "./TacoList"


class TacoShell extends React.Component{
    render (){
        return(
            <div onClick={() => this.props.shellUpdate()}>
                <h2><span>Shell: </span>{this.props.shellName}</h2>
                <p>{this.props.shellRecipe}</p>
            </div>
        )
    }
}





class TacoList extends React.Component {

     render () {
      console.log("taco props is:", this.props)
      if (this.props.shellName) {
          return (
            <div>
            <h4 onClick={() => this.props.handleSubmit()}>
              Another Random Taco
            </h4>
            <TacoShell shellUpdate={this.props.shellUpdate} shellName={this.props.shellName} shellRecipe={this.props.shellRecipe}/>
            <h2><span>Mixin: </span>{this.props.mixinName}</h2>
            <p>{this.props.mixinRecipe}</p>
            <h2><span>Condiment: </span>{this.props.condimentName}</h2>
            <p>{this.props.condimentRecipe}</p>
          </div>
          )
      } else {
        return  (
            <div>
                <h4 onClick={() => this.props.handleSubmit()}>
                Random Taco
                </h4>
            </div>
        )
    }
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


  updateShellOnly = () => {
    console.log("clicked shell update only")
    fetch("http://taco-randomizer.herokuapp.com/random/?full-tack=true")
    .then(response => {return response.json()
    }).then(json => 
    this.setState
        (prevState => 
            ({
                ...prevState,
                taco: {
                    ...prevState.taco,
                    shell: 
                        {
                            ...prevState.name,
                            name: json.shell.name,
                            ...prevState.recipe,
                            recipe: json.shell.recipe
                        }
                    }
                    }),
        err => console.log(err))
    )
  }


  render() {
    console.log("state is", this.state);
    if (this.state.taco){
        return (
            <div className="App">
                <h1>Random Taco!</h1>
                <TacoList 
                    handleSubmit={this.makeApiCall}
                    shellUpdate={this.updateShellOnly}
                    shellName={this.state.taco.shell.name}
                    mixinName={this.state.taco.mixin.name}
                    condimentName={this.state.taco.condiment.name}
                    shellRecipe={this.state.taco.shell.recipe}
                    mixinRecipe={this.state.taco.mixin.recipe}
                    condimentRecipe={this.state.taco.condiment.recipe}
                />
            </div>
        )
    } else {
        return (
            <div className="App">
                <h1>Random Taco!</h1>
                    <TacoList 
                        handleSubmit={this.makeApiCall}
                    />
            </div>
        );
    }
    }
}

ReactDOM.render(<App />, document.querySelector("main"));