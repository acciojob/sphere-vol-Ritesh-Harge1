function volume_sphere() {
    // Get radius input
    let radius = document.getElementById("radius").value;

    // Convert to number
    radius = parseFloat(radius);

    // Validate radius (must be number and non-negative)
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate volume of sphere: (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume = volume.toFixed(4);

    // Display result in volume field
    document.getElementById("volume").value = volume;
}
