import {config} from 'dotenv';

config({
    path:'.env'
});

export const PORT = process.env.PORT || 3000;
export const REACT_PROJECT_COMMAND = process.env.REACT_PROJECT_COMMAND;