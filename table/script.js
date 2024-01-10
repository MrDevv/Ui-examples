import { clients } from "./data/data.js";

// Inserta la cantidad de elementos al HTML
let tableRowCount = document.getElementsByClassName("table-row-count");
tableRowCount[0].innerHTML = `(${clients.length}) registros`;

// Inserta cada stock a la tabla
const tableRows = document.querySelector("#table-rows");

function clientsHTML(clients = []) {
  tableRows.innerHTML = "";
  clients.forEach(
    ({ name, lastName, age, country, city, street, phone, dni }) => {
      tableRows.innerHTML += `<tr>
        <td class="stock sticky-left">
            ${name} 
        </td>
        <td>${lastName}</td>
        <td>${age}</td>
        <td>${country}</td>
        <td>${city} </td>
        <td>${street}</td>
        <td>${phone}</td>
        <td>${dni}</td>
        <td class="sticky-right">
            <button class="btn-edit">Editar</button>
            <button class="btn-delete">Eliminar</button>
        </td>
    </tr>`;
    }
  );
}

// Paginacion
const clientsPerPages = 3;
const numberOfPages = Math.ceil(clients.length / clientsPerPages);

function pagesHTML() {
  const spanPages = document.querySelector("#pages-container");

  for (let i = 0; i < numberOfPages; i++) {
    const pageLink = document.createElement("span");

    pageLink.classList.add("page-span");
    pageLink.addEventListener("click", () => {
      clientsHTML(getClients(i + 1));
    });
    pageLink.innerText = i + 1;

    spanPages.appendChild(pageLink);
  }
}

function getClients(page = 1) {
  const startIndex = (page - 1) * clientsPerPages;
  return clients.slice(startIndex, page * clientsPerPages);
}

pagesHTML();
clientsHTML(getClients());
