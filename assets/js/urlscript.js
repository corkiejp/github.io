// Function to dynamically generate links with the 'url' parameter
function generateLinks() {
    // Extract the 'url' parameter from the current page's URL
    const urlParams = new URLSearchParams(window.location.search);
    const embedUrl = urlParams.get('url'); // Get the 'url' parameter value

    // Define the list of pages to link to
    const links = [
        { text: 'Embed Writer', url: 'embedwriter.html' },
        { text: 'iFrame Writer', url: 'ifwriter.html' }
    ];

    // Select the container where links will be added
    const linkContainer = document.getElementById('linkContainer');
    
    // Clear any existing content in the container
    linkContainer.innerHTML = '';

    // Loop through each link and create an `<li>` with an `<a>` tag
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        // Set the link text and href
        a.textContent = link.text;
        a.href = embedUrl ? `${link.url}?url=${encodeURIComponent(embedUrl)}` : link.url;

        // Add target="_parent" if needed
        a.target = '_parent';

        // Append the link to the list item, then add it to the container
        li.appendChild(a);
        linkContainer.appendChild(li);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', generateLinks);
