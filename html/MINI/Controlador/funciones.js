/**
 * Created by 2gdiw10 on 26/1/16.
 */
//Codigo html modo barroco
//var participanteF = $('<fieldset> <pre class="menor"> <legend>Datos participante</legend> <label>Nombre: </label><input type="text" name="nombre" placeholder="Nombre">     <label>Apellidos: </label><input type="text" size="30" name="apellidos" placeholder="Apellidos"><br/> <label>Dni: </label><input type="text" name="dni" placeholder="Dni">        <label>Sexo: </label>   <label>H</label> <input type="radio" name="sexo" value="H">   <label>M</label> <input type="radio" name="sexo" value="M"><br/> <label>Fecha Nacimiento: </label><input type="date" name="fecha" placeholder="DD/MM/YYYY"><br/> <label>Provincia: </label><select name="provincia"> <option value="Alava">Alava</option> <option value="Vizcaya">Vizcaya</option> <option value="Gipúzcoa">Gipúzcoa</option> </select><button type="button" name="bprov" style="background-image:url(../Imagenes/lupa-icon.png);border-radius: 50%;"> </button>      <label>Población: </label><input type="text" name="poblacion" placeholder="Población"><br/> <label>Población: </label><select name="poblacion"> <option value="Vitoria">Vitoria</option> <option value="Alegría">Alegría</option> <option value="Salvatierra">Salvatierra</option> <label>Población: </label></select><button type="button" name="bpob" style="background-image:url(../Imagenes/lupa-icon.png);border-radius: 50%;"> </button><br/> <label>Dirección: </label><input type="text" name="direccion" placeholder="CP, Calle, Nº, Piso" size="60"><br/> <label>Discapacidad: </label><input type="checkbox" name="discapacidad"><br/> <button type="button" name="borrar" >Borrar</button> </pre> </fieldset>')

$(document).ready(function(){
    $('#co').hide();
    $('.primero').hide();
    var contador = 1;
    var inputErroneo = false;
    var cloneF = $('fieldset:last');
    $('[name="añadir"]').click(function() {
        if(contador >= 1 && contador <= 2) {
            //AÑADO UN MENOS POR CLICK//
            cloneF.after(cloneF.clone().fadeIn(500, function () {
                ///borrar fieldset clonado--/--no me vale la variable cloneF porque no coge el último fieldset sino el que estoy clonando//
                ///////////////////////////
                $('fieldset:last').find('input').val("")
                    .css("background-color","white")
                    .css("color","black")
                    .find(':radio').prop("checked",false)
                    .find(':checkbox').prop("checked",false)
                    .child('span').remove();

                contador++;
                //BORRO UN MENOR POR CLICK//
                $('[name="borrar"]').click(function () {
                    alert(contador)
                    if (contador > 1) {
                    $(this).closest("fieldset").fadeOut(500, function () {
                        $(this).remove();
                        contador--;
                        if(contador == 1){
                            $('.primero').hide();
                        }
                        })}
                })
            }));
            $('.primero').show();
        }
    });
    //RESTABLECER//
    $('[name="restablecer"]').click(function(){
        if(confirm("Seguro que deseas restablecer todo el formulario") == true){
            contador = 1;
            borrarCampos();
            while(($(document).find('fieldset').length)>2) {
                $('fieldset:last').remove();
                $('.primero').hide();
            }
        }
    });
    /*$('[name="enviar"]').click(function() {
        if($("input").val("")){
            alert("hola")
            $(this).css("background-color","black");
        }

        //tengo que hacer la validación aquí
    });*/

     //PINTAR CUADROS BLANCOS DE NEGRO SI SE HACE BLUR MIENTRAS ESTE VACIO//
    /////////////////////////////
    $('input:text').blur(function(){
        if($(this).val() == "") {
            $('#co').show();
            if(this.style.backgroundColor != "black") {
                $(this)
                    .after("<span class='span' style='color:red;font-weight: bolder'>*</span>")
                    .css("background-color", "black")
                    .css("color", "white")
            }
        }
    });
    //LIMPIAR CUADROS NEGROS AL ESCRIBIR
    $('input:text').keypress(function(){
        if (this.style.backgroundColor == "black") {
            inputErroneo = true;
            $(this)
                .css("background-color", "white")
                .css("color", "black")
                .next().remove()
        }
    });

    function borrarCampos(){
            $('input').val("");
            $(':radio').prop("checked",false);
            $(':checkbox').prop("checked",false);
            $('#co').hide();
            $("#mini").each(function() {
                $("input:text").css("background-color", "white");
                $("input:text").css("color", "black");
                $(".span").remove();
            })
    }
});