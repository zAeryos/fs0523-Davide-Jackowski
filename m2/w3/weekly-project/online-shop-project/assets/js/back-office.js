async function displayProducts() {
    const products      = await fetchData();
    const tableBody     = document.getElementById('productTableBody');

    products.forEach(product => {
        const row = tableBody.insertRow();
        row.id = `productRow_${product._id}`;
        row.innerHTML = `<td class="p-3">${product.name}</td>
                         <td class="p-3">${product.description}</td>
                         <td class="p-3">${product.price}</td>
                         <td class="text-end">
                            <button class="btn btn-sm btn-outline-info" onclick="modifyProduct('${product._id}')">Edit</button>
                            <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${product._id}')">Delete</button>
                         </td>`;
    });
}

displayProducts();

function modifyProduct(productId) {
    window.location.href = `edit-product.html?productId=${productId}`;
}

async function deleteProduct(productId) {
    try {
        const res = await fetch(`${url}${productId}`, {
            method: "DELETE",
            headers: {
                'Content-Type'  : 'application/json',
                'Authorization' : `Bearer ${authKey}`
            }
        });

        if (res.ok) {
            const tableBody     = document.getElementById('productTableBody');
            const rowToRemove   = document.getElementById(`productRow_${productId}`);

            if (rowToRemove) {
                tableBody.removeChild(rowToRemove);
                console.log(`Product with ID ${productId} deleted successfully`);
            } else {
                console.error(`Error: Row for product with ID ${productId} not found`);
            }
        } else {
            console.error(`Error deleting product with ID ${productId}: ${res.status}`);
        }
    } catch (error) {
        console.error(`Error deleting product with ID ${productId}: ${error.message}`);
    }
}