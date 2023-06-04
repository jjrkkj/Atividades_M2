function addAchievement() {
    let title = $("#achievement_title").val();
    let year = $("#achievement_year").val();
    let desc = $("#achievement_desc").val();
    
    if (title == '' || year == '' || desc == '') {
        let erro = $('<p id="erro" style="color: red">Preencha todos os campos!</p>');
        if ($("#erro").length === 0) {
            erro.insertBefore($("#add_achievement_button"));
        }
    } else {
        let tipo = $('<p class="tipo"> '+ title + ' | <strong>' + year + '</strong></p>');
        let texto = $('<p class="texto ultimo">'+desc+'</p>');
    
        $("#achievement_title").val('');
        $("#achievement_year").val('');
        $("#achievement_desc").val('');
        $("#erro").remove();
    
        tipo.insertBefore($("#add_achievement"));
        texto.insertBefore($("#add_achievement"));

        $("#add_achievement_modal").css("display", "none");
        $("#black_bg").css("display", "none");
    }
}

$(document).ready(()=> {
    $("#add_achievement").click(()=> {
        $("#add_achievement_modal").css("display", "flex")
        $("#black_bg").css("display", "block")
    })
    $("#black_bg").click(()=> {
        $("#add_achievement_modal").css("display", "none")
        $("#black_bg").css("display", "none")
        $("#achievement_title").val('');
        $("#achievement_year").val('');
        $("#achievement_desc").val('');
        $("#erro").remove();
    })
    $("#add_achievement_button").click(() => {
        addAchievement()
    })
})