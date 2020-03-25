import React, { Component } from 'react';
import uniqid from 'uniqid';
import './questions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {ListGroup, Row, Col, Tab, ProgressBar, Button} from  'react-bootstrap'

import {connect} from 'react-redux';
import {changeShowDisplay, changeTechnology, nextActiveQuestion, prewActiveQuestion} from '../../store/actions';



class Questions extends Component {



    render(){
        const c = console.log;

        // c(`bem: ${this.props.technology.bem}`);
        // this.props.changeTechnology('bem', 221);
        //ТУТ НАДО ПОМЕНЯТЬ ЗНАЧЕНИЕ В СТЕЙТЕ У ТЕХНОЛОГИЯХ. ПРИ ВЫБОРЕ ОПРЕДЕЛЁННОГО ОТВЕТА
        const nextQuestion = () => {
            this.props.nextActiveQuestion();
        };

        let qtQuestions = this.props.questions.length;
        let numberOfQuestion=this.props.activeQuestion;
        let questionText = this.props.questions[numberOfQuestion-1].question_text;
        let answer1=this.props.questions[numberOfQuestion-1].answer[0];
        let answer2=this.props.questions[numberOfQuestion-1].answer[1];
        let answer3=this.props.questions[numberOfQuestion-1].answer[2];
        let progress=Math.trunc(((numberOfQuestion/qtQuestions)*100));


        //смена экрана по окончании теста
        if (numberOfQuestion>=qtQuestions) {
            console.log(`с вопросов перешли на ${this.props.showedDisplay}`);
            this.props.changeShowDisplay('result');
        }

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
                                    <ListGroup.Item action href="#link1" key={uniqid()}>
                                        {answer1}
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2" key={uniqid()}>
                                        {answer2}
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3" key={uniqid()}>
                                        {answer3}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Tab.Container>

                    <div className="questions--buttons mt-2 d-flex justify-content-around align-content-center">
                        <Button variant="primary w-25" onClick={this.props.prewActiveQuestion}>Назад</Button>
                        <Button variant="primary w-25" onClick={nextQuestion}>Вперёд</Button>
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
        showedDisplay: state.showDisplay
    }
};
const mapDispatchToProps = {
    changeTechnology, nextActiveQuestion, prewActiveQuestion, changeShowDisplay
};

export default connect(mapStateToProps, mapDispatchToProps) (Questions);