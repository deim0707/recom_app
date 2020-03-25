import React, { Component } from 'react';
import './welcomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Jumbotron, Button} from  'react-bootstrap'
import {connect} from 'react-redux';
import {changeShowDisplay} from '../../store/actions';


class WelcomePage extends Component {

    changeQuestion=()=> {
        this.props.changeShowDisplay('questions');
        console.log(`с приветсивия перешли на ${this.props.showedDisplay}`);
    };

    render(){
        return (
            <div className='welcomePage'>
                <Jumbotron className='welcomePage--content d-flex justify-content-center flex-column vh-100'>
                    <h1>Добро пожаловать!</h1>
                    <p>
                        Перед вами рекомендательная система, которая поможет определиться в выборе некоторых технологий используемых для создания адаптивного веб-сайта. <br/>
                        Впереди вас ждёт ряд вопросов, отвечая на которые вы определяете выбор технологий.<br/>
                        Нажав кнопку "Вперёд" вы начнёте тестирование.<br/>
                        Нажав на кнопку "Назад" вернётесь к предыдущему вопросу. <br/>
                    </p>
                    <p className='d-flex justify-content-start'>
                        <Button variant="success w-25" onClick={this.changeQuestion}>Старт</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        showedDisplay: state.showDisplay,

    }
};
const mapDispatchToProps = {
    changeShowDisplay
};

export default connect(mapStateToProps, mapDispatchToProps) (WelcomePage);