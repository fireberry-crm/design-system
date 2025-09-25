import fs from 'fs-extra';
import path from 'path';
import readline from 'readline';

function renameFilesAndDirs(dir, oldName, newName) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const newFilePath = path.join(dir, file.replace(new RegExp(oldName, 'g'), newName));
    fs.renameSync(filePath, newFilePath);

    if (fs.statSync(newFilePath).isDirectory()) {
      renameFilesAndDirs(newFilePath, oldName, newName);
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const BLUE_COLOR_SIGN = '\u001b[34m';
const GREEN_COLOR_SIGN = '\u001b[32m';
const RESET_COLOR_SIGN = '\x1b[39m';
const COMPONENT_TEMPLATE_NAME = '_COMPONENT_NAME_';

rl.question(`${BLUE_COLOR_SIGN}Enter component name: ${RESET_COLOR_SIGN}`, async (name) => {
  try {
    const templateFolder = `./scripts/template/${COMPONENT_TEMPLATE_NAME}`;
    const destinationFolder = './src/components';

    const newComponentFolder = path.join(destinationFolder, name);

    fs.copySync(templateFolder, newComponentFolder);
    renameFilesAndDirs(newComponentFolder, COMPONENT_TEMPLATE_NAME, name);

    // Update the content of files to replace "_COMPONENT_NAME_" with the actual component name
    fs.readdirSync(newComponentFolder).forEach((file) => {
      const filePath = path.join(newComponentFolder, file);
      if (fs.statSync(filePath).isFile()) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const updatedContent = fileContent.replace(/_COMPONENT_NAME_/g, name);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
      }
    });

    //Export the new component
    const exportComponentFilePath = './src/components/index.ts';
    const contentToAdd = `\nexport { default as ${name} } from './${name}';`;
    fs.appendFile(exportComponentFilePath, contentToAdd, (err) => {
      if (err) {
        console.error(err);
      }
    });

    console.log(
      `${GREEN_COLOR_SIGN}Component ${name} created successfully at src/${name}.\n\nIt is being exported in ${BLUE_COLOR_SIGN}'/src/components/index.ts${RESET_COLOR_SIGN}.'`
    );
  } catch (err) {
    console.error(error);
  } finally {
    rl.close();
  }
});
