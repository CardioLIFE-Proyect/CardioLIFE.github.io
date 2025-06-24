// Función para el banner y modal de cookies - versión corregida
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el modal de cookies existe
    const cookiesModal = document.getElementById('cookiesModal');
    if (!cookiesModal) return;
    
    // Referencias a elementos DOM
    const closeModal = cookiesModal.querySelector('.close-modal');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const rejectCookiesBtn = document.getElementById('rejectCookies');
    
    // Función para mostrar el modal de cookies
    function showCookiesModal() {
        cookiesModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Función para cerrar el modal de cookies
    function closeCookiesModal() {
        cookiesModal.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Event listeners para cerrar el modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            closeCookiesModal();
        });
    }
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === cookiesModal) {
            closeCookiesModal();
        }
    });
    
    // Evento para botón aceptar
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', function() {
            // Guardar cookie de aceptación
            const expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 6);
            document.cookie = `cookieConsent=accept_all;expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
            
            closeCookiesModal();
        });
    }
    
    // Evento para botón rechazar
    if (rejectCookiesBtn) {
        rejectCookiesBtn.addEventListener('click', function() {
            // Guardar cookie de rechazo
            const expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 6);
            document.cookie = `cookieConsent=essential_only;expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
            
            closeCookiesModal();
        });
    }
    
    // Añadir evento a todos los enlaces que contengan "Política de Cookies" o similar
    document.querySelectorAll('a').forEach(link => {
        if (link.textContent.toLowerCase().includes('cookie') || 
            (link.href && link.href.toLowerCase().includes('cookie'))) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showCookiesModal();
            });
        }
    });
    
    // Específicamente para el enlace de "Política de Cookies" en el footer
    const cookiePolicyLinks = document.querySelectorAll('.footer-menu a');
    cookiePolicyLinks.forEach(link => {
        if (link.textContent.includes('Cookies')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showCookiesModal();
            });
        }
    });
    
    // Crear banner simple
    function createSimpleCookieBanner() {
        // Crear banner si no existe
        if (document.getElementById('cookieBanner')) return;
        
        // Crear elemento del banner
        const banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.className = 'cookie-banner'; // Usar la clase existente en cookies.css
        
        // Contenido del banner
        banner.innerHTML = `
            <div class="cookie-banner-text">
                <p>Utilizamos cookies para mejorar su experiencia. 
                <a href="#" id="cookiePolicyLink">Ver política de cookies</a>
                </p>
            </div>
            <div class="cookie-banner-actions">
                <button id="bannerAcceptBtn" class="cookie-banner-button cookie-banner-accept">Aceptar</button>
                <button id="bannerCustomizeBtn" class="cookie-banner-button cookie-banner-customize">Personalizar</button>
            </div>
        `;
        
        // Añadir al DOM
        document.body.appendChild(banner);
        
        // Añadir eventos
        document.getElementById('cookiePolicyLink').addEventListener('click', function(e) {
            e.preventDefault();
            showCookiesModal();
        });
        
        document.getElementById('bannerAcceptBtn').addEventListener('click', function() {
            // Guardar cookie
            const expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 6);
            document.cookie = `cookieConsent=accept_all;expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
            
            // Ocultar banner
            banner.style.display = 'none';
        });
        
        document.getElementById('bannerCustomizeBtn').addEventListener('click', function() {
            showCookiesModal();
            banner.style.display = 'none';
        });
    }
    
    // Función para verificar si ya existe consentimiento
    function checkCookieConsent() {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('cookieConsent=')) {
                return true;
            }
        }
        return false;
    }
    
    // Mostrar banner si no hay consentimiento previo
    if (!checkCookieConsent()) {
        // Esperar un poco antes de mostrar el banner
        setTimeout(function() {
            createSimpleCookieBanner();
        }, 1500);
    }
});