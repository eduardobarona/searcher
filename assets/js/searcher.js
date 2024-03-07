

let loadProductsJSON = () => {

    let myURL = 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json'

    fetch(myURL)
        .then(response => response.json()) /* Convierte el response a texto */
        .then(result => {

            console.log(result);

            for (let index = 0; index < result.length; index++) {
                const element = result[index];

                console.log(element);

                let {name, type, price, src} = element;

                let template = `
        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
          <div class="card card-blog card-plain">
            <div class="card-header p-0 mt-n4 mx-3">
              <a class="d-block shadow-xl border-radius-xl">
                <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
              </a>
            </div>
            <div class="card-body p-3">
              <p class="mb-0 text-sm">${type}</p>
              <a href="javascript:;">
                <h5>
                  ${name}
                </h5>
              </a>
              <p class="mb-4 text-sm">
                <b>Price: </b> $ ${price}
              </p>
            </div>
          </div>
        </div> `;

        let resultHTML = document.getElementById("templateproducts");

        resultHTML.innerHTML += template;

            }
        })
        .catch(error => {

            /* Callback por fallo: Procese el error */

            console.log(error);

        });

};


let filterProducts = () => {
    let buttonFilter = document.getElementById("filter");

    buttonFilter.addEventListener('click', () => {
        let searchText = document.getElementById("text").value.toLowerCase();
        let products = document.querySelectorAll("#templateproducts .card");

        products.forEach(product => {
            let productName = product.querySelector("h5").textContent.toLowerCase();
            let productType = product.querySelector("p:first-of-type").textContent.toLowerCase();

            if (productName.includes(searchText) || productType.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
};

loadProductsJSON();
filterProducts();