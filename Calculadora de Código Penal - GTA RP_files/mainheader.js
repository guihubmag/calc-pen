// Função para incluir o cabeçalho
function includeHeader() {
    var header = `
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><img src="img/logo_nova.png" alt="LeonidasRolePlay" class="logo"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="calculadora-penal-gta-rp.html"><i class="fas fa-calculator"></i> Calculadora Penal GTA RP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="codigo-penal.html"><i class="fas fa-balance-scale"></i> Código Penal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="atenuantes.html"><i class="fas fa-gavel"></i> Atenuantes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="calculadora-penal-dashboard.html"><i class="fas fa-chart-line"></i> Calculadora Penal (Dashboard)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;

    document.write(header);
}

// Incluir o cabeçalho nas páginas
includeHeader();
