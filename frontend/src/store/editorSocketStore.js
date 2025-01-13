import {create} from 'zustand';
import { useActiveFileTabStore } from './activeFileTabStore';
import { useTreeStructureStore } from './treeStructureStore';

export const useEditorSocketStore = create((set) => ({
    editorSocket:null,
    setEditorSocket: (incomingSocket) =>{
        
        const activeFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
        const projectTreeStructureSetter = useTreeStructureStore.getState().setTreeStructure;


        incomingSocket?.on("readFileSuccess", (data)=>{
            //console.log("read File Success", data);
            const fileExtension = data?.path?.split(".")?.pop();
            activeFileTabSetter(data?.path, data?.value, fileExtension);
          });

        incomingSocket?.on("writeFileSuccess", (data)=>{
            console.log("write File Success", data);
            // incomingSocket.emit("readFile", {
            //     pathToFileOrFolder: data?.path
            // });
        })

        incomingSocket?.on("deleteFileSuccess", ()=>{
            console.log("delete File Success", );
            // we need to fetch the latest file structure and update it in the store
            projectTreeStructureSetter();
        })

        incomingSocket?.on("deleteFolderSuccess", ()=>{
            console.log("delete Folder Success", );
            // we need to fetch the latest file structure and update it in the store
            projectTreeStructureSetter();
        })
        
        set({
            editorSocket:incomingSocket
        })
    }
}));