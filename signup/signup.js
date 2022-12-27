
window.onload=()=>{
    redirect()
    
}

//Handle sign in
function liload()
{
    
    window.open("../index.html",target="_self");
}

var co=colors[Math.floor(Math.random()*colors.length)];
    document.getElementById('color').value=co;
    jQuery('#frmSubmit').on('submit',function(e){
        e.preventDefault();
        //jQuery('#msg').html('Please wait...');
        jQuery('#btnSubmit').attr('disabled',true);
        jQuery.ajax({
            url:'https://script.google.com/macros/s/AKfycbzPo95Wk5XK6IHdY9x2bh3TMSbUtmIewCqepMZk-slvT1B7-ui6PD3wgdduVQGPUH5lcg/exec',
            type:'post',
            data:jQuery('#frmSubmit').serialize(),
            success:function(result){
                jQuery('#frmSubmit')[0].reset();
                //jQuery('#msg').html('Thank You');
                jQuery('#btnSubmit').attr('disabled',false);
                alert("Registration Successful");
                liload();
            }
        });
    });