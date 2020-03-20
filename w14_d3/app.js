//https://git.generalassemb.ly/ira/SEIR-FLEX-123/tree/master/unit_3/w14d2/student_labs

const receipts = [
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },  
  {
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }
]


class Receipt extends React.Component{
  state={
    paid: this.props.receipt.paid
  }
  receiptPaid = () =>{
    console.log("clicked")
    this.setState({paid: !this.state.paid})
  }
 render() {
     console.log(this.props.receipt.paid)
     let isPaid = this.state.paid
      if (!isPaid) {
        return (
            <div className='receipt' onClick={this.receiptPaid}>
                    <h2>{this.props.receipt.person}</h2>
                    <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                    <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                    <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                    <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                    <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                    <h5><span>Cost: </span>${this.props.receipt.order.cost}</h5>
            </div>
        )
        } else {
          return ('')
        }
     
 }
}

class App extends React.Component{
    state = {
        receipts: receipts,
        paid: true
    }

    render(){
        return (
                
                <div className='container'>
                  <h1 className='truck'>Korilla</h1>
                  {this.state.receipts.map(receipt =>  <Receipt  receipt={receipt} />)}
                </div>
            
        )
    }
}

ReactDOM.render(<App />, document.querySelector("main"));