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
                        БЭМ:    &nbsp;
                        <span>
                            {this.props.technology.bem}
                        </span>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Адаптив:  &nbsp;
                        <span>
                            {this.props.technology.adaptive}
                        </span>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Что-то ещё:  &nbsp;
                        <span>
                            {this.props.technology.struct}
                        </span>
                    </ListGroup.Item>
                </ListGroup>

                <Button variant="success" onClick={this.startTestAgain}>Пройти тест заново</Button>
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