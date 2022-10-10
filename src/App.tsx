import {Component, createEffect, createSignal} from 'solid-js';
import {HelloWorld} from './HelloWorld'

const [count, setCount] = createSignal(0)

console.log(count())

createEffect(() => {
    console.log(count())
  })

setCount(count() + 1)

const App: Component = () => {
  const [color1, setColor1] = createSignal('#fff')
  function onColor1(event: any) {
    setColor1(event.target.value)
  }

  const [color2, setColor2] = createSignal('#fff')
  function onColor2(event: any) {
    setColor2(event.target.value)
  }
  return (
    <div>
      <main class="grid">

        <div>
          <label for="color1">Choose First Color {color1}</label>
          <input type="color" name="" onChange={onColor1} />
        </div>

        <div class="result-wrapper">
          <h2>Result</h2>
          <div class="result"></div>
        </div>

        <div>
          <label for="color2">Choose Second Color {color2}</label>
          <input type="color" name="" onChange={onColor2}/>
        </div>

      </main>
      <h1>Welcome</h1>
      <HelloWorld />
    </div>
  );
};

export default App;
