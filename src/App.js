import { useState } from 'react';
import Markdown from 'react-markdown';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`;
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  const [editorFullSize, setEditorFullSize] = useState(false);
  const handleEditorSize = () => setEditorFullSize((prev) => !prev);
  const [previewFullSize, setPreviewFullSize] = useState(false);
  const handlePreviewSize = () => setPreviewFullSize((prev) => !prev);

  return (
    <div className='container'>
      <div className='markdown-container'>
        {!previewFullSize && (
          <div className='editor' id={editorFullSize ? 'max' : ''}>
            <div className='toolbar'>
              <i className='fa fa-free-code-camp'></i>
              {!editorFullSize ? (
                <i className='fa fa-arrows-alt' onClick={handleEditorSize}></i>
              ) : (
                <i className='fa fa-compress' onClick={handleEditorSize}></i>
              )}
            </div>
            <textarea
              id='editor'
              name='editor'
              value={markdownText}
              onChange={(e) => setMarkdownText(e.target.value)}
            ></textarea>
          </div>
        )}
        {!editorFullSize && (
          <div className={`preview`}>
            <div className='toolbar-mardown'>
              <i className='fa fa-free-code-camp'></i>
              {!previewFullSize ? (
                <i className='fa fa-arrows-alt' onClick={handlePreviewSize}></i>
              ) : (
                <i className='fa fa-compress' onClick={handlePreviewSize}></i>
              )}
            </div>
            <Markdown>{markdownText}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
