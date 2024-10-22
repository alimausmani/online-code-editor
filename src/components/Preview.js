import React, { useEffect, useRef } from 'react';

const Preview = ({ html, css, js }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument || iframe.contentWindow.document;

    const documentContents = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            (function() {
              // Override console.log to display messages in the iframe
              const originalLog = console.log;
              console.log = function(message) {
                const output = document.createElement('div');
                output.textContent = message;
                output.style.color = 'black';
                document.body.appendChild(output);
                originalLog.apply(console, arguments);
              };
              
              try {
                ${js}
              } catch (error) {
                const errorOutput = document.createElement('div');
                errorOutput.textContent = 'Error: ' + error.message;
                errorOutput.style.color = 'red';
                document.body.appendChild(errorOutput);
              }
            })();
          <\/script>
        </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  }, [html, css, js]); 
  return (
    <div className="preview-pane">
      <iframe title="Preview" ref={iframeRef} />
    </div>
  );
};

export default Preview;
