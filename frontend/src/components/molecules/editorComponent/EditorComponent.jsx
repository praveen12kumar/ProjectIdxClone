import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import {useEditorSocketStore} from "../../../store/editorSocketStore";
import { useActiveFileTabStore } from '../../../store/activeFileTabStore';


function EditorComponent () {
    const [editorState, setEditorState] = useState({
        theme:null
    });

    const {editorSocket} = useEditorSocketStore();
    const {setActiveFileTab, activeFileTab} = useActiveFileTabStore();

    console.log("active", activeFileTab);

    const downloadTheme = async()=>{
        const response = await fetch("/Monokai.json");
        const data = await response.json();
        setEditorState({...editorState, theme:data});
    }

    function handleEditorTheme(editor, monaco){
        monaco.editor.defineTheme("monokai", editorState.theme);
        monaco.editor.setTheme("monokai");
    }

    editorSocket?.on("readFileSuccess", (data)=>{
      console.log("read File Success", data);
      setActiveFileTab(data.path, data.value);
    });


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
                fontSize:14,
                fontFamily: "monospace",
                color:"white"
            }}
            onMount={handleEditorTheme} 
            value = {activeFileTab?.value ? activeFileTab?.value : "//Welcome to the playground"}
      />
      }
    </>
  )
}

export default EditorComponent