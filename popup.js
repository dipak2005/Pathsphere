document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('popup-nl').style.display = 'flex'; // Show the popup immediately

    // Close the pop-up when the user clicks the close button
    document.querySelector('.close-nl').addEventListener('click', function() {
        document.getElementById('popup-nl').style.display = 'none';
    });

    
    // Handle form submission
    document.getElementById('emailForm-nl').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email-nl').value;
        if (email) {
            alert(`Your email ID ${email} has been registered successfully for the newsletter.`); // Added quotes
            document.getElementById('popup-nl').style.display = 'none'; // Ensure this matches your popup ID
        }
    });


    // Handle "No thanks" link
    document.querySelector('.no-thanks-nl').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('popup-nl').style.display = 'none';
    });
});
