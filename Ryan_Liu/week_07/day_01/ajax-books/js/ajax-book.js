const fetchBook = function(e) {
  const div = document.getElementById("main");
  if (div !== null) {
    div.innerHTML = "";
  }

  e.preventDefault();
  const API_KEY = "AIzaSyBIDgKohHGD2RYkr0iEFloeP6RiuIm-7ek";
  const title = document.getElementById("title").value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${title}&key=${API_KEY}`;
  //const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=aa7fe152197494557698129910f40932`;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }
    const bookInfo = JSON.parse(xhr.responseText);

    const div = document.createElement("div");

    document.body.appendChild(div);
    div.setAttribute("class", "main");
    div.setAttribute("id", "main");

    bookInfo.items.map(item => {
      const p = document.createElement("p");
      const img = document.createElement("img");
      const subDiv = document.createElement("div");
      const infoDiv = document.createElement("div");
      const p2 = document.createElement("p");
      // const button = document.createElement('button');
      //
      // button.innerHTML = "description";
      // button.setAttribute('class', "btn btn-secondary");
      // button.setAttribute('type', 'button');
      // button.setAttribute('data-container', 'body');
      // button.setAttribute('data-toggle', 'popover');
      // button.setAttribute('data-placement', 'right');
      // button.setAttribute('data-content', item.volumeInfo.description)

      p.innerHTML = item.volumeInfo.title;
      //p.innerHTML = item.title;
      subDiv.setAttribute("id", "item");
      infoDiv.setAttribute("id", "info");
      p2.innerHTML = `Category: ${item.volumeInfo.categories[0]}`;
      infoDiv.appendChild(p2);

      img.setAttribute("src", item.volumeInfo.imageLinks.thumbnail);


      subDiv.appendChild(p);
      subDiv.appendChild(infoDiv);
      subDiv.appendChild(img);
      //subDiv.appendChild(button);
      div.appendChild(subDiv);
    });
  };
  xhr.open("GET", url);
  xhr.send();
};

const button = document.getElementById("search");
button.addEventListener("click", fetchBook);
