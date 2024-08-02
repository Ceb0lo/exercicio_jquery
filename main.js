$(document).ready(function(){

    const tarefas = [];
    let addLinha = '';



    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefasFazer = $('#tarefas_fazer').val();
        tarefas.push(tarefasFazer)

        let linha = '<li>'
        linha += `<span>${tarefasFazer}</span>`
        linha += '</li>'

        addLinha += linha

        $('#lista').append(addLinha);

        addLinha = '';

        $('#tarefas_fazer').val('');
    })

    $('#lista').on('click', 'li', function(e) {
        $(this).find('span').toggleClass('feito');
    });

})