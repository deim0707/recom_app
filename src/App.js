import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux';

import WelcomePage from "./components/welcome-page";
import Questions from "./components/questions";
import Result from "./components/result";

class App extends Component {

    render() {

        let showed;

        console.log(`показывается дисплей ${this.props.showedDisplay}`);

        //выбор отображаемого экрана
        switch (this.props.showedDisplay) {
            case 'welcome': {
                return <WelcomePage/>
            }
            case 'questions': {
                return <Questions/>
            }
            case 'result': {
                return <Result/>
            }
            default: {
                return <Questions/>
            }

        }

        return (
            <div className="App">
                {showed}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showedDisplay: state.showDisplay,
    }
};


export default connect(mapStateToProps) (App);