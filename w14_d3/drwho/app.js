//https://git.generalassemb.ly/ira/SEIR-FLEX-123/blob/master/unit_3/w14d3/student_labs/dr_who_police_box.md
//my codesandbox here: https://codesandbox.io/s/dr-who-gzvvr

class DivThreeAlt extends React.Component {
  
    render() {
      console.log('DivThree ', this.props.name)
      return (
        <div>
          <h3 onClick={() => this.props.clickFunctionAlt(this.props.name)}>{this.props.nameAlt}</h3>
        </div>
      )
    }
  }

class DivThree extends React.Component {
  
    render() {
      console.log('DivThree ', this.props.name)
      return (
        <div>
          <h3 
            onClick={() => this.props.clickFunction(this.props.name)}
          >
          {this.props.name}
          </h3>
        </div>
      )
    }
  }

class DivTwo extends React.Component {
  
    render() {
      console.log('div two ', this.props.name)
      return (
        <div>
          <DivThree name={this.props.tardis.name} clickFunction={this.props.clickFunction}/>
          <DivThreeAlt nameAlt={this.props.tardisAlt.name} clickFunctionAlt={this.props.clickFunctionAlt}/>
        </div>
      )
    }
  }

class DivOne extends React.Component {
    //console.log({this.props.name})
    render() {
      console.log('div one ', this.props)
      return (
        <div>
          <DivTwo 
            tardis={this.props.tardis} 
            clickFunction={this.props.clickFunction}
            tardisAlt={this.props.tardisAlt}
            clickFunctionAlt={this.props.clickFunctionAlt}
          />
        </div>
      )
    }
}


class App extends React.Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    },
    tardisAlt:{
      name: "Time and Relative Dimension in Space",
      caps: false,
    }
  };

  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      });
    }
  };

  changeItAlt = (text) =>{
    let nameGet = this.state.tardisAlt.name;
    if (this.state.tardisAlt.caps) {
      this.setState({
        tardisAlt: {
          name: nameGet.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardisAlt: {
          name: nameGet.toUpperCase(),
          caps: true
        }
      });
    }
  }

  render() {
    return (
      <div>
        <DivOne 
          tardis={this.state.tardis} 
          clickFunction={this.changeIt}
          tardisAlt={this.state.tardisAlt} 
          clickFunctionAlt={this.changeItAlt}
      />

      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector("main"));