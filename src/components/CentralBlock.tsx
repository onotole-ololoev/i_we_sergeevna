import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

const CentralBlock = () => {


    const arr = [
        'Снижение массы тела',
        'Улучшение сна',
        'Улучшение сексуальной жизни',
        'Улучшение памяти и работы мозга',
        'Лучшее усвоение витаминов и минералов',
        'Свежий и здоровый внешний вид',
        'Снижение риска инсульта',
        'Улучшение работы ЖКТ',
        'Укрепление иммунитета',
        'Улучшение настроения',
        'Сергеевна, ты заебал пить!'
    ]
    let [value, setValue] = useState(0)

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }
    let maxValue = 10;
    let minValue = 0;

    const onClickHandler = () => {
        alert(arr[value])
    }

    return (
        <div className={"body"}>
            Please, choose any number from 0 to 10 <br/> and get the reason to breake up with this shit: <br/>
            <input type="number" value={value} onChange={changeValue} max={maxValue} min={minValue}/>
            <button onClick={onClickHandler}>Greate choise!!!</button>
        </div>
    );
};

export default CentralBlock;