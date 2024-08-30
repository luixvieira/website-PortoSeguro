document.getElementById('diagnostic-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide the form intro and form content
    document.getElementById('form-intro').style.display = 'none';
    document.getElementById('form-content').style.display = 'none';

    // Show the diagnosis screen
    document.getElementById('diagnosis-screen').style.display = 'flex'; // Changed from block to flex
});

document.getElementById('back-to-form').addEventListener('click', function() {
    // Show the form intro and form content
    document.getElementById('form-intro').style.display = 'block';
    document.getElementById('form-content').style.display = 'block';

    // Hide the diagnosis screen
    document.getElementById('diagnosis-screen').style.display = 'none';
});
