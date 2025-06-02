function showMessage() {
  alert('🎉 Celebrating you! 🎉');
}

function shareToWhatsApp() {
  const message = "🌟 Happy Day! 🌟\n\nSending you smiles, love, and good vibes. May your day be as wonderful as you are!\n\n✨ Have a beautiful day! ✨";
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function viewMoreCards() {
  window.open('https://www.123greetings.com/', '_blank');
}
