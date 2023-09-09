//pagination props
let firstindex;
let lastindex;
let atpageno = 0 ; 
let totalpages;

let wlflag;

//sorby filter
let salup_flag=false;
let timesortup_flag=false;

//core job results
let sresjobs;
let persistres;

let uemail = window.localStorage.getItem('umail');
const jobview = document.getElementById("jobview");


function jobcard(jobs,flag){
    $('.content-wrapper').scrollTop(0);
    jobview.innerHTML="";
    
    let imgpath="res/img/wishlist.png"
    let func = 'addtowlist';
    if(flag){
        imgpath="res/img/delete.png"
        func = 'removewl';
    }
    
    for( let i=0;i<jobs.length;i++ ){
        let link = `"${jobs[i].link}"`;
        let jd = jdlimit(jobs[i].jd);
        jobview.innerHTML+="<div class='content-wrapper-header' style='margin-top: 5px;'>"+
        "<div class='content-wrapper-context'><h3 class='img-content jobtitle' style='display: flex;margin-top:-15px'>"+
        jobs[i].title+"<p style='margin-left:10px ;' id='cname'>("+jobs[i].company+")</p></h3>"+
        "<div class='content-text jobskills' style='text-align:left;vertical-align: text-top;"+
        " margin-top: -10px; font-size: medium;'>Skills: "+jobs[i].skills+"</div><p id='job-desc'"+
        "class='jobdesc' style='margin-top: 8px; font-size: smaller; font-style: normal; font-family:sans-serif;'>"+
        jd+"</p><div class='jdsubhead'><p>Date Posted : <span>"+jobs[i].htime+"</span> </p><p>Location : <span>"+jobs[i].location.slice(0,20)+"</span></p><p>Salary : <span>"+jobs[i].salary_range+"</span> </p></div>"+
        "<div style='margin-top: -10px;'><button class='content-button' onclick='window.open("+link+")'>Apply"+
        "</button><button class='content-button' style='margin-left: 10px;background-color: rgb(47, 255, 99); color: black;' onclick='navigator.share("+`"${jobs[i].title}", "${link}"`+")'>"+
        "Share</button><img class='wlstimg' src='"+imgpath+"' onclick='"+func+"("+jobs[i].id+")'></div></div></div>";    
    }

    $('.load-1').attr('hidden',true);
    if(!flag){
      /* console.log(`job len is ${sresjobs.length}`); */
      totalpages = Math.round(sresjobs.length / 10);
     /*  if(sresjobs.length % 10 != 0 && totalpages != 1 ){
        totalpages +=1;
      } */
      if(totalpages <=1){
        $('.page-nav').hide();
      }
      else{
        $('.page-nav').show();
        $('#next-btn').show();
      }
      /* console.log(`totalpages is ${totalpages}`); */
    }
}


function joblister(job){
  /* console.log(`${job.length} job passed in joblister`); */
  wlflag = false;
  jobcard(job,wlflag);
}


function jdlimit(desc){
  if(desc.length > 70){
      //70 is max-len
      return desc.slice(0,70)+" (More ->)";
  }
  else{return desc; }
}


$(window).on("load",()=>{
    $('.load-1').removeAttr('hidden');
    const qry = window.localStorage.getItem('query'); 
    
    $.ajax({    
        type: "POST",
        url: 'action/jobquery.php',
        data: {qry: qry},
        success: function(data){
          data = JSON.parse(data);
          sresjobs = data;
          pagination(sresjobs.length);//it make f-ind and l-ind
          joblister(data.slice(firstindex,lastindex));
        },
        error: function(xhr, status, error){
        console.error(xhr);}
       });
});


$('#jobtab').on('click',()=>{
    $('#mhead').show();
    $('.load-1').removeAttr('hidden');
    firstindex = 0;
    lastindex = 10;
    atpageno = 0;
    $('#prev-btn').hide();
    pagination(sresjobs.length);
    joblister(sresjobs.slice(firstindex,lastindex));
});


function removewl(jobid){
    $.ajax({
        type: "POST",

        url: 'action/rmwl.php',

        data: {wl:[uemail,jobid]},

        success: function(data){
            wishlister();
        },

        error: function(xhr, status, error){
        console.error(xhr);}

       });
}


function addtowlist(jobid){
    $.ajax({
        type: "POST",

        url: 'action/wlposter.php',

        data: {wl: [uemail,jobid]},

        success: function(data){
            /* console.log(data); */
        },

        error: function(xhr, status, error){
        console.error(xhr);}

       });

}

$('#wltab').on('click',()=>{
    wishlister();
});


