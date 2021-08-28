document.getElementById('user-icon').addEventListener('mouseover', function(){
    document.getElementById('span-info').innerText = 'Hi ! My Name is';
    document.getElementById('user-name').innerText = 'Sanjid Haq'
});
document.getElementById('email-icon').addEventListener('mouseover', function(){
    document.getElementById('span-info').innerText = 'Hi ! My Email is';
    document.getElementById('user-name').innerText = 'sanjidmahe@gmail.com';
});
document.getElementById('calendar-icon').addEventListener('mouseover', function(){
    document.getElementById('span-info').innerText = 'Hi ! My Birthday is';
    document.getElementById('user-name').innerText = '2002-19-05';
});
document.getElementById('address-icon').addEventListener('mouseover', function(){
    document.getElementById('span-info').innerText = 'Hi ! My Hometown is';
    document.getElementById('user-name').innerText = 'Sylhet';
});
document.getElementById('phone-icon').addEventListener('mouseover', function(){
    document.getElementById('span-info').innerText = 'Hi ! My Contact no. is';
    document.getElementById('user-name').innerText = '+8801641249242';
});
document.getElementById('password-icon').addEventListener('mouseover', function(){
    document.getElementById('span-info').innerText = 'Hi ! My Password is';
    document.getElementById('user-name').innerText = 'abcd1234';
});

const loadApi = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
};

const displayUser = (info) => {
    const userPic = document.getElementById('user-pic');
    userPic.src = info.picture.large;
    document.getElementById('user-name').innerText = info.name.first +" "+ info.name.last
    document.getElementById('user-icon').addEventListener('mouseover', function(){
        document.getElementById('span-info').innerText = 'Hi ! My Name is';
        document.getElementById('user-name').innerText = info.name.first +" "+ info.name.last
    });
    document.getElementById('email-icon').addEventListener('mouseover', function(){
        document.getElementById('span-info').innerText = 'Hi ! My Email is';
        document.getElementById('user-name').innerText = info.email;
    });
    document.getElementById('email-icon').addEventListener('mouseover', function(){
        document.getElementById('span-info').innerText = 'Hi ! My Email is';
        document.getElementById('user-name').innerText = info.email;
    });
    document.getElementById('calendar-icon').addEventListener('mouseover', function(){
        document.getElementById('span-info').innerText = 'Hi ! My Birthday is';
        document.getElementById('user-name').innerText = info.dob.date.slice(0,10);
    });
    document.getElementById('address-icon').addEventListener('mouseover', function(){
        document.getElementById('span-info').innerText = 'Hi ! My Hometown is';
        document.getElementById('user-name').innerText = info.location.city;
    });
    document.getElementById('phone-icon').addEventListener('mouseover', function(){
        document.getElementById('span-info').innerText = 'Hi ! My Contact no. is';
        document.getElementById('user-name').innerText = info.cell;
    });
    document.getElementById('password-icon').addEventListener('mouseover', function(){
        document.getElementById('span-info').innerText = 'Hi ! My Password. is';
        document.getElementById('user-name').innerText = info.login.password;
    });
}