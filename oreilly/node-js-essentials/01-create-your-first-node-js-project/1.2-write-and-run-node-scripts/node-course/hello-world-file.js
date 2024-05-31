const fs = require('fs'); //. importing fs package

fs.writeFile("Hello.txt", " Content of the file is Hello World!", (err) => {
    console.log("Hello.txt file is created in the dirctory after executing the file");
    console.log("Hello.txt file is created in the dirctory after executing the file");

    console.log("Done");

})