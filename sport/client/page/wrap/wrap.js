import React, {Component} from 'react'

import Footer from '../../components/Footer/Footer'

export default class wrap extends Component {
    constructor() {
        super();
        this.state = {time: 0}
    }

    tick = () => {
        this.setState((preState) => ({
            time: preState.time + 1
        }))
    };

    render() {
        return (
            <div className="wrap">

                {this.props.children}
                <Footer/>
            </div>
        )
    }
}