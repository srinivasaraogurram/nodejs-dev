![alt text](image.png)
2.4 working with Node.js Modules

Modules are reusable pieces of code which can be imported into other code

![alt text](image-1.png)
In the example provided hello-world-file.js, hello-world.js, fibonacci.js will be considered as files.
we can convert them into modules and share codes between files
two ways of creating modules
1. old way
![alt text](image-2.png)
export the file
```
modules.exports = generateFibonacci 
```
import th file
index.js
![alt text](image-3.png)
![alt text](image-4.png)
const generateFibonacci = require('./fibonacci'); // no need for extension.
![alt text](image-5.png)
![alt text](image-6.png)
if we have multiple functions in the same file and you want to export them, alternative way to export is to give the name for the export
module.exports = generateFibonacci; - it is called named defaults exports
module.exports.generateFibonacci = generateFibonacci; - it is called named export
![showcasing  named exports - how to import it](image-7.png)

2. new way
# import and export statements
instead of saying module.exports.generateFibonacci = generateFibonacci;  
export default generateFibonacci;
![Exporting new way ](image-8.png)
![New way of importing using import from ](image-9.png)
import generateFibonacci from './fibonacci';
![alt text](image-10.png)

once can see error when you run the file

![cannot use import statements outside a module ](image-11.png)
default settings need to be changed
![add type is module in package.json ](image-12.png)
![alt text](image-13.png)
when you importing and exporting, you need to use the extension with .js
![alt text](image-14.png)
![alt text](image-15.png)
![alt text](image-16.png)
![alt text](image-17.png)
![alt text](image-18.png)
![alt text](image-19.png)
![alt text](image-20.png)

