import React, {Component} from 'react'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    <h1 className="logo-title">WETee</h1>
                    <p className="logo-label">TAG</p>
                </div>
                <div>
                    <span className="iconfont icon-list"></span>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
import './Header.less'