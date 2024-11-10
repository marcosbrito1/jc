let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length-1]);
})

document.querySelectorAll('.messageButton').forEach(button => {
    button.addEventListener('click', function() {
        const textos = {
            'id_tucano': 'O tucano é um pássaro tropical famoso por seu bico grande e colorido, que pode ser quase do mesmo comprimento que seu corpo.',
            'id_pequi': 'O pequi é uma árvore nativa do Cerrado brasileiro e seu fruto é muito apreciado na culinária regional, especialmente na Bahia, Goiás e Minas Gerais.',
            'id_ype': 'O ipê-amarelo é uma das árvores mais icônicas do Brasil, famosa por suas exuberantes flores amarelas que florescem no inverno e início da primavera.',
            'id_onca': 'A onça-pintada é o maior felino das Américas e um símbolo da fauna brasileira. Ela é conhecida por sua pelagem amarela com manchas negras que formam rosetas.',
            'id_lobo': 'O lobo-guará é o maior canídeo da América do Sul e é conhecido por suas longas pernas e pelagem avermelhada.'
        };

        const ver_id = this.id;
        const texto = textos[ver_id] || 'Informação não disponível.';

        document.getElementById('texto').textContent = texto; 
        document.getElementById('messagePopup').style.display = 'block'; 
    }); 
});

document.getElementById('closePopup').onclick = function() { 
    document.getElementById('messagePopup').style.display = 'none'; 
}

window.onclick = function(event) { 
    if (event.target == document.getElementById('messagePopup')) { 
        document.getElementById('messagePopup').style.display = 'none'; 
    } 
}