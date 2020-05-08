const fs = require('fs');

class FSModel
{
    constructor(){
        this.fs = fs;
    }

    openFile(path, filename)
    {
        if( ! path || ! filename)
        return false;

        let filepath = [path,filename].join("/"); //dirname/dirname/filename.ext

        let file = this.fs.readFileSync(filepath);
        file = file.toString();
        
        if(file.length)
        file = JSON.parse(file);
        else
        file = [];
        
        return file;
    }

    appendItem(path, filename, {email, password})
    {
        let users = this.openFile(path, filename);
        users.push({id: users.length + 1, email, password});
        
        let filepath = [path,filename].join("/"); //dirname/dirname/filename.ext
        return this.fs.writeFileSync(filepath, JSON.stringify(users));
    }
}

module.exports = FSModel;