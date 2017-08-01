import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/index'
@connect(state => ({
    motionContext:state.filterList.motionContext,
    contents: state.sportToday.contents.filter(item=>{
        if(state.filterList.motionContext==='All'){
            return true;
        }
        return item.motion===state.filterList.motionContext
    })
}), {...actions})
export default class mine extends Component {
    componentWillMount() {
        if (this.props.contents.length > 0) {
            window.localStorage.setItem('todayContents', JSON.stringify(this.props.contents));
            // if (this.props.contents[0].date !== new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()) {// 如果是当天或者没有数据 就清空数据
            //     window.localStorage.clear();
            // }
        } else {
            let sportTodayLists = JSON.parse(window.localStorage.getItem('todayContents'));
            this.props.getSportToday(sportTodayLists);
        }
        this.props.filterList('All');
    }
    handleChangeSelect=(e)=>{
        let motionContext=e.target.innerText;
        this.props.filterList(motionContext);
        let adjoinBtns=e.target.parentNode.childNodes;
        adjoinBtns.forEach(item=>{
            item.className='mine-btn';
        });
        e.target.className='mine-btn mine-btn-selected';
    };
    render() {
        return (
            <div className="mine">
                <div className="mine-motion">
                    <button onClick={this.handleChangeSelect} className="mine-btn">Running</button>
                    <button onClick={this.handleChangeSelect} className="mine-btn">Jumping</button>
                    <button onClick={this.handleChangeSelect} className="mine-btn">Swimming</button>
                    <button onClick={this.handleChangeSelect} className="mine-btn">Climbing</button>
                    <button onClick={this.handleChangeSelect} className="mine-btn mine-btn-selected">All</button>
                    <button onClick={this.handleChangeSelect} className="mine-btn">Other</button>
                </div>
                <ul className="mine-lists">
                    {this.props.contents.map((item, index) => (
                        <li key={index} className="mine-list">
                            <span className="mine-list-motion">{item.motion}</span>
                            <span className="mine-list-date">{item.date}</span>
                            <span className="mine-list-time">
                                <i>{parseInt(item.time / 36000) >= 10 ? parseInt(item.time / 36000) : '0' + parseInt(item.time / 36000)}</i>:
                                <i>{parseInt(item.time / 600) % 60 >= 10 ? parseInt(item.time / 600) % 60 : '0' + parseInt(item.time / 600) % 60}</i>:
                                <i>{parseInt(item.time / 10) % 60 >= 10 ? parseInt(item.time / 10) % 60 : '0' + parseInt(item.time / 10) % 60}</i>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
import './mine.less'