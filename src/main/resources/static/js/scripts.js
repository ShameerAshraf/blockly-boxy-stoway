// Initialize Google Places Autocomplete
function initializeAutocomplete() {
  const locationInput = document.getElementById("location");

  // Attach Google Places autocomplete to the location input
  const autocomplete = new google.maps.places.Autocomplete(locationInput, {
    types: ["geocode"], // Restrict the results to geographical locations
    componentRestrictions: { country: "us" }, // Restrict to a specific country, e.g., US
  });

  // Event listener for when a place is selected
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log("Selected place:", place);
  });
}

// Run the initializer when the window loads
window.onload = initializeAutocomplete;

