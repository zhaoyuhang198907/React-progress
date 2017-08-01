import React, {Component} from 'react'
import {ajax} from '../../util/util'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/index'
@connect(state => ({
    motionContext:state.filterHistoryList.motionContext,
    lists: state.sportHistory.lists.filter(item=>{
        if(state.filterHistoryList.motionContext==='All'){
            return true;
        }
        return item.motion===state.filterList.motionContext
    }),
    ajaxCompleted:state.ajaxCompleted.isAjax
}), {...actions})
export default class history extends Component {
    componentDidMount() {
        if(!this.props.ajaxCompleted){
            console.log('ajax');
            ajax({
                url: '/api/lists',
                success:  (result)=>{
                    if (result) {
                        result = JSON.parse(result);
                    }
                    this.props.getSportHistory(result);
                    this.props.setAjaxCompleted();
                }
            })
        }
        this.props.filterHistoryList('All');
    }
    handleChangeSelect=(e)=>{
        let motionContext=e.target.innerText;
        this.props.filterHistoryList(motionContext);
        let adjoinBtns=e.target.parentNode.childNodes;
        adjoinBtns.forEach(item=>{
            item.className='history-btn';
        });
        e.target.className='history-btn history-btn-selected';
    };
    render() {
        return (
                <div className="history">
                    <div className="history-motion">
                        <button onClick={this.handleChangeSelect} className="history-btn">Running</button>
                        <button onClick={this.handleChangeSelect} className="history-btn">Jumping</button>
                        <button onClick={this.handleChangeSelect} className="history-btn">Swimming</button>
                        <button onClick={this.handleChangeSelect} className="history-btn">Climbing</button>
                        <button onClick={this.handleChangeSelect} className="history-btn history-btn-selected">All</button>
                        <button onClick={this.handleChangeSelect} className="history-btn">Other</button>
                    </div>
                    <ul className="history-lists">
                        {this.props.lists.map((item,index)=>(
                            <li key={index} className="history-list">
                                <span className="history-list-motion">{item.motion}</span>
                                <span className="history-list-date">{item.date}</span>
                                <span className="history-list-time">
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
import './history.less'
