// (인자가 들어가는 자리) -> props  => 함수가 하나면 괄호 생략 가능
const MyComponent = props => {
    return (
        <div>안녕하세요, 제 이름은 {props.name}입니다. <br />
            children 값은 {props.children}
            입니다.
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent;
