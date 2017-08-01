import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <Link to="/today">
                    <span>TODAY</span>
                </Link>
                <Link to="/mine">
                    <span>MINE</span>
                </Link>
                <Link to="/history">
                    <span className="footer-classify-last">HISTORY</span>
                </Link>
            </div>
        )
    }
}
import './footer.less'