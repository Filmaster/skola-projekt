$(function(){
    $('#ustava h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#048'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

    var kviz = $('#kviz div.row');
    var odkazy = $('#odkazy ul');
    hodnosti.forEach(function(obj,idx){
        kviz.append('<div class="col-sm-4"><figure><img height="140" width="200" src="qviz/hodnost0.jpg" alt="hodnosti"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
        odkazy.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
    });

    
    var foto = $('#kviz img');
    foto.on('click', function(){
        var index = Math.floor(Math.random()*hodnosti.length);
        $(this).attr('src','qviz/'+hodnosti[index].photo)
               .attr('alt',hodnosti[index].name);
    });

    $('#kviz .btn-success').on('click', function(){
        $('#kviz figure').each(function(idx,obj) {
            var alt = $(obj).find('img').attr('alt');
            var figcaption = $(obj).find('figcaption').text();
            if (alt == figcaption) {
                $(obj).find('img').css({'border':'4px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'4px solid red'}); 
            }
        });
    });

    

    function zmenaTextu(i){
        $('#perlicky article h4').text(perlicky[i].title);
        $('#perlicky article p').text(perlicky[i].text);
    }

    var a = 0;
    zmenaTextu(a);
    $('#perlicky button').on('click',function(){
        a < perlicky.length - 1 ? a++ : a = 0;
        zmenaTextu(a);
    })
})