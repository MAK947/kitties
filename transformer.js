const fs = require('fs').promises;

const convert = async () =>{
    try{
        const data = await fs.readFile('names.txt','utf8');
        const array = data.split("\n").map(name => {
            let itemArray = name.split(/\s/).filter(Boolean);
            return {
                id:itemArray[0],
                name:itemArray[1],
                transliteration:itemArray[2],
                meaning:itemArray.filter((e,i) => i > 2).join(" "),
                url:""
            }
        })
        fs.writeFile('names.json',JSON.stringify(array));
    }catch(e){
        console.log(e);
    }
}