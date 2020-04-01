//path
//fs

const path = require('path');
const fs = require('fs');
const fsPromises = require('fs');


// console.log(process.env.PATH);
// console.log(path.delimiter, process.env.PATH.split(path.delimiter));

// let dir = path.dirname('/foo/bar/baz/asdf/quux');
// console.log(dir);

// let dir2 = Array.from('/foo/bar/baz/asdf/quux'.split("/").pop()).join("/")

// console.log(path.extname(path.basename('C:\\temp\\myfile.html')));

// console.log(path.isAbsolute('/foo/bar')); // true / for Unix = C:\ for Windows
// console.log(path.isAbsolute("C:\\temp.txt"))
// console.log(path.isAbsolute('home/username/')) //relative
// console.log(path.isAbsolute("./home/username")) //class2/home/username


//foo', 'bar', 'baz/asdf', 'quux', '..'

//'/foo/bar/baz/asdf/quux/..' - go back one step (dir)
//'/foo/bar/baz/asdf'

const baseDir = path.dirname(__dirname); // __dirname = C:\Users\Igor.Joshevski\projects\test\class2

// let imgPath = path.join(baseDir, 'images');
// let videoPath = baseDir + '/videos';

//console.log(imgPath);

// '/images/image1.jpg' //- Frontend will get
// 'www.domain.com/images/image1.jpg' 

//Read File with FS
//package.json - relative path
//fs.readFile(path, (err, data))
// fs.readFile(path.join(baseDir, 'class2', 'package.json'), (err, data) => {
//     if(err)
//     {
//         console.log(err);
//         return false;
//     }
//     else
//     {
//         console.log(data.toString());//Always is Buffer array
//         //Call callback function
//     }
// });

//fs.writeFile(path, (err, data)) - If file doesn't exist, will crate it, otherwise will rewrite it
// fs.writeFile('helloworld.txt', 'This is hello world content', (err) => {
//     if(err)
//     {
//         console.log(err);
//         return false;
//     }
//     else
//     console.log('Done'); //Call callback function
// });

// fs.appendFile("helloworld.txt", "Append this", (err) => {
//     if(err)
//     {
//         console.log(err);
//         return false;
//     }
//     else
//     console.log("Done"); //Call callback function
// });

// fs.access("helloworld.txt", fs.constants.F_OK, (err) => {
//     if(err)
//     {
//         console.log(err);
//         return false;
//     }
//     else
//     removeFile("helloworld.txt");
// })

// function removeFile(path){
//     //Remove file
//     fs.unlink(path, (err) => {
//         if(err)
//         {
//             console.log(err);
//             return false;
//         }
//         else
//         console.log('File removed');
//     })
// }

// fs.rename("helloworld.txt", "helloworld2.txt", (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
// })

function scanDir(dirPath)
{
    fs.readdir(dirPath, (err, data) => {
        if(err) throw err;
        else
        {
            console.log(data);
            data.map((pat) => {
                let newPath = path.join(dirPath, pat);
    
                if(path.isAbsolute(newPath))
                {   console.log(newPath);
                    return scanDir(newPath);
                }
            })
        }
    })
}

//fs.mkdir(dirpath, {}, (err));

scanDir(baseDir);