
function updateClock(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
if(m < 10){
  m = "0" + m;
}
var s = d.getSeconds();
if(s < 10){
  s = "0" + s;
}

var mon = d.getMonth();
mStr = ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio",
    "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"];

var day = d.getDate();

if(document.getElementById("date") != null){
document.getElementById("date").innerHTML = h + ":" + m + ":" + s + " " +
mStr[mon] + " " + day;
}

setTimeout(updateClock, 1000);
}
updateClock();

// Home name

if(document.getElementById("home-name-visual") != null)

document.getElementById("home-name-visual").innerHTML =
localStorage.getItem("homeName");

if(document.getElementById("home-name") != null)
document.getElementById("home-name").value =
localStorage.getItem("homeName");
function homeName() {
  var name;
  name = document.getElementById("home-name").value;
  localStorage.setItem("homeName", name);
}

// safety

if(document.getElementById("safety") != null)
{
  if(localStorage.getItem("safetyTest") == 1)
    document.getElementById("safety").checked = true;
}

if(document.getElementById("alarm-info-b") != null){
    if(localStorage.getItem("safetyTest") == 1)
    document.getElementById("alarm-info-b").style.backgroundColor = "#FAFAD2";
  }

  if(document.getElementById("alarm-info-p") != null){
      if(localStorage.getItem("safetyTest") == 1)
      document.getElementById("alarm-info-p").innerHTML = "Įjungta";
    }

  if(document.getElementById("cond") != null)
  {
    if(localStorage.getItem("safetyTest") == 1)
      document.getElementById("cond-p").innerHTML = "Apsauga įjungta";
  }

function safety() {
   var safetyTest = 0;
   if(document.getElementById("safety").checked == true)
          safetyTest = 1;
  localStorage.setItem("safetyTest", safetyTest);
}

// fire_safety

if(document.getElementById("fire-safety") != null)
{
  if(localStorage.getItem("fireSafetyTest") == 1)
    document.getElementById("fire-safety").checked = true;
}

if(document.getElementById("fire-alarm-info-b") != null){
    if(localStorage.getItem("fireSafetyTest") == 1)
    document.getElementById("fire-alarm-info-b").style.backgroundColor = "#FAFAD2";
  }

  if(document.getElementById("fire-alarm-info-p") != null){
      if(localStorage.getItem("fireSafetyTest") == 1)
      document.getElementById("fire-alarm-info-p").innerHTML = "Įjungta";
    }

function fireSafety() {
   var fireSafetyTest = 0;
   if(document.getElementById("fire-safety").checked == true)
          fireSafetyTest = 1;
  localStorage.setItem("fireSafetyTest", fireSafetyTest);
}

//SOS

function sos()
{
  alert("SOS tarnyba iškviesta į namus");
}

//Light

if(document.getElementById("kor-light") != null){
  if(localStorage.getItem("l1") == 1)
    document.getElementById("kor-light").checked = true;
}

if(document.getElementById("kitchen-light") != null){
  if(localStorage.getItem("l2") == 1)
    document.getElementById("kitchen-light").checked = true;
}

if(document.getElementById("room-light") != null){
  if(localStorage.getItem("l3") == 1)
    document.getElementById("room-light").checked = true;
}

if(document.getElementById("bathroom-light") != null){
  if(localStorage.getItem("l4") == 1)
    document.getElementById("bathroom-light").checked = true;
}

function lightOn1(){
  if(document.getElementById("kor-light").checked == true)
      localStorage.setItem("l1", 1);
  else
      localStorage.setItem("l1", 0);
}
function lightOn2(){
  if(document.getElementById("kitchen-light").checked == true)
      localStorage.setItem("l2", 1);
      else
          localStorage.setItem("l2", 0);
}
function lightOn3(){
  if(document.getElementById("room-light").checked == true)
      localStorage.setItem("l3", 1);
      else
          localStorage.setItem("l3", 0);
}
function lightOn4(){
  if(document.getElementById("bathroom-light").checked == true)
      localStorage.setItem("l4", 1);
      else
          localStorage.setItem("l4", 0);
}

// doors and windows

if(document.getElementById("door") != null){
  if(localStorage.getItem("d1") == 1)
    document.getElementById("door").checked = true;
}

if(document.getElementById("kitchen-window") != null){
  if(localStorage.getItem("w1") == 1)
    document.getElementById("kitchen-window").checked = true;
}

if(document.getElementById("room-window") != null){
  if(localStorage.getItem("w2") == 1)
    document.getElementById("room-window").checked = true;
}

function door1()
{
  if(document.getElementById("door").checked == true)
      localStorage.setItem("d1", 1);
      else
          localStorage.setItem("d1", 0);
}

function window1()
{
  if(document.getElementById("kitchen-window").checked == true)
      localStorage.setItem("w1", 1);
      else
          localStorage.setItem("w1", 0);
}

function window2()
{
  if(document.getElementById("room-window").checked == true)
      localStorage.setItem("w2", 1);
      else
          localStorage.setItem("w2", 0);
}

//tech

if(localStorage.getItem("fridgeT") == null)
    localStorage.setItem("fridgeT", 4);
if(document.getElementById("fridge-temp") != null)
{
    document.getElementById("fridge-temp").value =
    localStorage.getItem("fridgeT");
}

if(localStorage.getItem("camT") == null)
    localStorage.setItem("camT", -15);
if(document.getElementById("cam-temp") != null)
{
    document.getElementById("cam-temp").value =
    localStorage.getItem("camT");
}

function fridgeTemp()
{
  if(isNaN(document.getElementById("fridge-temp").value) == false)
  {
    var t = document.getElementById("fridge-temp").value;
    localStorage.setItem("fridgeT", t);
  }
  else document.getElementById("fridge-temp").value = 4;
}

function camTemp()
{
  if(isNaN(document.getElementById("cam-temp").value) == false)
  {
    var t = document.getElementById("cam-temp").value;
    localStorage.setItem("camT", t);
  }
  else document.getElementById("cam-temp").value = -15;
}

//tv

function b1() {document.getElementById("tv-ch").value += "1"};
function b2() {document.getElementById("tv-ch").value += "2"};
function b3() {document.getElementById("tv-ch").value += "3"};
function b4() {document.getElementById("tv-ch").value += "4"};
function b5() {document.getElementById("tv-ch").value += "5"};
function b6() {document.getElementById("tv-ch").value += "6"};
function b7() {document.getElementById("tv-ch").value += "7"};
function b8() {document.getElementById("tv-ch").value += "8"};
function b9() {document.getElementById("tv-ch").value += "9"};
function bOk() {document.getElementById("tv-ch").value = ""};
function b0() {document.getElementById("tv-ch").value += "0"};

if(document.getElementById("tv-onoff") != null)
{
  if(localStorage.getItem("tvOnOff") == 1)
     document.getElementById("tv-onoff").checked = true;
}
function tvOnOff()
{
  if(document.getElementById("tv-onoff").checked == true)
    localStorage.setItem("tvOnOff", 1);
    else localStorage.setItem("tvOnOff", 0);
}


//audio

var aud = new Audio("audio/aud1.mp3");
function playAudio()
{
  aud.play();
}

function pauseAudio()
{
  aud.pause();
}

function stopAudio()
{
  aud.pause();
  aud.currentTime = 0;
}
