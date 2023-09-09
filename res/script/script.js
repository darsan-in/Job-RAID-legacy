//filter flag
let fil_sk_flag = false;
let fil_qal_flag= false;
let fil_sal_flag= false;
let fil_exp_flag= false;
let fil_loc_flag= false;
let fil_wm_flag= false;

//filter props
let fskills = new Array();
let fqualifications = new Array();
let fsalary = new Array();
let fexps = new Array();
let flocations = new Array();
let fworkmode = new Array();
let filtercount=0;

$(function () {
 $(".menu-link").click(function () {
  $(".menu-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});


$(".search-bar input")
 .focus(function () {
  $(".header").addClass("wide");
 })
 .blur(function () {
  $(".header").removeClass("wide");
 });


/* //nightmode switch
const toggleButton = document.querySelector('.dark-light');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if(document.body.classList.value == 'light-mode'){
    window.localStorage.removeItem('mode');
    window.localStorage.setItem('mode','light');
  }else{
    window.localStorage.removeItem('mode');
    window.localStorage.setItem('mode','dark');
  }
});


if(window.localStorage.getItem('mode')==='light'){
  document.body.classList.toggle('light-mode');
} */


$('#signup').on('click',()=>{
  $('#signup').addClass('is-active');
  $('#login').removeClass('is-active');
  $('#logsign').removeAttr('action');
  $('#logsign').attr('action','action/signupform.php');
  document.getElementById("context").innerHTML="";
  document.getElementById("context").innerHTML+='<h3 class="img-content" style="color: white;margin-left: 20px; margin-top: 30px;">Name:<input type="text" style="margin-left: 60px; width: 300px;background-color:rgba(255, 255, 255, 0.3);" name="name" required></h3>';
  document.getElementById("context").innerHTML+='<h3 class="img-content" style="color: white;margin-left: 20px; margin-top: 30px;">Email:<input type="text" style="margin-left: 65px; width: 300px;background-color:rgba(255, 255, 255, 0.3);" name="email" required></h3>';
  document.getElementById("context").innerHTML+='<h3 class="img-content" style="color: white;margin-left: 20px; margin-top: 30px;">Password:<input id="pwd" type="text" style="margin-left: 29px; width: 300px;background-color:rgba(255, 255, 255, 0.3);" name="pass" required></h3>';
  document.getElementById("context").innerHTML+='<h3 class="img-content" style="color: white;margin-top: 30px;margin-left: 20px;">Confirm Password:<input id="cp" onfocusout="passvalidator()" type="text" style="margin-left: 29px; width: 300px;background-color:rgba(255, 255, 255, 0.3);" required></h3>';
  document.getElementById("context").innerHTML+='<h3 class="img-content" style="color: white;margin-left: 20px; margin-top: 30px;">Mobile:<input type="text" style="margin-left: 55px; width: 300px;background-color:rgba(255, 255, 255, 0.3);" name="mobile" required></h3>';
  document.getElementById("context").innerHTML+='<button type="submit" class="content-button" style="margin-left: 165px;margin-top: 40px;">SignUp</button>';
  document.getElementById("context").innerHTML+='<p id="validator" style="margin-left: 425px;"></p>';
});


function passvalidator(){
  pass=document.getElementById('pwd').value;
  cpass=document.getElementById('cp').value;
  if(pass===cpass){
    $('#logsign').attr('action','action/signupform.php');
    document.getElementById("validator").innerHTML='';
  }
  else{
    document.getElementById("validator").innerHTML='Check password';
    $('#logsign').removeAttr('action');
    alert("check your password");
  }
}


$('#login').on('click',()=>{
  $('#login').addClass('is-active');
  $('#signup').removeClass('is-active');
  $('#logsign').removeAttr('action');
  $('#logsign').attr('action','action/loginform.php');
  document.getElementById("context").innerHTML="";
  document.getElementById("context").innerHTML+='<h3 class="img-content" style="color: white;margin-left: 20px;margin-top: 30px;">Email:<input type="text" style="margin-left: 65px; width: 300px;background-color:rgba(255, 255, 255, 0.3);" name="email"></h3><h3 class="img-content" style="margin-top: 30px;margin-left: 20px;color: white;">Password:<input type="text" style="margin-left: 30px; width: 300px;background-color:rgba(255, 255, 255, 0.3);" name="pass"></h3><button id="login" type="submit" class="content-button" style="margin-left: 170px;margin-top: 30px;">Login</button>';
});


/* function otp_gen(){
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++ ) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  alert(OTP);
} */


function logout(){
  window.localStorage.clear();
  window.location.assign('logout.html');}

$('#home').on('click',()=>{
  window.localStorage.clear();
  window.location.reload(true);
  window.location.assign('/');
});


function resume(){
  uemail = window.localStorage.getItem('umail');
  document.getElementById("ctitle").innerHTML="Your Resume";
  document.getElementById("context").innerHTML='<form method="post" action="action/getcv.php" enctype="multipart/form-data"><div style="margin-left:70px"><div style="display: flex;"><iframe id="resume" src="uploads/cv/'+uemail+'_cv.pdf"></iframe></div><div style="display: flex; margin-left:95px"><input type="file" id="cv-btn" class="content-button" hidden name="resume"><label class="content-button" for="cv-btn" style="margin-left:50px;color: rgb(0, 0, 0); background-color: yellowgreen;">Upload New Resume</label></div><span id="file-chosen" style="display:flex;margin-top:-25px; margin-left:360px"></span><div style="display:flex;margin-left:195px;margin-top:20px;"><input type="submit" class="content-button"></div><input type="text" name="email" value="'+uemail+'" hidden></form></div>';
  
  /*file browser - chosen file display*/
  const actualBtn = document.getElementById('cv-btn');
  const fileChosen = document.getElementById('file-chosen');
  actualBtn.addEventListener('change', function(){
    fileChosen.textContent = '"'+this.files[0].name+'"'+" is Selected"
  })
  /*file browser - chosen file display*/
}


function goprofile(){
  window.location.replace('profile.html');
}


$('.menu-circle').on('click',()=>{
  if(window.location.pathname.includes('login.html') || window.location.pathname.includes('search.html')){
    alert('No More Back');
  }else if(window.location.pathname.includes('home.html')){
    window.location.assign('search.html');
  }
  else if(window.location.pathname.includes('logout.html') || window.location.pathname.includes('signup+.html')){
    window.location.assign('login.html');
  }
  else if(window.location.pathname.includes('profile.html')){
    window.location.assign('home.html');
  }
});

/* 
//Ping check for file availablity
function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  if(http.status != 404)return true;
  else return false;}
//Ping check closed */


let uskills, uframeworks, udegree, ucontact;
uemail = window.localStorage.getItem('umail');
function getaboutuser(){
  $.ajax({
    type: "POST",
    url: 'action/getaboutuser.php',
    data: {email:uemail},
    success: function(res){
      const data = JSON.parse(res);
      uskills=data.skills;
      udegree=data.updegree;
      ucontact=data.mobile;
      uframeworks=data.frameworks;
    },
    error: function(xhr, status, error){
    console.error(xhr);}
   });
}


function personaltab(){
  document.getElementById("ctitle").innerHTML="Your Personal Information";
  document.getElementById("context").innerHTML='<form method="post" action="action/getdp.php" enctype="multipart/form-data"><div class="pinfoupdate"><div class="uimgcontainer"><h2>Profile picture</h2><img id="dp" src="uploads/userdp/'+uemail+'.jpeg"><input type="file" id="dp-browser" hidden name="dppic"><label for="dp-browser" style="color: rgb(0, 0, 0);"><span id="editdp" hidden><img src="res/img/edit.png"></span></label></div><h3 class="img-content" >Email:<input id="emailinp" type="text" value="'+uemail+'" disabled style="margin-left:50px;"></h3><h3 class="img-content" style="margin-top: 30px;">Contact:<input id="contactinp" type="text" value="'+ucontact+'"disabled name="contact" style="margin-left: 30px;"></h3><input name="email" value="'+uemail+'" hidden></div></form><button onclick="updateselfinfo()" class="content-button" id="changebtn">Edit</button>';
}


function updateselfinfo(){
  uemail = window.localStorage.getItem('umail');
  if($('#contactinp').prop('disabled')){
  $('#contactinp').removeAttr('disabled');
  $('#editdp').removeAttr('hidden');
  $('#changebtn').html("Done");
  $("body").on('keyup', function (e) {
    e.preventDefault();
    if (e.key === 'Escape' || e.keyCode === 27) {
      $('#contactinp').prop('disabled',true);
      $('#editdp').prop('hidden',true);
      $('#changebtn').html("Edit");}});}
  else{
    const contact = $('#contactinp').val();
    $('#contactinp').prop('disabled',true);
    $('#editdp').prop('hidden',true);
    $('#changebtn').html("Edit");
    $.ajax({
      type: "POST",
      url: 'action/userinfoup.php',
      data: {data: [uemail,contact]},
      success: function(data){
        /* console.log(data); */
        if (!Boolean($('#dp-browser')[0].files.length === 0)){
          $('form').submit();} 
      },
      error: function(xhr, status, error){
      console.error(xhr);}
    });
  }
}


$('#preferencetab').on('click',()=>{
  document.getElementById("ctitle").innerHTML="Your Job Preference";
  document.getElementById("context").innerHTML='<div class="prefertab"><h2>Edit Preference</h2><div><h3 class="img-content">Skills:</h3><textarea id="taskills" disabled name="skills">'+uskills+'</textarea></div><div><h3 class="img-content">Frameworks:</h3><textarea id="tafw" disabled name="frameworks">'+uframeworks+'</textarea></div><div><h3 class="img-content">Higher Qualification:</h3><textarea id="taqual" disabled name="hdegree">'+udegree+'</textarea></div><button onclick="changeprefer()" class="content-button">Edit</button></div>';
});


function changeprefer(){
  uemail = window.localStorage.getItem('umail');
  if($('#taskills').prop('disabled')){
  $('#taskills').removeAttr('disabled');
  $('#tafw').removeAttr('disabled');
  $('#taqual').removeAttr('disabled');
  $('.prefertab button').html("Done");
  $("body").on('keyup', function (e) {
    e.preventDefault();
    if (e.key === 'Escape' || e.keyCode === 27) {
      $('#taskills').prop('disabled',true);
      $('#tafw').prop('disabled',true);
      $('#taqual').prop('disabled',true);
      $('.prefertab button').html("Edit");}
  });
}else{
    $('#taskills').prop('disabled',true);
    $('#tafw').prop('disabled',true);
    $('#taqual').prop('disabled',true);
    $('.prefertab button').html("Edit");
    //posting to server
    const skills = $('#taskills').val();
    const frameworks = $('#tafw').val();
    const degree = $('#taqual').val(); 

     $.ajax({
      type: "POST",
      url: 'action/preferinfoup.php',
      data: {data: [uemail,skills,frameworks,degree]},
      success: function(data){
        if(data == 'Updated'){
          window.location.reload();}
        else{
          alert("Error updating info\nTry again");
        }
      },
      error: function(xhr, status, error){
      console.error(xhr);}
     });
  }
}


//skill filter ops
let pyst;
let jast;
let gost;
let cpst;
let csst;
let phst;
let jsst;
let rust;

function skills_list(){
  fil_sk_flag = true;//proof flag for dispatch event
  if(document.getElementById('hskills').hidden == true){
    /* console.log('skilled clicked'); */
    html=document.getElementById("skill-list");
    document.getElementById("skill-list").removeChild(html.lastChild);
    document.getElementById("skill-list").removeChild(html.lastChild);
    document.getElementById('hskills').hidden=false;
  }
}

function dispatch_skill(){
  if(fil_sk_flag){//avoid unwanted mouseleave event
    fskills = new Array();

    if(document.getElementById('sk_py').checked){
      //checked status to innerhtml render
      pyst = 'checked';
      fskills.push('python');
      filtercount+=1;
    }else{
      pyst = '';
    } 
    
    if(document.getElementById('sk_ja').checked){
      jast = 'checked';
      fskills.push('java');
      filtercount+=1;
    }else{
      jast = '';
    }
    
    if(document.getElementById('sk_go').checked){
      gost = 'checked';
      fskills.push('go');
      filtercount+=1;
    }else{
      gost = '';
    }

    if(document.getElementById('sk_cp').checked){
      cpst = 'checked';
      fskills.push('c++');
      filtercount+=1;
    }else{
      cpst = '';
    }
    
    if(document.getElementById('sk_cs').checked){
      csst = 'checked';
      fskills.push('c#');
      filtercount+=1;
    }else{
      csst = '';
    }

    if(document.getElementById('sk_ph').checked){
      phst = 'checked';
      fskills.push('php');
      filtercount+=1;
    }else{
      phst = '';
    }

    if(document.getElementById('sk_js').checked){
      jsst = 'checked';
      fskills.push('javascript');
      filtercount+=1;
    }else{
      jsst = '';
    }

    if(document.getElementById('sk_ru').checked){
      rust = 'checked';
      fskills.push('ruby');
      filtercount+=1;
    }else{
      rust = '';
    }

    document.getElementById('skill-list').innerHTML='<div style="margin-top: 170px;" hidden id="hskills"><p class="filter-title">Skills</p><ul><li><input type="checkbox" name="skills" value="python" id="sk_py" '+pyst+'>Python</li><li><input type="checkbox" name="skills" value="java" id="sk_ja"  '+jast+'>Java</li><li><input type="checkbox" name="skills" value="go" id="sk_go" '+gost+'>Go</li><li><input type="checkbox" name="skills" value="C++" id="sk_cp" '+cpst+'>C++</li><li><input type="checkbox" name="skills" value="C#" id="sk_cs" '+csst+'>C#</li><li><input type="checkbox" name="skills" value="php" id="sk_ph" '+phst+'>PHP</li><li><input type="checkbox" name="skills" value="javascript" id="sk_js" '+jsst+'>JavaScript</li><li><input type="checkbox" name="skills" value="ruby" id="sk_ru" '+rust+'>Ruby</li></ul></div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cBBwcgE3NX42oAAEKPSURBVHja7d17dBXV+TfwZ59AQkgQuYqCCCgQ5CIoeMHaCsR7tWoLqBWriHgXL31rf+2r8nuXfX/6auWqCAZQLNV6r6i0kHDxhxeK/rgFNYAIyE0ggCQhCcnZ3/eP0VprEnLOzJznzMz3s5ara3WRc55nz8zez9kzs7cIERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERURqA7dsXmDQJKC6GLS+HLS8HiouBiRNh+/TRjo+IiIg8BJuVBTz1FBCPo161tcDUqbCZmdrxEhERkUvO4L9oERrLFhWxCCAiIgo4YNq0Rg/+/zRlinbcRERElCTnnn9D0/4N3Q7o3Vs7fiLyT0w7ACLykRkzRiSWxHWekSG48Ubt8ImIiCgJwLp1if/6/9batdrxE5F/jHYAROQfoKxMJDc3ub8uKzPmqKO0cyAif7AAIAoxAHDz98YY9hFEIcVnAIiIiCKIBQAREVEEsQAgIiKKIBYAREREEcQCgIiIKIJYABAREUUQCwAiIqIIYgFAREQUQSwAiIiIIogFABERUQSxACAiIoogFgBEREQRxAKAiIgoglgAEBERRRALACIioghiAUBERBRBLACIiIgiiAUAERFRBLEAICIiiiAWAERERBHEAoCIiCiCWABQQoC8PGDyZGDNGmDfPqCqCli1Cpg4EejdWzs+ojCD7dPHudZWr3auvX37nGtx8mQgL087PiIKIaBZM6fjicdRr9paYPJk2MxM7XjJAZe04ycHbFYWMGVKw9dfPA5MnAiblaUdLxGFBGxWFmxhYaNHDbtgATuh9MACIPiAZs0Sv/5YhBORB4CpUxMfOiZO1I6bWACEATBpUuJHbvJk7biJKOBg+/ZteNqx3p8hFjjzTO34o44FQLABZ57pXEuJqq2F7dNHO34iCrDkfn18WwN8+CFgjHYO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"/></svg>'+'Skills';
    
    fil_sk_flag = false; //reset onclick proof flag
    filterup();
  }
}


//degree filter ops
let mscst;
let bscst;
let mcast;
let bcast;
let btst;
let mtst;
let phdst;

function degree_list(){
  fil_qal_flag = true;
  if(document.getElementById('hdegree').hidden == true){
    html=document.getElementById("degree-list");
    document.getElementById("degree-list").removeChild(html.lastChild);
    document.getElementById("degree-list").removeChild(html.lastChild);
    document.getElementById('hdegree').hidden=false;
  }
}

function dispatch_degree(){
  if(fil_qal_flag){
    fqualifications = new Array();

    if(document.getElementById('d_msc').checked){
      mscst = 'checked';
      fqualifications.push('msc');
      fqualifications.push('bsc');
      filtercount+=1;
    }else{
      mscst = '';
    }

    if(document.getElementById('d_bsc').checked){
      bscst = 'checked';
      fqualifications.push('bsc');
      fqualifications.push('bca');
      filtercount+=1;
    }else{
      bscst = '';
    }
    
    if(document.getElementById('d_mca').checked){
      mcast = 'checked';
      fqualifications.push('mca');
      fqualifications.push('bca');
      filtercount+=1;
    }else{
      mcast = '';
    }
    
    if(document.getElementById('d_bca').checked){
      bcast = 'checked';
      fqualifications.push('bca');
      fqualifications.push('bsc');
      filtercount+=1;
    }else{
      bcast = '';
    }
    
    if(document.getElementById('d_bt').checked){
      btst = 'checked';
      fqualifications.push('btech');
      filtercount+=1;
    }else{
      btst = '';
    }
    
    if(document.getElementById('d_mt').checked){
      mtst = 'checked';
      fqualifications.push('mtech');
      filtercount+=1;
    }else{
      mtst = '';
    }
    
    if(document.getElementById('d_phd').checked){
      phdst = 'checked';
      fqualifications.push('phd');
      filtercount+=1;
    }else{
      phdst = '';
    }
    
    document.getElementById("degree-list").innerHTML='<div style="margin-top: 170px;" hidden id="hdegree"><p class="filter-title">Degree</p><ul><li><input type="checkbox" id="d_msc" '+mscst+'>M.Sc</li><li><input type="checkbox" id="d_bsc" '+bscst+'>B.Sc</li><li><input type="checkbox" id="d_mca" '+mcast+'>MCA</li><li><input type="checkbox" id="d_bca" '+bcast+'>BCA</li><li><input type="checkbox" id="d_bt" '+btst+'>B.Tech</li><li><input type="checkbox" id="d_mt" '+mtst+'>M.Tech</li><li><input type="checkbox" id="d_phd" '+phdst+'>Phd</li></ul></div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" xlink:href="data:image/png;base64,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"/></svg>Qualification';

    fil_qal_flag = false;
    filterup();
  }
}

//salary filter props
let l12st;
let l23st;
let l34st;
let l45st;
let l56st;
let l67st;
let l7pst;
let l14pst;

function salary_filter(){
  fil_sal_flag = true;
  if(document.getElementById('hsalary').hidden == true){
    html=document.getElementById("salary-filter")
    document.getElementById("salary-filter").removeChild(html.lastChild)
    document.getElementById("salary-filter").removeChild(html.lastChild)
    document.getElementById('hsalary').hidden=false;}
}

function dispatch_salary(){
  if(fil_sal_flag){
    fsalary = new Array();

    if(document.getElementById('l1_2').checked){
      l12st = 'checked';
      fsalary.push(100000);
      filtercount+=1;
    }else{
      l12st = '';
    }

    if(document.getElementById('l2_3').checked){
      l23st = 'checked';
      fsalary.push(200000);
      filtercount+=1;
    }else{
      l23st = '';
    }

    if(document.getElementById('l3_4').checked){
      l34st = 'checked';
      fsalary.push(300000);
      filtercount+=1;
    }else{
      l34st = '';
    }
    
    if(document.getElementById('l4_5').checked){
      l45st = 'checked';
      fsalary.push(400000);
      filtercount+=1;
    }else{
      l45st = '';
    }

    if(document.getElementById('l5_6').checked){
      l56st = 'checked';
      fsalary.push(500000);
      filtercount+=1;
    }else{
      l56st = '';
    }
    
    if(document.getElementById('l6_7').checked){
      l67st = 'checked';
      fsalary.push(600000);
      filtercount+=1;
    }else{
      l67st = '';
    }

    if(document.getElementById('l7p').checked){
      l7pst = 'checked';
      fsalary.push(700000);
      filtercount+=1;
    }else{
      l7pst = '';
    }

    if(document.getElementById('l14p').checked){
      l14pst = 'checked';
      fsalary.push(1400000);
      filtercount+=1;
    }else{
      l14pst = '';
    }

    document.getElementById('salary-filter').innerHTML='<div hidden style="margin-top: 170px;" id="hsalary"><p class="filter-title">Salary</p><ul><li><input type="checkbox" id="l1_2" '+l12st+'>1L-2L</li><li><input type="checkbox" id="l2_3" '+l23st+'>2L-3L</li><li><input type="checkbox" id="l3_4" '+l34st+'>3L-4L</li><li><input type="checkbox" id="l4_5" '+l45st+'>4L-5L</li><li><input type="checkbox" id="l5_6" '+l56st+'>5L-6L</li><li><input type="checkbox" id="l6_7" '+l67st+'>6L-7L</li><li><input type="checkbox" id="l7p" '+l7pst+'>7L +</li><li><input type="checkbox" id="l14p" '+l14pst+'>14L +</li></ul></div><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" xlink:href="data:image/png;base64,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"/></svg>Salary';
    
    fil_sal_flag = false;
    /* display_filter(fsalary); */
    filterup();
  }
}

//workmode filter props
let rst;
let onst;
let hyst;

function workmode_filter(){
  fil_wm_flag = true;
  if(document.getElementById('hwmode').hidden == true){
    html=document.getElementById("work-mode");
    document.getElementById("work-mode").removeChild(html.lastChild);//removing text of work mode
    document.getElementById("work-mode").removeChild(html.lastChild);//removing img of work mode
    document.getElementById('hwmode').hidden=false;
  }
}

function dispatch_workmode(){
  if(fil_wm_flag){
    fworkmode = new Array();

    if(document.getElementById('w_rm_sts').checked){
      rst = 'checked';
      fworkmode.push('remote');
      filtercount+=1;
    }else{
      rst = '';
    }

    if(document.getElementById('w_on_sts').checked){
      onst = 'checked';
      fworkmode.push('onsite');
      filtercount+=1;
    }else{
      onst ='';
    }
    
    if(document.getElementById('w_hy_sts').checked){
      hyst = 'checked';
      fworkmode.push('hybrid');
      filtercount+=1;
    }else{
      hyst = '';
    } 
    
    document.getElementById('work-mode').innerHTML='<div hidden id="hwmode"><p>Mode</p><ul><li><input type="checkbox" id="w_rm_sts" '+rst+'>Remote</li><li><input type="checkbox" id="w_on_sts"'+onst+'>Onsite</li><li><input type="checkbox" id="w_hy_sts" '+hyst+'>Hybrid</li></ul></div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" xlink:href="data:image/png;base64,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"/></svg>Work Mode';
    
    fil_wm_flag = false;
    /* display_filter(fworkmode); */
    filterup();
  }
}

//exp filter props
let fst;
let st1;
let st2;
let st3;
let st4;
let st5;
let st6;
let st7;

function exp_filter(){
  fil_exp_flag = true;
  if(document.getElementById('hexp').hidden == true){
    html=document.getElementById("exp-filter");
    document.getElementById("exp-filter").removeChild(html.lastChild);
    document.getElementById("exp-filter").removeChild(html.lastChild);
    document.getElementById('hexp').hidden=false;
  }
}

function dispatch_exp(){
  if(fil_exp_flag){
    fexps = new Array();

    if(document.getElementById('exp_0').checked){
      fst = 'checked';
      fexps.push(0);
      filtercount+=1;
    }else{
      fst = '';
    }
    
    if(document.getElementById('exp_1').checked){
      st1 = 'checked';
      fexps.push(1);
      filtercount+=1;
    }else{
      st1 ='';
    }
    
    if(document.getElementById('exp_2').checked){
      st2 = 'checked';
      fexps.push(2);
      filtercount+=1;
    }else{
      st2 = '';
    }
    
    if(document.getElementById('exp_3').checked){
      st3 = 'checked';
      fexps.push(3);
      filtercount+=1;
    }else{
      st3 = '';
    } 
    
    if(document.getElementById('exp_4').checked){
      st4 = 'checked';
      fexps.push(4);
      filtercount+=1;
    }else{
      st4 = '';
    } 
    
    if(document.getElementById('exp_5').checked){
      st5 = 'checked';
      fexps.push(5);
      filtercount+=1;
    }else{
      st5 = '';
    } 
    
    if(document.getElementById('exp_6').checked){
      st6 = 'checked';
      fexps.push(6);
      filtercount+=1;
    }else{
      st6 = '';
    } 
    
    if(document.getElementById('exp_7').checked){
      st7 = 'checked';
      fexps.push(7);
      filtercount+=1;
    }else{
      st7 = '';
    }  

    document.getElementById('exp-filter').innerHTML='<div style="margin-top: 170px;" hidden id="hexp"><p style="margin-top:-170px;">Exp</p><ul><li><input type="checkbox" id="exp_0"'+fst+'>Fresher</li><li><input type="checkbox" id="exp_1" '+st1+'>1 year + </li><li><input type="checkbox" id="exp_2" '+st2+'>2 year + </li><li><input type="checkbox" id="exp_3" '+st3+'>3 year + </li><li><input type="checkbox" id="exp_4" '+st4+'>4 year + </i><li><input type="checkbox" id="exp_5" '+st5+'>5 year + </li><li><input type="checkbox" id="exp_6" '+st6+'>6 year +</li><li><input type="checkbox" id="exp_7" '+st7+'>7 year +</li></ul></div><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cBBwcvEG3Grh8AADXrSURBVHja7d1puBXVmff/312MIiqgBBxQMHECh45THmzjiAMKzjigoMYxJlHbx476T+eKJjG2nW5bk0cTNSMaoxwVBWechYgD0Shg4gACogZkUqYDnLr/LyoImAPss8/ee9Wu9f1c13kRyTl117D3+q1Vq1ZJAAAAAIrNfeON3UeP9nTTTUPXAgAAasT99793d3e/++7QtQAAgBpwP/tsX8s3vhG6JgAAUEWe7rij+6efrh0Ali71dPfdQ9cGAACqwL1jR/fXX/dmTZrk3qlT6BoBAECFeXr77b5ev/pV6BoBAEAFuZ98spciHTYsdK0AAKACPP3KV9wXLiwpAPhnn7nvvHPomgEAQCt42qGD+8SJpTX+q7zxhvtGG4WuHQAAlMn9//2/ljX+q9x8c+jaAQBAGdxPPLG8xn+V004LvQ8AAKAFPN12W/e5c1sXABYscN9++9D7AgAASuBpu3buf/pT6xr/f0hfecXT9u1D7xMAANgAT//nfyrS+H8eAm64IfQ+AQCA9XA/6ij3NK1oAPA0dT/uuND7BgAAmuHpNtt4OmdOZRv/VebNc+/dO/Q+AgCANXjatq37Cy9Up/FfNRAwYYKn7dqF3lcAAPAPnv7kJ1Vt/D8PAT/5Seh9BQAAktwPPth95cqaBABPU08HDw69zwAARM3THj3cP/qoNo3/KrNnu2+1Veh9BwAgSu5J4unYsbVt/Fd59ln3Nm1CHwMAAKLjfvXVYRr/Va6+OvQxAAAgKu4HHli7+/7r0tTk6YABoY8FAABR8LR7d/dZs8I2/qt8/LF7z56hjwkAAIXmbuY+enToZn9tTz/NfAAAAKrI/aqrQjf3zbvqqtDHBgCAQvL0a19zX748dFPfvBUrPN1//9DHCACAQnHv2tV92rTQzfz6zZzp6RZbhD5WAAAUQnbff9So0M17aR5+2N0s9DEDAKDuuV92WehmvWUuuyz0MQMAoK55uvfe7o2NoZv0llm+3L1//9DHDgCAuuTpZpt5+t57oZvz8kyf7t6tW+hjCABA3XG/667QzXjr3Htv6GMIAEBdcf/Wt0I335XxrW+FPpYAANQFT3fbzX3JktBNd2UsW+a+556hjymA5vHIDpATnnbuLL3yimznnUPXUjnvvivfay9LPv00dCUA1paELgDAP9gttxSr8Zekr3xFdvvtoasAACCX3M85J/SAfVWl554b+hgDWBu3AIDA3Pv1k15+WerUKXQt1bNsmfz//B9L/vKX0JUAyBAAgIDcO3aUXnpJ2n330LVU39tvy/fe25LPPgtdCQDmAABh+c03x9H4S9KOO0o33hi6CgAAgnI/5ZTQt+bDzAcYPjz0sQfALQCgptw331x+9NGyIUOkI4+U2rYNXVPtpan04otSQ4PU0GD24YehKwJiRAAAqoxGf33WDAMjR5p99FHoioBYEACAKnDv1k0+aFDW6B9xhNSuXeia8m/NMHDPPWYffxy6IqDICABAhbh37SofPJhGvxKamqQJE6SGBvndd1vy97+HrggoGgIA0AruXbrIjzkma/QPP1xq3z50TcWzZhj44x8tmT07dEVAERAAgBbydLPNpGOPpdEPYc0wcNddlsyZE7oioF4RAIASuHfqJD/00KzRP/HEYq/aVy+amuTPPCPdcYf04IOWLFwYuiKgnhAAgHVw32gj+YABsiFD5CecINt449A1YV0aG6WxY+UNDdIDD/D2QWDDCADAGtZq9HX88VLnzqFrQkstWyY9+WQWBkaNYulhoHkEAETPvWNH+WGH0egX0Zph4P77LVm0KHRFQF4QABCltRv9446TNtkkdE2otqVLpaeekjc0yO67z2zx4tAVASERABANTzt0kA4/PGv0jz1W2nTT0DUhFMIAQABAobm3aSPv3182bJh0yinSZpuFrgl5s2SJ9PTT8hEjpNGjLWlsDF0RUAsEABTO6kZ/yBDptNOk7t1D14R6sWCBNGZMNmfg8cctWb48dEVAtRAAUAhrN/qnnip96Uuha0K9Iwyg2AgAqFvuSSLfb7+s0T/lFKlHj9A1oajmz5ceeigLA489ZsmKFaErAlqLAIC64+kWW8h+9KNsRT6G91Frc+ZI990n//73Lfnkk9DVAOVKQhdQ7zzljW81Z3PnSr160fgjjO7d5V/+cnYdIhS+e1uPANBqd9/tfuyxoauIiZm7/BvfkHhFLALwTz6RnXmmmXvoUmLlftRRsnvv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"/></svg>Experience';
    
    fil_exp_flag = false;
    /* display_filter(fexps); */
    filterup();
  }
}

//place filter props
let chnst;
let banst;
let cbest;
let delst;
let kolst;
let hydst;
let anyst;
let pust;

function place_filter(){
  fil_loc_flag = true;
  if(document.getElementById('hplace').hidden == true){
    html=document.getElementById("place-filter");
    document.getElementById("place-filter").removeChild(html.lastChild);
    document.getElementById("place-filter").removeChild(html.lastChild);
    document.getElementById('hplace').hidden=false;
  }
}

function dispatch_place(){
  if(fil_loc_flag){
    flocations = new Array();
    
    if(document.getElementById('chn_st').checked){
      chnst='checked';
      flocations.push('chennai');
      flocations.push('madras');
      filtercount+=1;
    }else{
      chnst='';
    }
    
    if(document.getElementById('ban_st').checked){
      banst='checked';
      flocations.push('bangalore');
      flocations.push('bengaluru');
      filtercount+=1;
    }else{
      banst='';
    }
    
    if(document.getElementById('cbe_st').checked){
      cbest='checked';
      flocations.push('coimbatore');
      filtercount+=1;
    }else{
      cbest='';
    }
    
    if(document.getElementById('del_st').checked){
      delst='checked';
      flocations.push('delhi');
      flocations.push('new delhi');
      filtercount+=1;
    }else{
      delst='';
    }
    
    if(document.getElementById('kol_st').checked){
      kolst='checked';
      flocations.push('kolkata');
      filtercount+=1;
    }else{
      kolst='';
    }
    
    if(document.getElementById('hyd_st').checked){
      hydst='checked';
      flocations.push('hydrabad');
      filtercount+=1;
    }else{
      hydst='';
    }
    
    if(document.getElementById('any_st').checked){
      anyst='checked';
      flocations.push('india');
      filtercount+=1;
    }else{
      anyst='';
    }
    
    if(document.getElementById('pu_st').checked){
      pust='checked';
      flocations.push('pune');
      filtercount+=1;
    }else{
      pust='';
    }
    
    document.getElementById('place-filter').innerHTML='<div style="margin-top: 170px;" hidden id="hplace"><p class="filter-title">Place</p><ul><li><input type="checkbox" id="chn_st" '+chnst+'>Chennai</li><li><input type="checkbox" id="ban_st" '+banst+'>Bangalore</li><li><input type="checkbox" id="cbe_st" '+cbest+'>Coimbatore</li><li><input type="checkbox" id="del_st" '+delst+'>Delhi</li><li><input type="checkbox" id="kol_st" '+kolst+'>Kolkata</li><li><input type="checkbox" id="pu_st" '+pust+'>Pune</li><li><input type="checkbox" id="hyd_st" '+hydst+'>Hyderabad</li><li><input type="checkbox" id="any_st" '+anyst+'>Anywhere in IN</li></ul></div><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" xlink:href="data:image/png;base64,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"/></svg>Location';
    
    fil_loc_flag = false;
    /* display_filter(flocations); */
    filterup();
  }
}


/*core page search event starts*/
$(".search-bar input").on('keyup', function (e) {
  e.preventDefault();
  if (e.key === 'Enter' || e.keyCode === 13) {
      const qry = document.getElementById("sbar").value;
      window.localStorage.removeItem('query'); 
      window.localStorage.setItem('query',qry);
      window.location.reload();
      /* $('.load-1').removeAttr('hidden');
      $.ajax({
        type: "POST",
        url: 'action/jobquery.php',
        data: {qry: qry},
        success: function(data){
        data = JSON.parse(data)
        console.log(typeof(data));
        sresjobs = data;
        $(".menu-link").removeClass("is-active");
        $(document.getElementById('jobtab')).addClass("is-active");
        firstindex = 0;
        lastindex = 10;
        atpageno = 0;
        $('#prev-btn').hide();
        pagination(sresjobs.length);
        joblister(data.slice(firstindex,lastindex));
        },
        error: function(xhr, status, error){
        console.error(xhr);}
      }); */
  }
});
/*core page search event close*/


/*pause execution timer*/
function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}
/*pause execution timer ends*/


$(window).on('load',function(){
  if(!Boolean(window.location.pathname.includes('login.html') || window.location.pathname.includes('logout.html'))){
    if(!Boolean(window.localStorage.getItem('umail'))){
      window.location.assign('login.html');
      alert("session expired, Login again");
    }else{(()=>{
        uemail = window.localStorage.getItem('umail');
        $('.header-profile img:nth-last-of-type(1)').remove();
        document.getElementById('hbar').innerHTML += '<img class="profile-img" onclick="goprofile()" src="uploads/userdp/'+uemail+'.jpeg" alt="'+uemail+'">';
      })();
    }
  }
});


//search page query
function jobquery(){
  const qry = document.getElementById("query").value;
  window.localStorage.removeItem('query'); 
  window.localStorage.setItem('query',qry);
  window.location.assign('home.html');
}


$("#query").on('keyup', function (e){
  e.preventDefault();
  if (e.key === 'Enter' || e.keyCode === 13) {
    jobquery();
  }});


$('#searchbtn').on('click',function(){
  jobquery();
});


/* Cookies operations */
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
/* Cookies op ends */

$('.dark-light').remove();


$('#next-btn').on('click',()=>{
  
  $('.next-page img').css("transform","translate(10%, 10%)");
  
  if(atpageno < totalpages-1){
   /*  console.log(`atpage is ${atpageno}`);
    console.log(`going ${atpageno+1}`); */
    atpageno += 1;
    pagination(sresjobs.length);
    jobcard([...sresjobs.slice(firstindex,lastindex)]);
    $('#prev-btn').show();
  }else{
    alert("No more next-page !");
  }
  
  if(atpageno === totalpages-1){
    $('#next-btn').hide();
  }

});


$('#next-btn').on('mouseleave',()=>{
  $('#next-btn').css("transform","translate(0%, 0%)");
});


$('#prev-btn').on('click',()=>{
  
  $('.next-page img').css("transform","translate(10%, 10%)");
  
  if(atpageno == 1){
    $('#prev-btn').hide();
  }
  
  if(atpageno >= 1){
   /*  console.log(`atpage is ${atpageno}`);
    console.log(`going ${atpageno-1}`); */
    atpageno -= 1
    pagination(sresjobs.length);
    jobcard([...sresjobs.slice(firstindex,lastindex)]);
    $('#next-btn').show();
  }else{
    alert("No more previous !");
  }
});


$('#prev-btn').on('mouseleave',()=>{
  $('#prev-btn').css("transform","translate(0%, 0%)");
});

/* function display_filter(array){
  array.forEach(element => {
    console.log(element);
  });
  filterup();
  console.log('filter was invoked');
} */