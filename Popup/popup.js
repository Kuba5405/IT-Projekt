function closePopup() {
    window.close();
}

window.addEventListener('beforeunload', function() {
    window.opener.focus();
});
