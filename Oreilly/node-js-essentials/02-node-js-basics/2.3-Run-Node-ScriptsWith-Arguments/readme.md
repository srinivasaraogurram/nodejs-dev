![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
remove hadcoded number for the method ()
![passing 100 to generateFibonacci](image-4.png)
![alt text](image-5.png)
when user pass node ./fibonacci.js 100 'abc'
![process.argv](image-6.png)
![alt text](image-7.png)
Process.argv contains  array which has following
1 as node (path to node)
2 as the file name: fibonacci.js ( having absolute path)
3 is the 100 param
4 is the abc

![process.argv.slice(2)](image-8.png)
will provide 100, abc
![alt text](image-9.png)
const args = process.argv.slice(2); - which will contain all the user passed arguments
![alt text](image-10.png)
const howMany = args[0];
console.log(generateFibonacci(howMany))
![alt text](image-11.png) when node ./fibonacci.js 5 still views unexacted results since the args are consider as strings
hence we need to conver the follow line to number
const howMany = Number(args[0]);
console.log(generateFinonnacci(howMany))
![alt text](image-12.png) this time it generate 5 numbers
![alt text](image-13.png)

