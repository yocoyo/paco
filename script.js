// Empêcher le formulaire de se soumettre et afficher un message de succès
document.getElementById('appForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var appName = document.getElementById('appName').value;
    var output = document.getElementById('output');
    output.innerHTML = '<p>L\'application ' + appName + ' a été créée avec succès !</p>';
    setTimeout(showDownloadButton, 30000); // Afficher le bouton de téléchargement après 30 secondes
});

// Exécuter le code JavaScript saisi dans le textarea
function runCode() {
    var code = document.getElementById('code').value;
    try {
        eval(code);
    } catch (error) {
        console.error(error);
    }
}

// Compiler en APK localement
function compileToAPK() {
    // Appeler votre script Python pour compiler en APK localement
    alert('Compilation en APK terminée localement !');
    downloadAPK(); // Appeler la fonction pour télécharger le fichier APK après la compilation
}

// Télécharger le fichier APK
function downloadAPK() {
    var apkURL = 'https://exemple.com/chemin_vers_votre_fichier.apk'; 
    var apkFileName = 'votre_application.apk'; 
    var a = document.createElement('a');
    a.href = apkURL;
    a.download = apkFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Fonction pour afficher le bouton de téléchargement
function showDownloadButton() {
    var downloadButton = document.createElement('button');
    downloadButton.textContent = 'Télécharger l\'application';
    downloadButton.onclick = downloadAPK; // Lier la fonction de téléchargement au clic du bouton
    document.body.appendChild(downloadButton);
}