// Manejo de clicks en los enlaces de perfil
jQuery(function($) {
    $(".link").click(function(e) {
        let linkId = $(e.target).closest(".link").attr("id").replace("link-", "");
        
        // Ejemplo de una llamada AJAX al hacer clic en un enlace
        $.ajax({
            url: "ajax/handleClick.php",
            method: "POST",
            dataType: "json",
            data: {
                link_id: linkId
            },
            success: function(response) {
                console.log("Click registrado para el enlace con ID:", linkId);
            }
        });
    });
});
