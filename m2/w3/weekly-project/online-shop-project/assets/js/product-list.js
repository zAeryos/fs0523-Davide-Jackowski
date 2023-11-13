function createProductHTML(products) {

    const productTemplate   = document.querySelector("#product-card");
    const productsContainer = productTemplate.parentElement;
    let i                   = 0;
    let divRow              = null;

    for (product of products) {

        const clonedTemplate                                    = getTemplateClone();
        clonedTemplate.querySelector(".card-title").innerHTML   = product.name;
        clonedTemplate.querySelector(".card-text").innerHTML    = product.description;
        clonedTemplate.querySelector(".card-img-top").src       = product.imageUrl;

        if (i % 3 === 0) {
            divRow = document.createElement("div");
            divRow.classList.add("row");
            productsContainer.append(divRow);
        }
        
        divRow.append(clonedTemplate);

        i++;
    }
}

fetchData().then(createProductHTML);

function getTemplateClone() {
    let temp = document.getElementsByTagName('template')[0];
    return temp.content.cloneNode(true);
}