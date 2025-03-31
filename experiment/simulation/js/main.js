function restartexp() {
    location.reload();
  }

function scissorjsclick(){
    document.getElementById("scissorscss").style.top=38+"%";
    document.getElementById("scissorscss").style.left=15.3+"%";
    document.getElementById("scissorscss").setAttribute("onclick", "scissorcutclick()" );
    
}

function scissorcutclick(){
    document.getElementById("leafcss").style.display="block";
    document.getElementById("plantcutcss").style.display="block";
    document.getElementById("plantcss").style.display="none";
    document.getElementById("scissorscss").style.top=2+"%";
    document.getElementById("scissorscss").style.left=37+"%";
    document.getElementById("leafcss").setAttribute("onclick", "leafintomotorclick()" );

}


function leafintomotorclick(){
    document.getElementById("leafcss").style.top=5+"%";
    document.getElementById("leafcss").style.left=55+"%";
    document.getElementById("leafcss").style.transform = "rotate(80deg)";
    document.getElementById("n2bottlecss").setAttribute("onclick", "n2bottlecssclick()" );
}

function n2bottlecssclick(){
    document.getElementById("n2bottlecss").style.top=5+"%";
    document.getElementById("n2bottlecss").style.left=45+"%";
    document.getElementById("n2bottlecss").style.transform = "rotate(80deg)";
    setTimeout(n2bottledown, 500);

    function n2bottledown(){
        document.getElementById("n2bottlecss").style.top=23.5+"%";
    document.getElementById("n2bottlecss").style.left=40+"%";
    document.getElementById("n2bottlecss").style.transform = "rotate(0deg)";
    document.getElementById("n2bottlecss").removeAttribute("onclick", "n2bottlecssclick()" );

setTimeout(crushedpowder, 500);
    }

    function crushedpowder(){
        document.getElementById("motorpestlecss").style.display="none";
        document.getElementById("leafcss").style.display="none";
        document.getElementById("powderbowlcss").style.display="block";
        document.getElementById("powderbowlcss").setAttribute("onclick", "showdnabufferclick()" );

    }
}

function showdnabufferclick(){
    document.getElementById("dnabuffercss").style.display="block";
    document.getElementById("powderbowlcss").style.display="none";
    document.getElementById("dnabuffercss").setAttribute("onclick", "showextracteddnaclick()" );
}

function showextracteddnaclick(){
    document.getElementById("dnabuffercss").style.display="none";
    document.getElementById("dnapelletcss").style.display="block";
    document.getElementById("dnapelletcss").setAttribute("onclick", "showtebuffercssclick()" );
}

function showtebuffercssclick(){
    document.getElementById("tebuffercss").style.display="block";
    document.getElementById("dnapelletcss").style.display="none";
    document.getElementById("tebuffercss").setAttribute("onclick", "showdnafragmentclick()" );

}

function showdnafragmentclick(){
    document.getElementById("tebuffercss").style.display="none";
    document.getElementById("dnafragmentcss").style.display="block";
    document.getElementById("dnafragmentcss").setAttribute("onclick", "showadaptersdnafragmentclick()" );
}

function showadaptersdnafragmentclick(){
    document.getElementById("dnafragmentcss").style.display="block";
    document.getElementById("adaptersdnafragmentcss").style.display="block";
    document.getElementById("adaptersdnafragmentcss").setAttribute("onclick", "showailluminusseqclick()" );
}

function showailluminusseqclick(){
    document.getElementById("seqplatformcss").style.display="block";
    document.getElementById("rawdatacss").style.display="block";
    document.getElementById("filtereddatacss").style.display="block";

}