// faux login, 100% visuel. rien n'est envoye, rien n'est stocke.
// au submit on empeche l'envoi et on redirige vers l'accueil du site,
// la cible pense s'etre trompee de page et ne se doute de rien.
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.href = 'https://javakhanstudio.github.io/Entreprises_Fictives/gobelin/index.html';
});
