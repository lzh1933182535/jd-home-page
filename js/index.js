/*
 * @Author: your name
 * @Date: 2021-08-05 17:27:16
 * @LastEditTime: 2021-08-06 10:48:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jd\js\index.js
 */
window.onload = function(){
  search();
  downTime();
}
var search = function() {
  var searchBox = document.querySelector(".jd-header");
  var banner = document.querySelector(".jd-banner");
  var height = banner.offsetHeight;
  window.onscroll = function() {
      var scrollTop = parseInt(document.documentElement.scrollTop);
      var opacity = 0;
      if (scrollTop < height) {
          opacity = scrollTop / height * .85;
      } else {
          opacity = .85;
      }
      searchBox.style.background = "rgba(201, 21, 35, " + opacity + ")";
  }
}
var downTime = function() {
  var time = 2 * 60 * 60;
  var spans = document.querySelector(".time").querySelectorAll("span");
  console.log(spans);
  var timer = setInterval(function() {
      time--;
      var hour = Math.floor(time / 3600);
      var minute = Math.floor(time % 3600 / 60);
      var second = time % 60;

      spans[0].innerHTML = Math.floor(hour / 10);
      spans[1].innerHTML = hour % 10;
      spans[3].innerHTML = Math.floor(minute / 10);
      spans[4].innerHTML = minute % 10;
      spans[6].innerHTML = Math.floor(second / 10);
      spans[7].innerHTML = second % 10;
      if (time <= 0) {
          clearInterval(timer);
      }
  }, 1000);
}