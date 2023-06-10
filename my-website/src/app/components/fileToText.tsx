import { readFile } from "fs/promises";

const fileToText = (path: string) => {
    try {
        const filePath = new URL(path, import.meta.url);
        const contents = readFile(filePath, { encoding: 'utf8' });
        //console.log(contents);
        return contents;
      } catch (error) {
        console.error(error);
    }
}

export default fileToText;