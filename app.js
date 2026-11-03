// faux login, 100% visuel. rien n'est envoyé, rien n'est stocke.
// au submit on empeche l'envoi et on affiche une fausse erreur, comme demande par l'enonce.
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('erreur').style.display = 'block';
  document.getElementById('mdp').value = '';
  document.getElementById('mdp').focus();
});
