    $(function() {
        $(".right[name='contactForm']").validate({
            // Define validation rules
            rules: {
                empresa: "required",
                localizacao: "required",
                email: "required",
                phone: "required",
                servico: "required",
                message: "required",
                empresa: {
                    required: true
                },
                localizacao: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 9,
                    maxlength: 12,
                    number: true
                },
                servico: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            // Specify validation error messages
            messages: {
                empresa: "O Nome da empresa ou cliente não pode estar em branco",
                localizacao: "Informe a sua localização",
                email: {
                    required: "Digite seu email",
                    minlength: "Please enter a valid email address"
                },
                phone: {
                    required: "Informe seu número de telefone",
                    minlength: "O numero de telefone só podem ter no mínimo 9",
                    maxlength: "O máximo de números é 12 (incluindo 244)"
                },
                servico: "Escolha um serviço",
                message: "A descrição do serviço desejado não pode estar em branco"
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    });