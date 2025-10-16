const form = document.querySelector('form');
const cep = document.getElementById('cep');
const logradouro = document.getElementById('logradouro');
const numero = document.getElementById('numero');
const uf = document.getElementById('uf');

// Máscara automática do CEP (00000-000)
cep.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.replace(/(\d{5})(\d{0,3}).*/, '$1-$2');
    }
    e.target.value = value;
});

// Converter UF para maiúsculo automaticamente
uf.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
});

// Controle de envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validação dos campos
    const cepVal = cep.value.replace(/\D/g, '');
    const logVal = logradouro.value.trim();
    const numVal = numero.value.trim();
    const ufVal = uf.value.trim();

    if (!cepVal || !logVal || !numVal || !ufVal)
    {
        alert('Preencha todos os campos.');
        return
    }

    if (!/^\d{8}$/.test(cepVal)) 
    {
        alert('CEP inválido. Digite 8 números no formato 00000-000.');
        cep.focus();
        return;
    }

    if (logVal.length < 5) 
    {
        alert('Logradouro deve conter no mínimo 5 caracteres.');
        logradouro.focus();
        return;
    }

    if (!/^\d+$/.test(numVal)) 
    {
        alert('O campo Número deve conter apenas dígitos numéricos.');
        numero.focus();
        return;
    }

    if (!/^[A-Z]{2}$/.test(ufVal)) 
    {
        alert('UF inválida. Digite duas letras maiúsculas (ex: SP).');
        uf.focus();
        return;
    }

    alert('Endereço cadastrado com sucesso');
    form.reset();
});
