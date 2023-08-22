// Função para incluir o rodapé
function includeFooter() {
    var footer = `
        <footer class="footer container">
            <div class="logo-section text-center">
                <img src="img/logo_nova.png" alt="Logo do Leonidas RolePlay" class="logo">
                <p class="descricao">Junte-se às minhas aventuras no universo do GTA RP 🎮 #GTARP #RP</p>
            </div>
            <div class="social-media-section text-center">
                <p class="redes-sociais-footer">Siga minhas redes sociais abaixo:</p>
                <div class="redes-sociais-footer">
                    <a href="https://www.facebook.com/LeonidasRolePlay/" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/leonidasroleplay/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@LeonidasRolePlay?sub_confirmation=1" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@leonidasroleplay?lang=pt-BR" target="_blank"><i class="fab fa-tiktok"></i></a>
                    <a href="https://www.twitch.tv/leonidasroleplay" target="_blank"><i class="fab fa-twitch"></i></a>
                    <a href="https://discord.gg/5FtEtpAe89" target="_blank"><i class="fab fa-discord"></i></a>
                </div>
            </div>
            <div class="copyright-section text-center">
                Desenvolvido por Pandora Data &copy; <span id="current-year"></span> | <a href="https://www.pandoradata.com.br/" target="_blank">https://www.pandoradata.com.br/</a> | Todos os Direitos Reservados
            </div>
        </footer>
    `;

    document.write(footer);
    document.getElementById("current-year").textContent = new Date().getFullYear();

}

// Incluir o cabeçalho e o rodapé nas páginas
includeFooter();
