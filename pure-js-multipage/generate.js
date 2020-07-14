
// path/filename, page title
let pagelist = [
  ["page1.html", "Pagina 1"],
  ["page2.html", "Pagina 2"],
  ["page3.html", "Pagina 3"],
  ["test/page4.html", "Pagina 4"]
]

let generate_header = function () {
  let h1 = document.createElement("h1");
  h1.innerHTML = "QUESTO È UN LOGO";
  document.querySelector("#the_header").appendChild(h1);
}


let generate_menu = function () {
  let ul = document.createElement("ul");
  ul.innerHTML = "MENU";
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = "HOME";
  a.href = "/";
  li.appendChild(a);
  ul.appendChild(li);
  pagelist.forEach(function(item, index){
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = item[1];
    a.href = item[0];
    li.appendChild(a);
    ul.appendChild(li);
  })
  document.querySelector("#the_menu").appendChild(ul);
}


let generate_footer = function () {
  let hr = document.createElement("hr");
  let p = document.createElement("p");
  p.innerHTML = "QUESTO È IL FOOTER";
  document.querySelector("#the_footer").appendChild(hr);
  document.querySelector("#the_footer").appendChild(p);
}
