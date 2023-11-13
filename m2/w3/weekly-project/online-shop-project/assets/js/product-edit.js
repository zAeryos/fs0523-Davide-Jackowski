document.addEventListener('DOMContentLoaded', function () {
    const urlParams     = new URLSearchParams(window.location.search);
    const productId     = urlParams.get('productId');

    if (productId) {
        fetchProductDetails(productId);
    }

    const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', function (e) {
        e.preventDefault();
        updateProduct(e); 
    });
});

async function fetchProductDetails(productId) {
    const productUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;

    try {
        const res = await fetch(productUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        });

        if (res.ok) {
            const product = await res.json();

            document.getElementById('productId').value      = productId;
            document.getElementById('productName').value    = product.name;
            document.getElementById('productDesc').value    = product.description;
            document.getElementById('productBrand').value   = product.brand;
            document.getElementById('productImage').value   = product.imageUrl;
            document.getElementById('productPrice').value   = product.price;
        } else {
            console.error(`Error fetching product details: ${res.status}`);
        }
    } catch (error) {
        console.error(`Error fetching product details: ${error.message}`);
    }
}

function updateProduct(e) {
    e.preventDefault();

    const form = document.getElementById('productForm');
    const formData = new FormData(form);

    const productId = formData.get('productId');
    const updateUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });


    fetch(updateUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authKey}`,
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => {
        if (response.ok) {
            console.log(`Product with ID ${productId} updated successfully`);
        } else {
            console.error(`Error updating product with ID ${productId}: ${response.status}`);
        }
    })
    .catch(error => {
        console.error(`Error updating product with ID ${productId}: ${error.message}`);
    });
}