import React, { Component } from 'react';
import Daters from './components/Hello.js'

class App extends Component {

  handleAdd = (event, formInputs) =>{
    event.preventDefault()
    fetch('http://localhost:3000/users',{
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdDater => console.log(createdDater.json()))
    // .then(jsonedNotice => {
    //   this.setState({
    //     notices: [jsonedNotice, ...this.state.notices]
    //   })
    // })
    .catch(error => console.log(error))
    }    


  render(){
    return (
      <div className="App">
        <Daters 
          handleSubmit = {this.handleAdd}  
        />

      </div>
    )
  }
}

export default App;
