const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = function(file,data) {
  fs.writeFile(file, data, (err) => {
      if (err) throw err;
      console.log('file created!');
  });
};

module.exports.mkdir = function(directory) {
  fs.mkdir(directory, (err) => {
      if (err) throw err;
      console.log('directory created!');
  });
};