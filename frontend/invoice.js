// invoice.js

// Function to get query parameters from URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    pairs.forEach(pair => {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

// Display invoice details based on query parameters
function displayInvoiceDetails() {
    const params = getQueryParams();
    if (params.product_id && params.title) {
        const invoiceDetailsDiv = document.getElementById('invoice-details');
        invoiceDetailsDiv.innerHTML = `
            <h2>Product: ${params.title}</h2>
            <p><strong>Price:</strong> ₹${params.price}</p>
            <p><strong>Quantity:</strong> ${params.quantity}</p>
            <p><strong>Total:</strong> ₹${params.price * params.quantity}</p>
        `;
    } else {
        document.getElementById('invoice-details').innerHTML = '<p>Invoice details not found.</p>';
    }
}

// Download invoice as PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const params = getQueryParams();

    pdf.text(20, 20, `Product: ${params.title}`);
    pdf.text(20, 30, `Price: ₹${params.price}`);
    pdf.text(20, 40, `Quantity: ${params.quantity}`);
    pdf.text(20, 50, `Total: ₹${params.price * params.quantity}`);

    pdf.save('invoice.pdf');
}

// Display invoice details on page load
window.onload = displayInvoiceDetails;

// Add event listener to download button
document.getElementById('download-pdf').addEventListener('click', downloadPDF);
