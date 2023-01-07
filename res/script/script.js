$(function () {
 $(".menu-link").click(function () {
  $(".menu-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(function () {
 $(".main-header-link").click(function () {
  $(".main-header-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
 dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdowns.forEach((c) => c.classList.remove("is-active"));
  dropdown.classList.add("is-active");
 });
});

$(".search-bar input")
 .focus(function () {
  $(".header").addClass("wide");
 })
 .blur(function () {
  $(".header").removeClass("wide");
 });

$(document).click(function (e) {
 var container = $(".status-button");
 var dd = $(".dropdown");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
  dd.removeClass("is-active");
 }
});

$(function () {
 $(".dropdown").on("click", function (e) {
  $(".content-wrapper").addClass("overlay");
  e.stopPropagation();
 });
 $(document).on("click", function (e) {
  if ($(e.target).is(".dropdown") === false) {
   $(".content-wrapper").removeClass("overlay");
  }
 });
});

$(function () {
 $(".status-button:not(.open)").on("click", function (e) {
  $(".overlay-app").addClass("is-active");
 });
 $(".pop-up .close").click(function () {
  $(".overlay-app").removeClass("is-active");
 });
});

$(".status-button:not(.open)").click(function () {
 $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
 $(".pop-up").removeClass("visible");
});

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

function skills_list(){
  document.getElementById("skills").style.visibility="visible";
  document.getElementById("skills-list").style.visibility="visible";
  document.getElementById("skills").style.background="var(--dropdown-hover)";
  document.getElementById("skills-list").style.background="var(--dropdown-hover)";
  document.getElementById("skills").style.opacity="1";
  document.getElementById("skills-list").style.opacity="1";
  document.getElementById("skills").style.top="100%";
  document.getElementById("skills-list").style.top="100%";
  document.getElementById("skills").style.width="100%";
  document.getElementById("skills-list").style.width="100%";
  var style =  document.getElementById('skills').style;
  var prop = (k, v) => style.setProperty(k, v);
  prop("-webkit-transition","all .1s, background, 1s .1s linear");
  var style =  document.getElementById('skills-list').style;
  var prop = (k, v) => style.setProperty(k, v);
  prop("-webkit-transition","all .1s, background, 1s .1s linear");
}

function share(){
  navigator.share({title:"demo link",url:"http://naukri.com"});
}