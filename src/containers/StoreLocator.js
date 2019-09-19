import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button'
import Map from './../components/Map';
import mapChooser from './../mapChooser';

class StoreLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMap: 'none.png'
        }
        this.shops = [{
            'location': "Portland",
            'address': "123 Portland DR"
        },
        {
            'location': "Astoria",
            'address': "123 Portland DR"
        },
        {
            'location': "",
            'address': "123 Portland DR"
        }
        ];
        this.chooseMap = this.chooseMap.bind(this);
    }
    chooseMap(e) {
        this.setState({ currentMap: mapChooser(e.target.value) });
    }
    render() {
        let storeButton = this.shops.map((shop, id) => {
            return (<Button handleClick={this.chooseMap} key={id} location={shop.location} />)
        });
        return (
            <div>
                <Header />
                <div>
                    {storeButton}
                </div>
                <Map imagename={this.state.currentMap} location={this.props.location} />

            </div>


        );
    }
}

export default StoreLocator;