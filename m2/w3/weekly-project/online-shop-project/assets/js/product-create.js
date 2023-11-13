document.getElementById("productForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    let productName     = document.getElementById("productName").value;
    let productDesc     = document.getElementById("productDesc").value;
    let productBrand    = document.getElementById("productBrand").value;
    let productImage    = document.getElementById("productImage").value;
    let productPrice    = document.getElementById("productPrice").value;

    if (productName === "" || productDesc === "" || productBrand === "" || productImage === "" || productPrice === "") {
        showAlert("Please fill in all fields", "danger");
        return;
    }

    try {
        await addData(productName, productDesc, productBrand, productImage, productPrice);
        showAlert("Product added successfully!", "success");

        document.getElementById("productName").value    = '';
        document.getElementById("productDesc").value    = '';
        document.getElementById("productBrand").value   = '';
        document.getElementById("productImage").value   = '';
        document.getElementById("productPrice").value   = '';

    } catch (error) {
        showAlert("Error adding product. Please try again.", "danger");
    }

});

async function addData(productName, productDesc, productBrand, productImage, productPrice) {
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name:           productName,
            description:    productDesc,
            brand:          productBrand,
            imageUrl:       productImage,
            price:          productPrice
        }),
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${authKey}`,
        }
    })

    if (!res.ok) {
        throw new Error("Failed to add product");
    }

    const updatedData = await fetchData();
}

function showAlert(message, type) {
    const alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}