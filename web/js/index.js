// <% %> 書式を {% %}書式に変更
_.templateSettings = {
  evaluate: /\{%(.+?)%\}/g,
  interpolate: /\{\{(.+?)\}\}/g,
  escape: /\{%-(.+?)%\}/g
};


$(function(){
    (new ApplicationView()).start();
});
