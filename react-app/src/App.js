import './App.css';
// Hook -> useState
import { useState } from 'react';

// 사용자 정의 태그
function Header(props) {
  console.log("props", props.title)
  return (
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
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
        // event를 보여주는데, 대상은 onChangeMode={(id) => { alert(id);}}
      }}>{t.title}</a></li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      {/* 제목 입력 폼 */}
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event => {
        setTitle(event.target.value);
      }} /></p>
      {/* 내용 입력 폼 */}
      <p><textarea name="body" placeholder="body" value={body} onChange={event => {
        setBody(event.target.value);
      }}></textarea></p>
      {/* 전송 버튼 */}
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article>
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]);

  let content = null;
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Good Day"></Article>
  } else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <li>
        <a href={'/update/' + id} onClick={event => {
          event.preventDefault();
          setMode("UPDATE");
        }}>Update
        </a>
      </li>

      <li>
        <input type="button" value="Delete" onClick={() => {
          const newTopics = []
          for (let i = 0; i < topics.length; i++) {
            if (topics[i].id !== id) {
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
        }} />
      </li>
    </>

  } else if (mode === "CREATE") {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if (mode === "UPDATE") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      console.log(title, body);
      const newTopics = [...topics];
      const updatedTopic = { id: id, title: title, body: body }
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode("WELCOME");
        //alert("Header");
      }}></Header>
      {/* 3. 함수(Header)의 props(Parameter)를 통채로 onChangeMode에 넘김 (2번) */}
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode("READ");
        setId(_id);
        //alert(id);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={event => {
          event.preventDefault();
          setMode("CREATE");
        }}>Create</a></li>
        {contextControl}
      </ul>
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
