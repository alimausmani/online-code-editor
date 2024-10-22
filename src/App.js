import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import './App.css'; 

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <div className="app">
      <CodeEditor html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJs={setJs} />
      <Preview html={html} css={css} js={js} />
    </div>
  );
};

export default App;

