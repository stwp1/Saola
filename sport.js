<script>
    document.addEventListener('DOMContentLoaded', function() {
        const menuLinks = document.querySelectorAll('.menu-bar li a');

        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor click behavior
                const linkText = this.textContent; // Get the text of the clicked link
                alert('You clicked on ' + linkText + '!'); // Show an alert
                // Optionally, you can navigate to the link's href here if needed
                // window.location.href = this.href; // Uncomment to enable navigation
            });
        });
    });
// Wait for the DOM to fully load
        document.addEventListener('DOMContentLoaded', function() {
            // Select all navigation links
            const menuLinks = document.querySelectorAll('.menu-bar li a');

            // Add click event listener to each link
            menuLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    // Prevent default navigation
                    event.preventDefault();
                    // Get the text of the clicked link
                    const linkText = this.textContent;
                    // Show an alert with the link text
                    alert('You clicked on ' + linkText + '!');
                    // Optionally, navigate to the link's href
                    // window.location.href = this.href; // Uncomment to enable navigation
                });
            });
        });

</script>
