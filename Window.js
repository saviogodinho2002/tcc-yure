module.exports = {
    prompt(input){
        const fs = require("fs");
        let data = JSON.parse( fs.readFileSync('./arguments.json',"utf-8"));

        let  index = data.index;
        let i = index;
        index++;
        const newjson = {
            "index": index,
            "arguments": data.arguments
        };
        fs.writeFileSync("./arguments.json",JSON.stringify(newjson));

        return data.arguments[i];
      
    },
    alert(output){
        console.log(output);
    }
}