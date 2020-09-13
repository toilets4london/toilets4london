fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
    let navToggle = document.querySelector('.nav-toggle');
    let nav = document.querySelector('nav');

    function doToggle(e) {
      e.preventDefault();
      navToggle.classList.toggle('expanded');
      nav.classList.toggle('expanded');
    }

    navToggle.addEventListener('click', function (e) { doToggle(e); });

  });

fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });







