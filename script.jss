document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    // Add code to handle form submission and recording responses
});

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        alert('Switching tabs is not allowed!');
        // Disable form submission or take other actions
        document.getElementById('test-form').innerHTML = '<p>You have been disqualified for switching tabs.</p>';
    }
});
