import uuid4 from 'uuid4';
import fs from 'fs/promises';
import { REACT_PROJECT_COMMAND } from '../config/serverConfig.js';
import { execPromisified } from '../utils/execUtility.js';
import directoryTree from 'directory-tree';
import path from 'path';
export const createProjectService = async() => {
    // create a unique id and then inside the project folder create a folder with that id
    // create project inside that folder

    const projectId = uuid4();
    
    await fs.mkdir(`./projects/${projectId}`);
    
    // after this call the npm create vite command in the newly created project folder

    await execPromisified(REACT_PROJECT_COMMAND, { cwd: `./projects/${projectId}` });
    return projectId;
}


export const getProjectTreeService = async(projectId)=>{
    const projectPath = path.resolve(`./projects/${projectId}`);
    const tree = directoryTree(projectPath);
    return tree;
}