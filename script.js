function VerificaTamanho(){
    var mobiles = document.querySelectorAll('.mobile');
    var desktops = document.querySelectorAll('.desktop');

    if(window.innerWidth < 876){
        desktops.forEach(function(desktop) {
            desktop.style.display = 'none';
        });
        mobiles.forEach(function(mobile) {
            mobile.style.display = 'block';
        });

        document.getElementById('carouselMobile').innerHTML = `
            <div id="carrouselInicial" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carrouselInicial" data-slide-to="0" class="active"></li>
                    <li data-target="#carrouselInicial" data-slide-to="1"></li>
                    <li data-target="#carrouselInicial" data-slide-to="2"></li>
                    <li data-target="#carrouselInicial" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="imagens/carousel-inicial/1.jpg" class="d-block w-100 h-100"
                            alt="Homens trabalhando em uma tubulação" style="object-position: center bottom">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>MANUTENÇÃO INDUSTRIAL</b></h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="imagens/carousel-inicial/2.jpg" class="d-block w-100 h-100"
                        alt="Eletricista trabalhando">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>CONSTRUÇÃO E MONTAGEM</b></h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="imagens/carousel-inicial/3.jpg" class="d-block w-100 h-100"
                        alt="Homem trabalhando cortando grama">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>FACILITIES</b></h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="imagens/carousel-inicial/4.jpg" class="d-block w-100 h-100"
                            alt="Homens trabalhando com empilhadeira">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>OPERACIONAL</b></h3>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carrouselInicial" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carrouselInicial" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        `;

        document.getElementById('carouselDesktop').innerHTML = "";

        document.getElementById('mobileSobre').innerHTML = `
        <h2 align="center">SERVIÇOS</h2>
        <br><br>
        <div class="manutencao">
            <div class="row">
                <div class="col-12">
                    <h3>Manutenção Industrial</h3>
                    Oferecemos serviços de qualidade, com equipe pró-ativa, comprometida com a segurança das
                    atividades, e com os resultados e metas a serem alcançadas.
                    <ul>
                        <li>Elétrica (subestações, motores, painéis, sistemas elétricos em geral)</li>
                        <li>Instrumentação (cromatófagos, analisadores, medidores diversos, calibrações)</li>
                        <li>Mecânica (equipamentos estáticos e dinâmicos)</li>
                        <li>Caldeiraria e Pintura (dutos, tanques e vasos)</li>
                        <li>Inspeções, ENDs, regulamentação em NRs</li>
                        <li>Construção Civil / Reformas / Pinturas prediais</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <div id="carrouselManutencao" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/manutencao-industrial/manutencao1.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao2.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao3.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao4.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao5.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao6.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao7.png"
                                    class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselManutencao"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselManutencao"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        <br>
        <hr>
        <br>
        <div class="cm">
            <div class="row">
                <div class="col-12">
                    <h3>Construção e Montagem</h3>
                    Possuímos uma equipe de engenharia especializada e altamente treinada para atendermos os
                    prazos estipulados com qualidade e segurança desejada.
                    <ul>
                        <li>Montagem de equipamentos e estruturas metálicas diversas</li>
                        <li>Montagem de trechos de tubulações condutoras de combustíveis</li>
                        <li>Caldeiraria de precisão</li>
                        <li>Sistemas elétricos</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <div id="carrouselCM" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/construcao-e-montagem/cm1.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm2.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm3.png" class="d-block w-100"
                                alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm4.png" class="d-block w-100"
                                alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm5.png" class="d-block w-100"
                                alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselCM"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselCM"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        <br>
        <hr>
        <br>
        <div class="facilites">
            <div class="row">
                <div class="col-12">
                    <h3>Facilities</h3>
                    A área de Facilities da DYNAMUS conta com profissionais especializados em cada um dos
                    serviços oferecidos:
                    <ul>
                        <li>Serviços de apoio técnico e gerencial (planejadores, técnicos, engenheiros.
                            Secretariado, administração)</li>
                        <li>Gerenciamento de espaços (estudos logísticos)</li>
                        <li>Limpeza e conservação predial</li>
                        <li>Jardinagem, poda, descarte de resíduos</li>
                        <li>Gestão de Segurança Industrial (portaria, sistemas de combate a incêndio)</li>
                        <li>Gestão de frota e estoques</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <div id="carrouselFacilites" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/facilites/facilites1.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites3.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites4.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites5.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselFacilites"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselFacilites"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        <br>
        <hr>
        <br>
        <div class="suporteOperacional">
            <div class="row">
                <div class="col-12">
                    <h3>Suporte Operacional</h3>
                    Desenvolvendo serviços especializados de Suporte Técnico Operacional em diversas áreas, a
                    DYNAMUS está presente em segmentos e prestação de serviços operacionais:
                    <ul>
                        <li>Operação de equipamentos (moinhos, estufas e reatores)</li>
                        <li>Análises Laboratoriais</li>
                        <li>Estações de carga e descarga</li>
                        <li>Operação de tanques de armazenamento e Caldeiras</li>
                        <li>Movimentação de cargas(empilhadeiras, plataformas e guindastes)</li>
                        <li>Operação de mangotes, bombas, válvulas e medidores</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <div id="carrouselSO" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/suporte-operacional/suporte1.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/suporte-operacional/suporte2.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/suporte-operacional/suporte3.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/suporte-operacional/suporte4.png"
                                    class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselSO"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselSO"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        <br>
        `;
        document.getElementById('desktopSobre').innerHTML = "";

    }else{
        desktops.forEach(function(desktop) {
            desktop.style.display = 'block';
        });
        mobiles.forEach(function(mobile) {
            mobile.style.display = 'none';
        });

        document.getElementById('carouselDesktop').innerHTML = `
            <div id="carrouselInicial" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carrouselInicial" data-slide-to="0" class="active"></li>
                    <li data-target="#carrouselInicial" data-slide-to="1"></li>
                    <li data-target="#carrouselInicial" data-slide-to="2"></li>
                    <li data-target="#carrouselInicial" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="imagens/carousel-inicial/desktop/1.jpg" class="d-block w-100 h-100"
                            alt="Homens trabalhando em uma tubulação" style="object-position: center bottom">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>MANUTENÇÃO INDUSTRIAL</b></h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="imagens/carousel-inicial/desktop/2.jpg" class="d-block w-100 h-100"
                        alt="Eletricista trabalhando">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>CONSTRUÇÃO E MONTAGEM</b></h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="imagens/carousel-inicial/desktop/3.jpg" class="d-block w-100 h-100"
                        alt="Homem trabalhando cortando grama">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>FACILITIES</b></h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="imagens/carousel-inicial/desktop/4.jpg" class="d-block w-100 h-100"
                            alt="Homens trabalhando com empilhadeira">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h3><b>OPERACIONAL</b></h3>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carrouselInicial" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carrouselInicial" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        `;

        document.getElementById('carouselMobile').innerHTML = "";

        document.getElementById('mobileSobre').innerHTML = "";
        document.getElementById('desktopSobre').innerHTML = `
        <h2 align="center">SERVIÇOS</h2>
        <br><br>
        <div class="manutencao">
            <div class="row">
                <div class="col-7">
                    <h3>Manutenção Industrial</h3>
                    Oferecemos serviços de qualidade, com equipe pró-ativa, comprometida com a segurança das
                    atividades, e com os resultados e metas a serem alcançadas.
                    <ul>
                        <li>Elétrica (subestações, motores, painéis, sistemas elétricos em geral)</li>
                        <li>Instrumentação (cromatófagos, analisadores, medidores diversos, calibrações)</li>
                        <li>Mecânica (equipamentos estáticos e dinâmicos)</li>
                        <li>Caldeiraria e Pintura (dutos, tanques e vasos)</li>
                        <li>Inspeções, ENDs, regulamentação em NRs</li>
                        <li>Construção Civil / Reformas / Pinturas prediais</li>
                    </ul>
                </div>
                <div class="col-5">
                    <div id="carrouselManutencao" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/manutencao-industrial/manutencao1.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao2.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao3.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao4.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao5.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao6.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/manutencao-industrial/manutencao7.png"
                                    class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselManutencao"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselManutencao"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <hr>
        <br>
        <div class="cm">
            <div class="row">
                <div class="col-5">
                    <div id="carrouselCM" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/construcao-e-montagem/cm1.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm2.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm3.png" class="d-block w-100"
                                alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm4.png" class="d-block w-100"
                                alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/construcao-e-montagem/cm5.png" class="d-block w-100"
                                alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselCM"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselCM"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-7">
                    <h3>Construção e Montagem</h3>
                    Possuímos uma equipe de engenharia especializada e altamente treinada para atendermos os
                    prazos estipulados com qualidade e segurança desejada.
                    <ul>
                        <li>Montagem de equipamentos e estruturas metálicas diversas</li>
                        <li>Montagem de trechos de tubulações condutoras de combustíveis</li>
                        <li>Caldeiraria de precisão</li>
                        <li>Sistemas elétricos</li>
                    </ul>
                </div>
            </div>
        </div>
        <br>
        <hr>
        <br>
        <div class="facilites">
            <div class="row">
                <div class="col-7">
                    <h3>Facilities</h3>
                    A área de Facilities da DYNAMUS conta com profissionais especializados em cada um dos
                    serviços oferecidos:
                    <ul>
                        <li>Serviços de apoio técnico e gerencial (planejadores, técnicos, engenheiros.
                            Secretariado, administração)</li>
                        <li>Gerenciamento de espaços (estudos logísticos)</li>
                        <li>Limpeza e conservação predial</li>
                        <li>Jardinagem, poda, descarte de resíduos</li>
                        <li>Gestão de Segurança Industrial (portaria, sistemas de combate a incêndio)</li>
                        <li>Gestão de frota e estoques</li>
                    </ul>
                </div>
                <div class="col-5">
                    <div id="carrouselFacilites" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/facilites/facilites1.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites3.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites4.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/facilites/facilites5.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselFacilites"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselFacilites"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <hr>
        <br>
        <div class="suporteOperacional">
            <div class="row">
                <div class="col-5">
                    <div id="carrouselSO" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagens/servicos/suporte-operacional/suporte1.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/suporte-operacional/suporte2.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/suporte-operacional/suporte3.png"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="imagens/servicos/suporte-operacional/suporte4.png"
                                    class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carrouselSO"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carrouselSO"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-7">
                    <h3>Suporte Operacional</h3>
                    Desenvolvendo serviços especializados de Suporte Técnico Operacional em diversas áreas, a
                    DYNAMUS está presente em segmentos e prestação de serviços operacionais:
                    <ul>
                        <li>Operação de equipamentos (moinhos, estufas e reatores)</li>
                        <li>Análises Laboratoriais</li>
                        <li>Estações de carga e descarga</li>
                        <li>Operação de tanques de armazenamento e Caldeiras</li>
                        <li>Movimentação de cargas(empilhadeiras, plataformas e guindastes)</li>
                        <li>Operação de mangotes, bombas, válvulas e medidores</li>
                    </ul>
                </div>
            </div>
        </div>
        <br>
        `;
    }
}

window.addEventListener('resize', VerificaTamanho);
window.addEventListener('load', VerificaTamanho);

VerificaTamanho()
