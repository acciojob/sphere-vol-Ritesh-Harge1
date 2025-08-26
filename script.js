// script.js
(function globalize() {
  function volume_sphere(radiusArg) {
    // Try to find DOM elements if running in browser test
    const hasDOM = typeof document !== "undefined" && !!document.getElementById;
    const radiusElem = hasDOM ? document.getElementById("radius") : null;
    const volumeElem = hasDOM ? document.getElementById("volume") : null;

    // Determine radius source: argument > DOM input
    let rawRadius;
    if (typeof radiusArg !== "undefined") {
      rawRadius = radiusArg;
    } else if (radiusElem) {
      rawRadius = radiusElem.value;
    } else {
      // No input available -> treat as invalid
      if (volumeElem) volumeElem.value = "NaN";
      return NaN;
    }

    // Normalize and parse
    if (typeof rawRadius === "string") rawRadius = rawRadius.trim();
    const radius = parseFloat(rawRadius);

    // Validate
    if (isNaN(radius) || radius < 0) {
      if (volumeElem) volumeElem.value = "NaN";
      return NaN;
    }

    // Compute volume and round to 4 decimals
    const vol = (4 / 3) * Math.PI * Math.pow(radius, 3);
    const volFixedStr = vol.toFixed(4);
    const volNumeric = Number(volFixedStr);

    // Update DOM if present
    if (volumeElem) volumeElem.value = volFixedStr;

    // Return numeric value (so tests that call the function can assert numeric result)
    return volNumeric;
  }

  // Export for CommonJS/Node tests
  if (typeof module !== "undefined" && module.exports) {
    module.exports = volume_sphere;
  }

  // Attach to window/global for browser tests
  if (typeof window !== "undefined") {
    window.volume_sphere = volume_sphere;
  }
})();
