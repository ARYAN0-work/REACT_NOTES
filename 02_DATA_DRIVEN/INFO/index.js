// return new array

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

const squares = nums.map(function(num) {
  return num*num;  
})
/*
num = 1  -> return 1   -> [1]
num = 2  -> return 4   -> [1, 4]
num = 3  -> return 9   -> [1, 4, 9]
num = 4  -> return 16  -> [1, 4, 9, 16]
num = 5  -> return 25  -> [1, 4, 9, 16, 25]


map()
↓
Take each element
↓
Run the callback function on it
↓
Store the returned value in a new array
↓
Return the new array
*/


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized // use .toUpperCase()

slice method => name.slice(1) => 1st pe slice and 2nd paramter here is nothing means end
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const capiatl = names.map(function(name){
    return name[0].toUpperCasez()+name.slice(1)
})



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map((mon)=>{
    return `<p>${mon}</p>`
})

/*
const paragraphs = pokemon.map((mon)=> `<p>${mon}</p>`)
*/