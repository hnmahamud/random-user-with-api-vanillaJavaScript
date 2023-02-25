const displayUser = (data) => {
    const userData = data.results;
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userImg = document.getElementById('user-img');
    userData.forEach(element => {
        const {title, first, last} = element.name;
        userName.innerText = title + ' ' + first + ' ' + last;

        userEmail.innerText = element.email;

        const {large} = element.picture;
        userImg.setAttribute('src', `${large}`);
    });
}