
let list =  ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica.'] 

let name = prompt (`${list} Кого хочешь удалить`) .toLowerCase() .trim()

let idx = list.indexOf(name)

console.log(
    idx
);

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

console.log(
    arr[0] + arr[1] + arr[2] + arr[4] + arr[9]
);
