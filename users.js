let users= [
    {username: 'Charles', email: 'ibehces347@gmail.com', region: 'Abuja'},
    {username: 'Wayne', email: 'ibeharles347@gmail.com', region: 'Lagos'},
    {username: 'Carti', email: 'iehcharles347@gmail.com', region: 'Ondo'},
    {username: 'Keno', email: 'ibehcharle7@gmail.com', region: 'Enugu'},
    {username: 'Kilolo', email: 'ibhcharles347@gmail.com', region: 'Imo'},
    {username: 'Onome', email: 'ibehchles347@gmail.com', region: 'Kogi'}
]
let userInfo = document.querySelector('.container');

function displayUsers() {
    if (users.length > 0){
        users.forEach((user)=>{
            let card = document.createElement('div');
            let info = `Username - ${user.username} Email - ${user.email} Region - ${user.region}`;
            card.textContent = info;
            userInfo.className = 'card'
            userInfo.append(card);
        })
    }
    else{
        let para = document.createElement('p');
        para.textContent = 'No users found';
        userInfo.append(para);
        para.className = 'nouser'
    }
}
displayUsers ();
let username = 'Charles';
let email = 'ibehces347@gmail.com';
let isMatch = users.some((user)=> user.username === username && user.email === email);
if(isMatch){
    alert(' Welcome to your Dasboard');
}else{
    alert('What are you looking for?')
}

// const addUser= (newUser)=> {
//     users.unshift(newUser);
//     users.shift()
// }
// addUser({username: 'Musa', email: 'ibhchles347@gmail.com', region: 'Borno'});
// console.log(users)

// users.forEach((user)=>{
//     console.log(user.email)
//     console.log(`Username - ${user.username} Email - ${user.email} Region - ${user.region}`)
// })