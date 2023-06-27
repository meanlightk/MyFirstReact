import { useSearchParams } from "react-router-dom";

const About = () => {
    const [searchParams, setSeatchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggledetail = () => {
        setSeatchParams({ mode, detail: detail === 'true' ? false : true });
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSeatchParams({ mode: nextMode, detail });
    };
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggledetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;