import React, {Component} from 'react';
import uniqid from 'uniqid';
import './questions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Row, Col, Tab, ProgressBar, Button} from 'react-bootstrap'

import {connect} from 'react-redux';
import {
    changeShowDisplay,
    changeTechnology,
    nextActiveQuestion,
    prewActiveQuestion,
    changeBtnDisabled
} from '../../store/actions';


class Questions extends Component {

    selectedAnswer; //выбранный ответ
    lastSelectedAnswer; //послей занесённый в стор ответ. используется для удаления значения, при нажатии кнопки Назад

    render() {
        const c = console.log;


        const qtQuestions = this.props.questions.length;
        const numberOfQuestion = this.props.activeQuestion;
        const questionText = this.props.questions[numberOfQuestion - 1].question_text;
        const answer1 = this.props.questions[numberOfQuestion - 1].answers[0];
        const answer2 = this.props.questions[numberOfQuestion - 1].answers[1];
        const answer3 = this.props.questions[numberOfQuestion - 1].answers[2];
        const nextButtonDisable = this.props.buttonsDisabled.next; //возьмут из стейта, блокировать ли кнопки переключения вопросов
        const prewButtonDisable = this.props.buttonsDisabled.prew; //возьмут из стейта, блокировать ли кнопки переключения вопросов
        const progress = Math.trunc((((numberOfQuestion-1) / qtQuestions) * 100));

        const makeStyleSelectedAnswer = (answer) => {
            const style = {
                zIndex: '2',
                color: '#fff',
                backgroundColor: '#007bff',
                borderColor: '#007bff',
            };

            return this.selectedAnswer && this.selectedAnswer.numberOfAnswer === answer.numberOfAnswer ? style : null
        };

        //выбор ответа
        const doSelectAnswer = (answer) => {
            this.props.changeBtnDisabled('next', false);
            this.selectedAnswer = answer;
        };

        const changeTechonology = (answer, thisIncrement) => {
            const nameTechnology = answer.nameTechnology;
            const oldValue = this.props.technology[nameTechnology];
            const newValue = thisIncrement ? oldValue + answer.price : oldValue - answer.price;

            this.props.changeTechnology(
                nameTechnology,
                newValue
            );
        };

        const nextQuestion = (answer) => {
            changeTechonology(answer, true);
            this.lastSelectedAnswer=answer;
            this.selectedAnswer=null;
            //переключаем на следующий вопрос и блокируем кнопку
            if (numberOfQuestion < qtQuestions) {
                this.props.changeBtnDisabled('next', true);
                this.props.nextActiveQuestion();
            }
            //смена экрана по окончании теста. кнопка Вперёд меняет функционал на Смену дисплея
            if (numberOfQuestion >= qtQuestions) this.props.changeShowDisplay('result');
        };

        const prewQuestion = (answer) => {
            this.props.prewActiveQuestion();
            changeTechonology(answer, false);
        };

        return (
            <div className='questions'>
                <Col sm={8} className="d-flex justify-content-center vh-100 flex-column questions--content">

                    <h2>Вопрос №{numberOfQuestion} из {qtQuestions}</h2>

                    <p key={uniqid()}>
                        {questionText}
                    </p>

                    <ProgressBar now={progress} className='questions--progress-bar mb-1'/>

                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#">
                        <Row>
                            <Col sm={12} className=''>
                                <ListGroup>
                                    <ListGroup.Item action
                                                    key={uniqid()}
                                                    style={makeStyleSelectedAnswer(answer1)}
                                                    onClick={() => doSelectAnswer(answer1)}>
                                        {answer1.text}
                                    </ListGroup.Item>
                                    <ListGroup.Item action
                                                    key={uniqid()}
                                                    style={makeStyleSelectedAnswer(answer2)}
                                                    onClick={() => doSelectAnswer(answer2)}>
                                        {answer2.text}
                                    </ListGroup.Item>
                                    <ListGroup.Item action
                                                    key={uniqid()}
                                                    style={makeStyleSelectedAnswer(answer3)}
                                                    onClick={() => doSelectAnswer(answer3)}>
                                        {answer3.text}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Tab.Container>

                    <div className="questions--buttons mt-2 d-flex justify-content-around align-content-center">
                        <Button variant="primary w-25" id='btnPrew'
                                // className={numberOfQuestion === 1 ? 'hide' : ''}
                                disabled={numberOfQuestion === 1}
                                onClick={() => prewQuestion(this.lastSelectedAnswer)}>
                            Назад
                        </Button>
                        <Button variant="primary w-25" id='btnNext'
                                disabled={nextButtonDisable}
                                onClick={() => nextQuestion(this.selectedAnswer)}>
                            Вперёд
                        </Button>
                    </div>

                </Col>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        technology: state.technology,
        questions: state.questions,
        activeQuestion: state.activeQuestion,
        showedDisplay: state.showDisplay,
        buttonsDisabled: state.buttonsDisabled
    }
};
const mapDispatchToProps = {
    changeTechnology, nextActiveQuestion, prewActiveQuestion, changeShowDisplay, changeBtnDisabled
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);