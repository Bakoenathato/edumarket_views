function handleSelect(selectElement) {
    const url = selectElement.value;
    if (url) {
        window.location.href = url; // Redirect to the selected URL
    }
}