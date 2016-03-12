(function() {
    var featherEditor = new Aviary.Feather({
        apiKey: window.WorkshopConfig.apiKey,
        onSave: function(imageID, newURL) {
            var img = document.getElementById(imageID);
            img.src = newURL;
        }
    });
    
    function initApp() {
        document.getElementById("editableImage").addEventListener("click", function() {
            featherEditor.launch({
                "image": this.id,
                "url": this.src
            });
        });
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        initApp();
    });
})();