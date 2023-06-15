import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        // state의 초깃값 설정
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을때, 호출할 함수 지정
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        });
                        /* 1. 위 코드와 아래 코드는 완전히 똑같은 기능을 함.
                           2. 아래 코드는 함수에서 바로 객체를 반환한다는 의미임.
                           3. prevState => ({}) */
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;


/* state를 constructor에서 꺼내기
 : constructor 메소드를 선언하지 않고 state 초깃값 설정 가능

import { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
        return (...);
    }
}

export default Counter;
*/