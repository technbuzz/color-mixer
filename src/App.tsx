import {Component, createEffect, createSignal} from 'solid-js';
import kitty from './assets/1.svg'
import kitty2 from './assets/4.svg'
import kitty3 from './assets/8.svg'

import styles from './App.module.css'

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
          <label for="color1">Choose First Color</label>
          <input type="color" name="" onChange={onColor1} />
        </div>

        <div class={styles.result_wrapper}>
          <h2>Result</h2>
          <div 
          class={styles.result} 
          style={{
              'background-color': `color-mix(in srgb, ${color1()}, ${color2()})`
            }}></div>

        </div>

        <div>
          <label for="color2">Choose Second Color</label>
          <input type="color" name="" onChange={onColor2}/>
        </div>

      </main>

      <ul class={styles.kities}>
        <li class={styles.kitty1}><img src={kitty} alt="" /></li>
        <li class={styles.kitty2}><img src={kitty2} alt="" /></li>
        <li class={styles.kitty3}><img src={kitty3} alt="" /></li>
      </ul>
    </div>
  );
};

export default App;
