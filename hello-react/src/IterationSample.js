import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);
    const [InputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: InputText
        });
        setNextId(nextId + 1); // nextId 값에 1을 더해준다.
        setNames(nextNames); // nextNames 값을 업데이트 한다.
        setInputText(''); // InputText를 비운다.
    };

    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
    return (
        <>
            <input value={InputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample;