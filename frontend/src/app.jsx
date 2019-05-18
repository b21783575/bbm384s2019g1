import React from 'react';
import 'normalize.css';

import 'styles/base/_main.sass'; // Global styles
import 'styles/base/_common.sass'; // Global styles
import styles from './app.sass'; // Css-module styles

const App = () => (
  <div className='App'>
    <div>
      <h1>It Works!</h1>
      <p>
        <span className={styles.redButton}>css-module</span> local styles.
      </p>
      <p>Enjoy!</p>
    </div>
  </div>
);

export default App;
