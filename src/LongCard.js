import React from "react";
import { Component } from "react";
import './LongCard.css';

class LongCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-item">
                <img className="topic-img" src={this.props.icon} alt="music_icon" />
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div className="reward-div">
                    <img src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png" height="24px" width="24px" />
                    <p>100 credits</p>
                </div>
                <hr className="style-hr" align="center" />
            </div>
        )
    }
}

export default LongCard