// case 1
// This JSX:
ReactDOM.render(
  <div id="msg">Hello World!</div>,
  mountNode
);

// Is transformed to this JS:
ReactDOM.render(React.createElement('div', { id: 'msg' }, 'Hello World!'), mountNode);

// case 2
// This JSX: (문을 값으로 넣는 경우 문법 에러)
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
React.createElement("div", { id: if (condition) { 'msg' }}, "Hello World!");

const obj = {id: if (condition) { 'msg '}}

// case 3
// 삼항연산자는 값으로 귀결된다. (값으로 식이 들어갈 수 있다.)
ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode);

// case 4
// 즉시 실행 함수 (IIFE)
function ReactComponent() {
  return (
    <p>
      {(() => {
        switch (this.state.color) {
          case 'red':
            return '#FF0000';
          case 'green':
            return '#00FF00';
          default:
            return '#FFFFFF';
        }
      })()}
    </p>
  )
}


// case 5
// for 문 -> 고차함수를 이용하자
function ReactComponent() {
  return (
    <tbody>
      {/* {(() => {
        const rows = [];

        for (let i = 0; i < objectRows.length; i++) {
          rows.push(<ObjectRow key={i} data={objectRows[i]}/>);
        }
        return rows;
      })()} */}
      {objectRows.map((obj, i) => (
        <ObjectRow key={i} data={obj}/>
      ))}
    </tbody>
  )
}

// case 6
// 논리 연산자 이용
function ReactComponent() {
  return (
    <div>
      {/* {(() => {
        if (conditionOne) return <span>One</span>;
        if (conditionTwo) return <span>Two</span>;
        else conditionOne;
        return <span>Three</span>;
      })} */}
      {conditionOne && <span>One</span>}
      {conditionTwo && <span>Two</span>}
      {!conditionTwo && <span>Three</span>}
    </div>
  )
}

// JSX는 트랜스파일링되면 객체로 바뀐다.
// 객체 내부에는 값 또는 식만 들어갈 수 있다.