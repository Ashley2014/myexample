let glob= require('glob')


var getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};

getDirectories('../src/components_std', function (err, res) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log(res);

  }
});


// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};


let allName=walkSync('../src/components_std/')

console.log(allName)
