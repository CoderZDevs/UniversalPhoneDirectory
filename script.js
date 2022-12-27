
var username="";
var password=0;
var colors=[
"#ce2929",
"#5bbc1f",
"#4076bb",
"#1cb868",
"#412393",
"#c0328c",
"#8230f5"];

var signedin=localStorage.getItem('signin');

//Handle Pre SignedIn
function redirect()
{
    if(signedin=="true")
    {
        window.open("/mainapp/app.html",target="_self");
    }
}



//Handle Singup
contain=document.getElementById('contain');

function suload()
{
    window.open("/signup/signup.html",target="_self");
}
///---------------------------------


function sign(){
    users=localStorage.getItem('users').split(",");
    pass=localStorage.getItem('pass').split(",");
    color=localStorage.getItem('color').split(",");
    userarr={};
    usercol={};
    for(var k=0;k<users.length;k++)
    {
        userarr[users[k]]=pass[k];
        usercol[users[k]]=color[k];
    }
    username=document.getElementById('username').value;
    password=document.getElementById('password').value;
    fetchpass=userarr[username];
    if(password==fetchpass)
    {
        var signin=true;
        localStorage.setItem('signin',signin);
        localStorage.setItem('user',username);
        localStorage.setItem('pass',password);
        localStorage.setItem('usercolor',usercol[username]);
        window.open("/mainapp/app.html",target="_self");
        
        
    }
    else
    {
        window.alert("Incorrect username or password");
    }
}


window.onload=()=>{
    redirect()
    var st="https://script.google.com/macros/s/AKfycbzPo95Wk5XK6IHdY9x2bh3TMSbUtmIewCqepMZk-slvT1B7-ui6PD3wgdduVQGPUH5lcg/exec";
    fetch(st)
    .then(res => res.text())
    .then(rep=>{
        var users=[]
        var pass=[]
        var color=[]
        data = JSON.parse(rep);
        for(var i in data.content)
        {
            user_name=String(data.content[i][0]);
            pass_word=data.content[i][1];
            col=data.content[i][2];
            users.push(user_name);
            pass.push(pass_word);
            color.push(col);
        }
        
        localStorage.setItem('users',users);
        localStorage.setItem('pass',pass);
        localStorage.setItem('color',color);
    });
}
