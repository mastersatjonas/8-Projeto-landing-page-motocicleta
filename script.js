const form = document.getElementById('whatsapp-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.querySelector('input[name="nome"]').value;
    const contato = document.querySelector('input[name="contato"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    // Enviar dados para o WhatsApp
    const whatsappUrl = `https://wa.me/+5563992354732?text=Nome:${nome},%20E-mail:${contato},%20Mensagem:${mensagem}`;
    window.open(whatsappUrl, '_blank');
});