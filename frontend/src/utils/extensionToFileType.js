export const extensionToFileType = (extension) => {
    console.log(extension)
    switch (extension) {
        case "js":
            return "javascript";
        case "jsx":
            return "javascript";
        case "ts":
            return "typescript";
        case "tsx":
            return "typescript";
        case "html":
            return "html";
        case "css":
            return "css";
        case "json":
            return "json";
        case 'yaml':
            return 'yaml';
        case 'yml':
            return 'yaml';
        case 'svg':
            return 'svg';
        case "jpg":
            return "image/jpeg";
        case "jpeg":
            return "image/jpeg";
        case "png":
            return "image/png";
        default:
            return undefined;
    }
}