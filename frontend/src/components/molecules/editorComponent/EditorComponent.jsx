import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

function EditorComponent () {
    const [editorState, setEditorState] = useState({
        theme:null
    });

    const downloadTheme = async()=>{
        const response = await fetch("/Monokai.json");
        const data = await response.json();
        console.log(data);
        setEditorState({...editorState, theme:data});
    }

    function handleEditorTheme(editor, monaco){
        monaco.editor.defineTheme("monokai", editorState.theme);
        monaco.editor.setTheme("monokai");
    }

    useEffect(()=>{
        downloadTheme();
    },[])


  return (
    <>
      {
        editorState.theme && 
        <Editor
            height="80vh"
            width={"100%"}
            defaultLanguage="javascript"
            defaultValue="//Welcome to the playground"
            options={{
                fontSize:18,
                fontFamily: "monospace",
            }}
            onMount={handleEditorTheme} 
      />
      }
    </>
  )
}

export default EditorComponent