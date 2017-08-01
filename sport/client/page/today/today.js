import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/index'
import Header from '../../components/Header/Header'
import {ajax} from '../../util/util'
let interval=null;
@connect(state => ({
    time: state.setSportTime.time,
    types: state.motionTypes.types,
    info: state.todayInfo.info
}), {...actions})
export default class today extends Component {
    constructor() {
        super();
        this.state = {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1802133917,621048301&fm=117&gp=0.jpg',
            isStart: false,
            isSelected: false,
            motion: '',
            isClick: false,
            isWarning: false
        }
    };
    componentWillMount() {
        console.log(this.props);
        this.setState(this.props.info);
    }

    start = (e) => {
        if (this.state.isStart) {
            this.setState(preState => ({
                isStart: !this.state.isStart
            }));
            clearInterval(interval);
            let time = this.props.time;
            let date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
            let motion = this.state.motion;
            this.props.addSportToday({motion, time, date});
            ajax({
                url:'/api/lists',
                type:'POST',
                data:{time, date, motion},
                dataType:'json',
                success: (result)=> {
                    this.props.addSportHistory({time, date, motion});
                }
            });
            this.props.clearTime();
            setTimeout(() => {
                this.props.history.push('/mine');
            }, 100)
        } else if (!this.state.isStart && this.state.isSelected) {
            interval = setInterval(() => {
                this.props.sportTime();
            }, 100);
            this.setState(preState => ({
                isStart: !this.state.isStart
            }));
        } else {
            this.setState({isWarning: true});
            return;
        }
    };

    componentDidUpdate() {
        this.props.saveTodayInfo(this.state);
    }

    handleClick = () => {
        this.setState({isClick: !this.state.isClick});
    };
    handleChange = (e) => {
        this.setState({isClick: !this.state.isClick, motion: e.target.innerText, isSelected: true});
    };

    render() {
        return (
            <div className="today">
                <Header/>
                <div className="today-top">
                    <div className="top-left">
                        <img src={this.state.src} alt="头像"/>
                    </div>
                    <div className="top-right">
                        <p className="username">username</p>
                        <p className="sign-in">sign in for <span>85</span> Days</p>
                    </div>
                </div>
                <div className="today-content">
                    <div className="motion-type">
                        {this.state.isWarning && !this.state.isSelected ?
                            <p className="motion-warning">You Should Choose One Motion Type!</p> : null}
                        <span className="today-content-desc">Motion Type </span>
                        <span className="today-content-option"
                              onClick={this.handleClick}>{this.state.isSelected ? this.state.motion : 'Select'}
                            {!this.state.isSelected ? <span className="down-arrow"></span> : null}
                        </span>
                        {this.state.isClick ? (<ul className="motion-lists">
                            {this.props.types.map((item, index) => (
                                <li onClick={this.handleChange} key={index} className="motion-list">{item}</li>
                            ))}
                        </ul>) : null}
                    </div>
                    <p><span
                        className="today-content-desc">Date </span><span>{new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()}</span>
                    </p>
                    <p>
                        <span className="today-content-desc">Timer </span>
                        <span>{parseInt(this.props.time / 36000) >= 10 ? parseInt(this.props.time / 36000) : '0' + parseInt(this.props.time / 36000)}</span>:
                        <span>{parseInt(this.props.time / 600) % 60 >= 10 ? parseInt(this.props.time / 600) % 60 : '0' + parseInt(this.props.time / 600) % 60}</span>:
                        <span>{parseInt(this.props.time / 10) % 60 >= 10 ? parseInt(this.props.time / 10) % 60 : '0' + parseInt(this.props.time / 10) % 60}</span>:
                        <span>{this.props.time % 10 + '0'}</span>
                    </p>
                    <p onClick={this.start}>{this.state.isStart ? '+Workout' : 'WETee Start'}</p>
                </div>
            </div>
        )
    }
}
import './today.less'