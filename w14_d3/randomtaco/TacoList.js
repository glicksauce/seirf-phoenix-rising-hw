class TacoList extends React.Component {

 
    render () {
      console.log("taco props is:", this.props)
      if (this.props.shellName) {
          return (
            <div>
            <h4 onClick={() => this.props.handleSubmit()}>
              Another Random Taco
            </h4>
            <h2><span>Shell: </span>{this.props.shellName}</h2>
            <p>{this.props.shellRecipe}</p>
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

export default class TacoList {}