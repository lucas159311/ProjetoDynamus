function VerificaTamanho2(){
    if(window.innerWidth < 876){
        $("#imagemMaos").prop('hidden', true);
    }else{
        $("#imagemMaos").prop('hidden', false);
    }
}

window.addEventListener('resize', VerificaTamanho2);
window.addEventListener('load', VerificaTamanho2);

VerificaTamanho2();