$('.wlstimg').on('click',()=>{
    $('.wlstimg').css("transform","translate(10%, 10%)");
});


$('.wlstimg').on('mouseleave',()=>{
    $('.wlstimg').css("transform","translate(0%, 0%)");
});

function wishlister(){
    $('.load-1').removeAttr('hidden');
    $('#mhead').hide();
    wlflag = true;
    $.ajax({
        type: "POST",
        url: 'action/wishlister.php',
        data: {email: uemail},
        success: function(data){
            //job card
            data = JSON.parse(data)
            /* console.log(data); */
            if(data.length>0){
            jobcard(data,wlflag);}
            else{
              $('.load-1').attr('hidden',true);
               jobview.innerHTML ="<div class='content-wrapper-header' style='margin-top: 5px;'>"+
               "<div class='content-wrapper-context'><h1>Your wishlist is empty</h1></div></div>";}
        },
        error: function(xhr, status, error){
        console.error(xhr);}
       });
}


function sortupsalary(){
    $('.load-1').removeAttr('hidden');
    if(salup_flag){
      $(document.getElementById('salup')).removeClass("is-active");
      $(document.getElementById('timesort')).addClass("is-active")
    }else{
      $(document.getElementById('salup')).addClass("is-active");
      $(document.getElementById('timesort')).removeClass("is-active");
    }
    $.ajax({
      type: "POST",
      url: 'action/salaryup.php',
      data: {data: [sresjobs,salup_flag]},
      success: function(data){
        /* console.log(data); */
        sresjobs = JSON.parse(data);
        firstindex = 0;
        lastindex = 10;
        atpageno = 0;
        $('#prev-btn').hide();
        pagination(sresjobs.length);
        jobcard(sresjobs.slice(firstindex,lastindex),false);
        salup_flag = false;
      },
      error: function(xhr, status, error){
      console.error(xhr);}
    });
  }
  

function sortuptime(){
  $('.load-1').removeAttr('hidden');
  if(!timesortup_flag){
    $(document.getElementById('salup')).removeClass("is-active");
    $(document.getElementById('timesort')).addClass("is-active");
  }else{
    $(document.getElementById('salup')).addClass("is-active");
    $(document.getElementById('timesort')).removeClass("is-active");
  }

  $.ajax({
    type: "POST",
    url: 'action/recentup.php',
    data: {data: [sresjobs,timesortup_flag]},
    success: function(data){
      sresjobs = JSON.parse(data);
      firstindex = 0;
      lastindex = 10;
      atpageno = 0;
      $('#prev-btn').hide();
      pagination(sresjobs.length);
      jobcard(sresjobs.slice(firstindex,lastindex),false);
      timesortup_flag = false;
    },
    error: function(xhr, status, error){
    console.error(xhr);}
  });
}
  
  
function filterup(){
  if(!wlflag){
    if(!Boolean(persistres)){
      persistres = sresjobs;
    }
    $('.load-1').removeAttr('hidden');
    $.ajax({
      type: "POST",
      url: 'action/filterup.php',
      data: {data: 
        JSON.stringify([
          JSON.stringify(fskills),
          JSON.stringify(fqualifications),
          JSON.stringify(fsalary),
          JSON.stringify(fexps),
          JSON.stringify(flocations),
          JSON.stringify(fworkmode),
          JSON.stringify(persistres)
        ])
      },
      success: function(data){
        /* console.log('filter data was sent'); */
        if(Boolean(filtercount)){//if filters are applied
          sresjobs = JSON.parse(data);
          /* console.log("filter applied"); */
        }else{
          sresjobs = persistres;
        }
        /* console.log(typeof(sresjobs)); */
        filtercount = 0;
        /* console.log(`Filtered data len is ${sresjobs.length}`); */
        firstindex = 0;
        lastindex = 10;
        atpageno = 0;
        $('#prev-btn').hide();
        pagination(sresjobs.length);
        jobcard(sresjobs.slice(firstindex,lastindex),false);
      },
      error: function(xhr, status, error){
      console.error(xhr);}
    });
  } 
}


$('#timesort').on('click',()=>{
  sortuptime();
});


$('#salup').on('click',()=>{
  sortupsalary();
});


function pagination(jobcount){
  firstindex = atpageno * 10;
  lastindex = jobcount;
  if(jobcount > 10){
    lastindex = firstindex + 10 ;
  }else{
    $('.page-nav').hide();
  }
  firstindex = atpageno * 10;
 /*  console.log(`firstindex is ${firstindex}`);
  console.log(`lastindex is ${lastindex}`); */
}