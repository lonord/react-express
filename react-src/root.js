/**
 * Created by lonord on 2017/4/1.
 */
import React, { Component } from 'react'

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'loading...'
        }
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '/api/info', true);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                let data = JSON.parse(xhr.responseText);
                this.setState({
                    msg: data.msg
                });
            }
        }.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Hello World!</h3>
                <div>{this.state.msg}</div>
            </div>
        )
    }
}