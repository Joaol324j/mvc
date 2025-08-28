class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = this.getStoredTheme() || 'light';
        
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

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
        
        document.body.style.transition = 'all 0.3s ease';
        
        this.themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);
    }

    handleSystemPreference() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (!this.getStoredTheme()) {
            prefersDark.addEventListener('change', (e) => {
                if (!this.getStoredTheme()) {
                    this.applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
