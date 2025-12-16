function sendEmail(e) {
    e.preventDefault()
    let params = {
        name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        title: document.getElementById("assunto").value,
        message: document.getElementById("descricao").value
    };
    console.log(params);

    emailjs.send("service_0akr7wp", "template_bynu2r8", params).then(alert("Email Enviado com sucesso!"))

    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telefone").value = ""
    document.getElementById("assunto").value = ""
    document.getElementById("descricao").value = ""
}