import React, {Component} from 'react';

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            itemCurrentlyOnSale: 'A Hammer'
        };
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                        <button>Edit Sale Item</button>
                    </span>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;