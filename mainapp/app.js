



var signin=localStorage.getItem('signin');
var username=localStorage.getItem('user');
var password=localStorage.getItem('pass');
var usercolor=localStorage.getItem('usercolor');

function render()
{
    if(signin=="true")
    {
        

        document.getElementById('un').innerHTML=username;
        document.getElementById('ulg').innerHTML=username[0].toUpperCase();
        document.getElementById('cir').style.backgroundColor=usercolor;

    }
    else
    {
        window.open('../index.html',target="_self");
    }
}


function logout()
{
    localStorage.removeItem('signin');
    window.open('../index.html',target="_self");
}

function loadfind()
{
    window.open('./find.html',target="_self");
}



function loadadd()
{
    window.open('./app.html',target="_self");
}

window.onload=()=>{
    render()
    var file="https://script.google.com/macros/s/AKfycbwMGRnkBwRtBp4BUkZbjCfZpAfuj9FZqiFC7AdBxQ7yQawgDsP5vsHacthKRLOUPxx2/exec";
    fetch(file)
    .then(res => res.text())
    .then(rep=>{
        var names=[]
        var phone=[]
        data = JSON.parse(rep);
        for(var i in data.content)
        {
            named=String(data.content[i][0]);
            ph=data.content[i][1];
            names.push(named);
            phone.push(ph);
        }
        
        localStorage.setItem('names',names);
        localStorage.setItem('phno',phone);
        
    });
}

function find(){
    contact=localStorage.getItem('names').split(",");
    pho=localStorage.getItem('phno').split(",");
    
    usercontact={};
   
    for(var k=0;k<contact.length;k++)
    {
        usercontact[contact[k]]=pho[k];
        
    }
    contactname=document.getElementById('name').value;
    
    if(contactname in usercontact)
    {
        fetchphone=usercontact[contactname];
        document.getElementById('msg').innerHTML="Ph No:" +fetchphone;
        
        
    }
    else
    {
        document.getElementById('msg').innerHTML="Contact was not Found";
    }
}




jQuery('#frmadd').on('submit',function(e){
    e.preventDefault();
    jQuery('#msg').html('Please wait...');
    jQuery('#btnadd').attr('disabled',true);
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbwMGRnkBwRtBp4BUkZbjCfZpAfuj9FZqiFC7AdBxQ7yQawgDsP5vsHacthKRLOUPxx2/exec',
        type:'post',
        data:jQuery('#frmadd').serialize(),
        success:function(result){
            jQuery('#frmadd')[0].reset();
            jQuery('#msg').html("Contact Added");
            jQuery('#btnadd').attr('disabled',false);
            
        }
    });
});
