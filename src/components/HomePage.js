import React, {Component} from 'react'

class Homepage extends Component {

constructor() {
super();

this.state = {

itemCurrentlyOnSale: 'A Hammer'

};
}


render() {
return(
    <div>
<div>My Hardware Store</div>

<div>Currently on Sale:{this.state.itemCurrentlyOnSale}!</div>

</div>

)
}
}

export default Homepage;