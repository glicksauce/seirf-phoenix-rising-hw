import React, { Component } from 'react';

class Daters extends Component {
    state = {
        daters: []
    }

    componentDidMount() {
        this.getDaters()
    }

    getDaters () {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then( jsonedDaters => this.setState({daters: jsonedDaters}))
        .catch(error => console.log(error))
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
            <div className="footer">form goes here</div>
            </>
        )
    }
}

export default Daters