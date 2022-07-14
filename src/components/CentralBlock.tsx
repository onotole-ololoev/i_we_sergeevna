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

    const changeValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(+e.currentTarget.value)
    }
    // let maxValue = 10;
    // let minValue = 0;

    const onClickHandler = () => {
        alert(arr[value])
    }

    return (
        <div className={"body"}>
            Please, choose any number from 1 to 11 <br/> and get the reason to breake up with this shit: <br/>
            {/*<input type="number" value={value} onChange={changeValue} max={maxValue} min={minValue}/>*/}
            <select onChange={changeValue}>
                <option value='0'>1 reason</option>
                <option value="1">2 reason</option>
                <option value="2">3 reason</option>
                <option value="3">4 reason</option>
                <option value="4">5 reason</option>
                <option value="5">6 reason</option>
                <option value="6">7 reason</option>
                <option value="7">8 reason</option>
                <option value="8">9 reason</option>
                <option value="9">10 reason</option>
                <option value="10">11 reason</option>
            </select>
            <button onClick={onClickHandler}>Greate choise!!!</button>
        </div>
    );
};

export default CentralBlock;