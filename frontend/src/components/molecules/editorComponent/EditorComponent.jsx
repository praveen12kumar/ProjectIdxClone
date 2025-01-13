import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useActiveFileTabStore } from '../../../store/activeFileTabStore';
import { useEditorSocketStore } from '../../../store/editorSocketStore';


function EditorComponent () {
    const [editorState, setEditorState] = useState({
        theme:null
    });
    let timerId;

    const {editorSocket} = useEditorSocketStore();

    const { activeFileTab} = useActiveFileTabStore();

    //console.log("active", activeFileTab);

    const downloadTheme = async()=>{
        const response = await fetch("/Monokai.json");
        const data = await response.json();
        setEditorState({...editorState, theme:data});
    }

    function handleEditorTheme(editor, monaco){
        monaco.editor.defineTheme("monokai", editorState.theme);
        monaco.editor.setTheme("monokai");
    }

    //here onChange is not normal onChange from Input
    // this onChange is from monaco Editor 

    function handleChange(value){
      // clear old timer
      if(timerId !== null){
        clearTimeout(timerId);
      }
      // set the new timer
      
      timerId = setTimeout(()=>{
        const editorContent = value;
        editorSocket.emit("writeFile",{
        data:editorContent,
        pathToFileOrFolder: activeFileTab?.path
      })
      }, 2000);
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
            defaultLanguage={undefined}
            defaultValue="//Welcome to the playground"
            options={{
                fontSize:14,
                fontFamily: "monospace",
                color:"white"
            }}
            onMount={handleEditorTheme} 
            onChange={handleChange}
            value = {activeFileTab?.value ? activeFileTab?.value : "//Welcome to the playground"}
      />
      }
    </>
  )
}

export default EditorComponent