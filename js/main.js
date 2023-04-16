$(document).ready(function () {

    $('.the-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            cpf:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            endereço:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            nome:'Por favor, informe seu nome completo',
            cpf:'Por favor, informe seu CPF',
            email:'Por favor, informe seu e-mail',
            telefone:'Por favor, informe seu telefone com o DDD',
            endereço:'Por favor, informe seu endereço completo',
            cep:'Por favor, informe seu código postal'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos= validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('')
})
