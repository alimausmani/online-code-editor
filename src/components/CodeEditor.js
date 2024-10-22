import React from 'react';

const CodeEditor = ({ html, css, js, setHtml, setCss, setJs }) => {
  return (
    <div className="editor-container">
      <div className="editor-pane">
        <h3>HTML</h3>
        <textarea value={html} onChange={(e) => setHtml(e.target.value)} placeholder="Write HTML here..." />
      </div>

      <div className="editor-pane">
        <h3>CSS</h3>
        <textarea value={css} onChange={(e) => setCss(e.target.value)} placeholder="Write CSS here..." />
      </div>

      <div className="editor-pane">
        <h3>JavaScript</h3>
        <textarea value={js} onChange={(e) => setJs(e.target.value)} placeholder="Write JavaScript here..." />
      </div>
    </div>
  );
};

export default CodeEditor;
