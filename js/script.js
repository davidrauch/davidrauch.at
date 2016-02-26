var fixAwkwardTitleSpacing = function() {
  var titles = document.getElementsByTagName('h1');

  for(var i = 0; i < titles.length; i++) {
    var title = titles[i].children[0];
    title.innerHTML = title.innerText.replace(', ', ',<span class="spacing-fixer"></span>');
  }
};

document.addEventListener('DOMContentLoaded', function() { 
  fixAwkwardTitleSpacing();
});