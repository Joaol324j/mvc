class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = this.getStoredTheme() || 'light';
        
        this.init();
    }

    init() {
        // Aplicar tema salvo
        this.applyTheme(this.currentTheme);
        
        // Adicionar event listener
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Adicionar suporte para preferência do sistema
        this.handleSystemPreference();
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.setStoredTheme(theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // Adicionar efeito de transição suave
        document.body.style.transition = 'all 0.3s ease';
        
        // Feedback visual
        this.themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);
    }

    handleSystemPreference() {
        // Verificar se o usuário prefere tema escuro
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Aplicar tema do sistema se não houver preferência salva
        if (!this.getStoredTheme()) {
            prefersDark.addEventListener('change', (e) => {
                if (!this.getStoredTheme()) {
                    this.applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
