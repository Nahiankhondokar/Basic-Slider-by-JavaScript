let users = [
    {
        name : 'nahian',
        age : 25,
        gender: 'Male',
        location: 'Rampura',
        cell : 25653256,
        photo: '1.png',
        desc: 'Provident ea voluptatem aut voluptas inventore aperiam sunt fugiat quia error, amet id sapiente voluptates quae repudiandae! Aspernatur odit saepe placeat obcaecati?'
    },
    {
        name : 'farid',
        age : 20,
        gender: 'Male',
        location: 'Rampura',
        cell : 324343,
        photo: '2.jpg',
        desc: 'Provident ea voluptatem aut voluptas inventore aperiam sunt fugiat quia error, amet id sapiente voluptates quae repudiandae! Aspernatur odit saepe placeat obcaecati?'
    },
    {
        name : 'farjana',
        age : 26,
        gender: 'Female',
        location: 'Feni',
        cell : 25653434234256,
        photo: '3.jpg',
        desc: 'Provident ea voluptatem aut voluptas inventore aperiam sunt fugiat quia error, amet id sapiente voluptates quae repudiandae! Aspernatur odit saepe placeat obcaecati?'
    },
    {
        name : 'Subrina',
        age : 30,
        gender: 'female',
        location: 'Uttora',
        cell : 4234324,
        photo: '4.jpg',
        desc: 'Provident ea voluptatem aut voluptas inventore aperiam sunt fugiat quia error, amet id sapiente voluptates quae repudiandae! Aspernatur odit saepe placeat obcaecati?'
    }
];


//get elements
let photo = document.querySelector('.slider img');
let stu_name = document.querySelector('.slider h1');
let cell = document.querySelector('.slider h5');
let desc = document.querySelector('.slider p');
let prev_btn = document.querySelector('.nav #prev');
let next_btn = document.querySelector('.nav #next');

let default_index = 0;
showUser()

// Next button
next_btn.onclick = () => {

    if(default_index > users.length -1){
        default_index = 0;
    }
    showUser(default_index);
    console.log(default_index);
    default_index++;
    clearInterval(start_slider);

}


// Previous Button
prev_btn.onclick = () => {

    if(default_index < 0){
        default_index = users.length - 1;
    }

    showUser(default_index);
    console.log(default_index);
    default_index--;
    clearInterval(start_slider);


}



function showUser(index = 0){

    photo.setAttribute('src', 'asset/img/' + users[index].photo);
    stu_name.innerHTML = users[index].name;
    cell.innerHTML = users[index].cell;
    desc.innerHTML = users[index].desc;

}



// Slider Auto Play
let start_slider = setInterval(() => {

    if(default_index > users.length -1){
        default_index = 0;
    }
    showUser(default_index);
    console.log(default_index);
    default_index++;

}, 1000);
