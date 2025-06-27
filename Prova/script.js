document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            let formValido = true;

            // Validação do Nome
            const nome = document.getElementById('nome');
            const erroNome = document.getElementById('erro-nome');
            if (nome.value.trim() === '') {
                erroNome.textContent = 'Por favor, insira seu nome';
                formValido = false;
            } else {
                erroNome.textContent = '';
            }

            // Validação do Email
            const email = document.getElementById('email');
            const erroEmail = document.getElementById('erro-email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email.value.trim() === '') {
                erroEmail.textContent = 'Por favor, insira seu e-mail';
                formValido = false;
            } else if (!emailRegex.test(email.value)) {
                erroEmail.textContent = 'Por favor, insira um e-mail válido';
                formValido = false;
            } else {
                erroEmail.textContent = '';
            }

            // Validação do Assunto
            const assunto = document.getElementById('assunto');
            const erroAssunto = document.getElementById('erro-assunto');
            if (assunto.value === '') {
                erroAssunto.textContent = 'Por favor, selecione um assunto';
                formValido = false;
            } else {
                erroAssunto.textContent = '';
            }

            // Validação da Mensagem
            const mensagem = document.getElementById('mensagem');
            const erroMensagem = document.getElementById('erro-mensagem');
            if (mensagem.value.trim() === '') {
                erroMensagem.textContent = 'Por favor, insira sua mensagem';
                formValido = false;
            } else if (mensagem.value.trim().length < 20) {
                erroMensagem.textContent = 'A mensagem deve ter pelo menos 20 caracteres';
                formValido = false;
            } else {
                erroMensagem.textContent = '';
            }

            // Se o formulário for válido
            if (formValido) {
                // Aqui você pode adicionar o código para enviar o formulário
                alert('Formulário enviado com sucesso!');
                formContato.reset();
                
                // Ou mostrar uma mensagem de sucesso na página
                const mensagemSucesso = document.getElementById('mensagem-sucesso');
                if (mensagemSucesso) {
                    mensagemSucesso.style.display = 'block';
                    setTimeout(() => {
                        mensagemSucesso.style.display = 'none';
                    }, 5000);
                }
            }
        });
    }
});
