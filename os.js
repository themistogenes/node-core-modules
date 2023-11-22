const os = require('os');

// arch(), returns a string with the OS's CPU architecture
// console.log(os.arch());

// platform(), returns a string identifying the OS
// console.log(os.platform());

// if (os.platform() === 'darwin') {
//   console.log('You are on a Mac');
// } else if (os.platform() === 'win32') {
//   console.log('You are on Windows');
// } else {
//   console.log('You are on Linux');
// }

// cpus()
// console.log(os.cpus());

// freemem(), shows the amount of free memory
// console.log(os.freemem());
// console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
// console.log(os.totalmem());
// console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir()
// console.log(os.homedir());

// uptime()
// console.log(os.uptime());
// const uptime = os.uptime();
// const days = Math.floor(uptime / 60 / 60 / 24);
// const hours = Math.floor(uptime / 60 / 60) % 24;
// const mins = Math.floor(uptime / 60) % 60;
// const secs = Math.floor(uptime) % 60;
// console.log(`Uptime ${days} days, ${hours} hours, ${mins} mins, ${secs} secs`);

// hostname()
console.log(os.hostname());
