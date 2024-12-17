import fs from "fs/promises";

export const handleEditorSocketEvent = (socket)=>{
    // update file event
    socket.on("writeFile", async({data, pathToFileOrFolder})=>{
       try {
        await fs.writeFile(pathToFileOrFolder, data);
        socket.emit("writeFileSuccess",{
            data:"File written successfully"
        });
       } catch (error) {
        console.log("Error writing file", error);
        socket.emit("error", {
            data:"Error writing file"
        })
       }
    });

    // create file event
    socket.on("createFile", async({pathToFileOrFolder})=>{
        
            const isFileAlreadyPresent = await fs.stat(pathToFileOrFolder);
            if(isFileAlreadyPresent){
                socket.emit("error", {
                    data:"File already exists"
                });
                return;
            }try {
                await fs.writeFile(pathToFileOrFolder, "");
                socket.emit("createFileSuccess",{
                    data:"File created successfully"
                })
            }
            catch(error){
                console.log("Error creating file", error);
                socket.emit("error", {
                    data:"Error creating file"
                })
            }
    });

    // Read file event

    socket.on("readFile", async({pathToFileOrFolder})=>{
        try {
            //console.log("reading file", pathToFileOrFolder);
            const response = await fs.readFile(pathToFileOrFolder);
            //console.log("response", response.toString());
            
            socket.emit("readFileSuccess",{
                value: response.toString(),
                path: pathToFileOrFolder,
            });
        } catch (error) {
            console.log("Error reading file", error);
            socket.emit("error", {
                data:"Error reading file"
            })
        }
    });


    // delete File event

    socket.on("deleteFile", async({pathToFileOrFolder})=>{
        try {
            const response = await fs.unlink(pathToFileOrFolder);
            socket.emit("deleteFileSuccess",{
                data:"File deleted successfully"
            });
        } catch (error) {
            console.log("Error deleting file", error);
            socket.emit("error", {
                data:"Error deleting file"
            })
        }
    })

    // rename file event

    socket.on("renameFile", async({pathToFileOrFolder, newName})=>{
        try {
            await fs.rename(pathToFileOrFolder, newName);
            socket.emit("renameFileSuccess",{
                data:"File renamed successfully"
            });
        } catch (error) {
            console.log("Error renaming file", error);
            socket.emit("error", {
                data:"Error renaming file"
            })
        }
    })


    // create folder event

    socket.on("createFolder", async({pathToFileOrFolder})=>{
        try {
            await fs.mkdir(pathToFileOrFolder);
            socket.emit("createFolderSuccess",{
                data:"Folder created successfully"
            });
        } catch (error) {
            console.log("Error creating folder", error);
            socket.emit("error", {
                data:"Error creating folder"
            })
        }
    })

    // delete folder event

    socket.on("deleteFolder", async({pathToFileOrFolder})=>{
        try {
             await fs.rmdir(pathToFileOrFolder, {recursive: true});
            socket.emit("deleteFolderSuccess",{
                data:"Folder deleted successfully"
            });
        } catch (error) {
            console.log("Error deleting folder", error);
            socket.emit("error", {
                data:"Error deleting folder"
            })
        }
    })

    // rename folder event
    socket.on('renameFolder', async({pathToFileOrFolder, newName})=>{
        try {
            await fs.rename(pathToFileOrFolder, newName);
            socket.emit("renameFolderSuccess",{
                data:"Folder renamed successfully"
            });
        } catch (error) {
            console.log("Error renaming folder", error);
            socket.emit("error", {
                data:"Error renaming folder"
            })
        }
    })



}