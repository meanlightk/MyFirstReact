import { Component } from 'react';
import ProtoTypes from 'prop-types';    // ProtoTypes 지정

// Class형 컴포넌트에서 props 사용
class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.protoTypes = {
    name: ProtoTypes.string,
    favoriteNumber: ProtoTypes.number.isRequired
};

export default MyComponent;

/* Class 내부에서 지정하는 방법
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static protoTypes = {
        name: ProtoTypes.string,
        favoriteNumber: ProtoTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props;  // 비구화 할당
        return(...);
    }
}

export default MyComponent;

 */