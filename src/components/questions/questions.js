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
    selectedAnswer;

    render() {
        const c = console.log;


        let qtQuestions = this.props.questions.length;
        let numberOfQuestion = this.props.activeQuestion;
        let questionText = this.props.questions[numberOfQuestion - 1].question_text;
        let answer1 = this.props.questions[numberOfQuestion - 1].answers[0];
        let answer2 = this.props.questions[numberOfQuestion - 1].answers[1];
        let answer3 = this.props.questions[numberOfQuestion - 1].answers[2];
        let nextButtonDisable = this.props.buttonsDisabled.next; //возьмут из стейта, блокировать ли кнопки переключения вопросов
        let prewButtonDisable = this.props.buttonsDisabled.prew; //возьмут из стейта, блокировать ли кнопки переключения вопросов
        let progress = Math.trunc(((numberOfQuestion / qtQuestions) * 100));


        const nextQuestion = (answer) => {
            //если впереди ещё есть вопросы, то кнопка Вперёд меняет значение ActiveQuestion
            let nameTechnology = answer.nameTechnology;
            let price = answer.price;
            let oldValue = this.props.technology[nameTechnology];
            this.props.changeTechnology(
                nameTechnology,
                oldValue + price
            );
            
            if (numberOfQuestion < qtQuestions) {
                this.props.changeBtnDisabled('next', true);
                this.props.nextActiveQuestion();
            }

            //смена экрана по окончании теста. кнопка Вперёд меняет функционал на Смену дисплея
            if (numberOfQuestion >= qtQuestions) this.props.changeShowDisplay('result');
        };


        //выбор ответа, разблокировка кнопки
        const doSelectAnswer = (answer) => {
            this.props.changeBtnDisabled('next', false);
            this.selectedAnswer = answer;
        };
        c(this.selectedAnswer);

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
                                    <ListGroup.Item action href="#link1"
                                                    key={uniqid()}
                                                    onClick={() => doSelectAnswer(answer1)}>
                                        {answer1.text}
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2"
                                                    key={uniqid()}
                                                    onClick={() => doSelectAnswer(answer2)}>
                                        {answer2.text}
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3"
                                                    key={uniqid()}
                                                    onClick={() => doSelectAnswer(answer3)}>
                                        {answer3.text}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Tab.Container>

                    <div className="questions--buttons mt-2 d-flex justify-content-around align-content-center">
                        <Button variant="primary w-25" id='btnPrew'
                                className={numberOfQuestion === 1 ? 'hide' : ''}
                                disabled={prewButtonDisable}
                                onClick={this.props.prewActiveQuestion}>
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