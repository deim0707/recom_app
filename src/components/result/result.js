import React from 'react';
import './result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap'
import {useSelector} from 'react-redux';


const Result = () => {

    const technology = useSelector( (state) => {
        return state.technology
    })

    return (
        <div className='result col-8'>
            <h3>Ваши результаты</h3>
            <p className='mt-2'>
                Ниже представлена информация с результатами прохождения теста. <br/>
                Чем больше число напротив технологии, тем больше она вам подходит.
            </p>

            <ListGroup variant="flush">
                <ItemTechnologe text='PX' typeItem={technology.px}/>
                <ItemTechnologe text='EM' typeItem={technology.smacss}/>
                <ItemTechnologe text='REM' typeItem={technology.em}/>
                <ItemTechnologe text='Инкрементная модель' typeItem={technology.incr}/>
                <ItemTechnologe text='Каскадная модель' typeItem={technology.kaskad}/>
                <ItemTechnologe text='Спиральная модель' typeItem={technology.spiral}/>
                <ItemTechnologe text='БЭМ' typeItem={technology.bem}/>
                <ItemTechnologe text='SMACSS' typeItem={technology.smacss}/>
            </ListGroup>
        </div>
    )
}

export default Result;


const ItemTechnologe = ({text, typeItem}) => {
    return (
        <ListGroup.Item>
            {text}:  &nbsp;
            <span>
                {typeItem}
            </span>
        </ListGroup.Item>
    )
} 