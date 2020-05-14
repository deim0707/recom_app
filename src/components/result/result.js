import React, { Component } from 'react';
import './result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {ListGroup, Button} from  'react-bootstrap'
import {connect} from 'react-redux';
import {changeShowDisplay, changeActiveQuestion} from '../../store/actions';



class Result extends Component {
    startTestAgain= () => {
        this.props.changeActiveQuestion(1);
        this.props.changeShowDisplay('questions');
        console.log(`с результатов перешли на ${this.props.showedDisplay}`);
    };


    render(){

        return (
            <div className='result col-8'>
                <h3>Ваши результаты</h3>
                <p className='mt-2'>
                    Ниже представлена информация с результатами прохождения теста. <br/>
                    Чем больше число напротив технологии, тем больше она вам подходит.
                </p>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        PX:    &nbsp;
                        <span>
                            {this.props.technology.px}
                        </span>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        EM:  &nbsp;
                        <span>
                            {this.props.technology.em}
                        </span>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        REM:  &nbsp;
                        <span>
                            {this.props.technology.rem}
                        </span>
                    </ListGroup.Item>
                </ListGroup>

                {/*<Button variant="success" onClick={this.startTestAgain}>Пройти тест заново</Button>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        technology: state.technology,
        showedDisplay: state.showDisplay,
    }
};
const mapDispatchToProps = {
    changeShowDisplay, changeActiveQuestion
};

export default connect(mapStateToProps, mapDispatchToProps) (Result);