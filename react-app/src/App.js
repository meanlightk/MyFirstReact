import './App.css';

// 사용자 정의 태그
function Header(props) {
  console.log("props", props.title)
   return(
      <header>
        <h1><a href="/" onClick={(event) => {
          // 1. a href="/" 링크를 클릭하면
          event.preventDefault(); 
          // 이벤트(클릭, 더블클릭, 드래그 등) 막음 -> 내가 원하는 것만 허용
          props.onChangeMode();   
          // 2. onChange 불러오기 -> 3번
          // onChangeMode라는 props의 값으로 함수 전달
        }}>{props.title}</a></h1> {/*React표현식 : {  }*/}
      </header>
   )
}

function Nav(props) {
  const lis= []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}> 
      <a id={t.id} href={'/read/'+t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(event.target.id);
        // event를 보여주는데, 대상은 onChangeMode={(id) => { alert(id);}}
      }}>{t.title}</a></li>);
  }

  return(
    <nav>
    <ol>
      {lis}
    </ol>
  </nav>
  )
}

function Article(props) {
  return(
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}

function App() {
  const mode = "WELCOME";
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
let content = null;
if(mode === "WELCOME") {
content = <Article title = "Welcome" body="Hello, Good Day"></Article>
} else if (mode === "READ") {
content = <Article title = "Welcome" body="Hello, Read"></Article>
}
  return (
    <div>
      <Header title="WEB" onChangeMode={function() {
        alert("Header");
      }}></Header>
      {/* 3. 함수(Header)의 props(Parameter)를 통채로 onChangeMode에 넘김 (2번) */}
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      {content}
    </div>
  );
}    

/*함수형태
1. function()
2. () =>   : arrow function
3. (event) =>
4. event =>  :  Parameter가 하나일 땐, 괄호 생략 가능
*/

export default App;
