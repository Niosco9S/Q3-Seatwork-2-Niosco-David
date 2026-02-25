function lookdiscounts() {
    var raw = document.getElementById("budget").value;
    var budget = parseFloat(raw);
    var out = document.getElementById("Discount");
    if (isNaN(budget) || budget <= 0) {
        out.innerHTML
        return;
    }

    let discountvalue = budget * 0.2;
    let discountedPrice = budget - discountvalue;

    out.innerHTML =
        "<div class=\"container\">" +
        "<h3>Recommended Laptops/PCs:</h3>" +
        "<p>Original budget: ₱" + budget.toFixed(2) + "</p>" +
        "<p>20% discount: ₱" + discountvalue.toFixed(2) + "</p>" +
        "<ul>" +
        "<li>Laptop A - Price: ₱" + discountedPrice.toFixed(2) + "</li>" +
        "<li>PC B - Price: ₱" + discountedPrice.toFixed(2) + "</li>" +
        "<li>Laptop C - Price: ₱" + discountedPrice.toFixed(2) + "</li>" +
        "</ul>" +
        "</div>";
}

