import React, { Component } from 'react';
import * as $ from 'jquery'

class Daters extends Component {
    state = {
        daters: [],
        name: "",
        age: "",
        starsign: "",
        img: ""
    }

    componentDidMount() {
        this.getDaters()
    }

    getDaters () {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then( jsonedDaters => this.setState({daters: jsonedDaters}))
        .catch(error => console.log(error))

        //sets brief timeout to let above function run  then appends even profiles to right side of screen
        setTimeout(() => {
            $('.profile-container-right').append(
                $('.profile:nth-of-type(even)')
            )
        },500)
    }

    handleChange = (event) => {
        console.log(event.target.id, event.target.value)
        this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit =(event) => {
        event.preventDefault()
        const dater = {
          name: this.state.name,
          age: this.state.age,
          starsign: this.state.starsign,
          img: this.state.img
        }
        //if (this.props.notice) notice.id = this.props.notice.id
        this.props.handleSubmit(event, dater)
    }    

    render () {
        return (
            <>
            <h1>Hello Dating World</h1>
            <div className="profile-container">
                <div className="profile-container-left">
                    {this.state.daters.map( dater => {
            
                    return (
                        <div className="profile" key={dater.id}>
                            <h3>Name: {dater.name} </h3>
                            <img src={dater.img} alt={dater.name}/>
                            <h4>Starsign: {dater.starsign} </h4>
                            <h4>Age: {dater.age} </h4>
                            {dater.ltl
                            ? <h5> Loves to laugh and have a good time</h5>
                            : <h5> Hates laughing, does not like having a good time</h5>
                            }
                        </div>
                    )
                    
                    })}
                </div>
                <div className="profile-container-middle"></div>
                <div className="profile-container-right"></div> 
            </div>
            <div className="footer">
                <h2>Add a Date:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        placeholder="name">
                    </input>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.handleChange} 
                        placeholder="age">
                    </input>
                    <input 
                        type="text" 
                        id="starsign" 
                        name="starsign" 
                        value={this.state.gender} 
                        onChange={this.handleChange} 
                        placeholder="starsign">
                    </input>
                    <input 
                        type="text" 
                        id="img" 
                        name="img" 
                        value={this.state.img} 
                        onChange={this.handleChange} 
                        placeholder="image">
                    </input>
                    <input type="submit"></input>
                </form>
            </div>
            </>
        )
    }
}

export default Daters