function new_ele(msg, tag, color, id){
    let ele = document.createElement(tag)
    ele.innerHTML = msg
    ele.style.color = color
    ele.id = id
    document.body.appendChild(ele)
}


//Task 1
new_ele('Task 1', 'h1', 'black', '0')
new_ele('<br>', 'div', 'black', '0')
let sound_list = [
    {
      name: "Caution",
      sound: 1
    },
    {
      name: "Dying Breed",
      sound: 3
    },
    {
      name: "Human",
      sound: 8
    },
    {
      name: "Spaceman",
      sound: 7
    },
    {
      name: "Sam's Town",
      sound: 5
    },
    {
      name: "Brightside",
      sound: 4
    }
]

//new p tag function

function display_list(msg, sound_value){
    if(sound_value > 5){
        new_ele(`${msg}: ${sound_value}`, 'p', 'blue', '0')
    }else{
        new_ele(`${msg}: ${sound_value}`, 'p', 'black', '0')
    }
}

//display list
for (let i = 0; i < 6; i++){
    display_list(sound_list[i].name, sound_list[i].sound)
}



//Task 2
new_ele('<br>', 'div', 'black', '0')
new_ele('Task 2', 'h1', 'black', '0')
new_ele('<br>', 'div', 'black', '0')
let counter = 10
new_ele('<br>', 'div', 'black', '0')
new_ele(`Counter: ${counter}`, 'p', 'black', 'counter')
new_ele('', 'p', 'black', 'made it')
new_ele('Click me', 'button', 'black', 'button')
document.getElementById('button').addEventListener('click', function(){
    counter = counter +1
    document.getElementById('counter').innerHTML = `Counter: ${counter}`
    if(counter > 14){
        document.getElementById('made it').innerHTML = 'cool we hit the number'
    }
})