class ImageModel {
    constructor() {
      this.images = [
    { 
        id: 1, 
        name: 'Trilha na Floresta Verdejante', 
        category: 'natureza', 
        keyword: 'floresta, árvores, verde, mata, trilha, natureza, paisagem, ecologia, ar livre, caminhada', 
        src: 'img/natureza1.jpg' 
    },
    { 
        id: 2, 
        name: 'Avenida Urbana Movimentada', 
        category: 'cidade', 
        keyword: 'prédios, rua, urbana, cidade, metrópole, trânsito, arquitetura, centro, vida urbana', 
        src: 'img/cidade1.jpg' 
    },
    { 
        id: 3, 
        name: 'Cachorro Companheiro e Dócil', 
        category: 'animais', 
        keyword: 'cachorro, fofo, pet, cão, animal de estimação, filhote, companheiro, leal, amigo', 
        src: 'img/animais1.jpg' 
    },
    { 
        id: 4, 
        name: 'Profissionais Apreensivos', 
        category: 'pessoas', 
        keyword: 'mulher, feliz, sorriso, pessoa, retrato, alegria, contente, rosto, expressão', 
        src: 'img/pessoas1.jpg' 
    },
    { 
        id: 5, 
        name: 'Ambiente de Desenvolvimento', 
        category: 'tecnologia', 
        keyword: 'computador, código, programação, desenvolvimento, software, dev, tela, tecnologia', 
        src: 'img/tecnologia1.jpg' 
    },
    { 
        id: 6, 
        name: 'Paisagem de Montanhas Majestosas', 
        category: 'natureza', 
        keyword: 'montanhas, paisagem, trilha, natureza, rochas, céu, aventura, cume, escalada', 
        src: 'img/natureza2.jpg' 
    },
    { 
        id: 7, 
        name: 'Arquitetura de prédio moderno', 
        category: 'cidade', 
        keyword: 'arranha-céus, noite, luzes, cidade, urbana, paisagem noturna, metrópole, néon', 
        src: 'img/cidade2.jpg' 
    },
    { 
        id: 8, 
        name: 'Gato Doméstico Curioso', 
        category: 'animais', 
        keyword: 'gato, brincalhão, doméstico, felino, pet, animal de estimação, gatinho, bigodes', 
        src: 'img/animais2.jpg' 
    },
    { 
        id: 9, 
        name: 'Profissional Focado no Trabalho', 
        category: 'pessoas', 
        keyword: 'homem, trabalhando, escritório, profissional, negócio, computador, carreira, corporativo', 
        src: 'img/pessoas2.jpg' 
    },
    { 
        id: 10, 
        name: 'Interação com Smartphone', 
        category: 'tecnologia', 
        keyword: 'celular, aplicativo, digital, smartphone, tela, mão, usando, mobile, internet', 
        src: 'img/tecnologia2.jpg' 
    },
    { 
        id: 11, 
        name: 'Pôr do Sol na Praia Tropical', 
        category: 'natureza', 
        keyword: 'praia, mar, sol, oceano, areia, verão, tropical, pôr do sol, litoral, férias', 
        src: 'img/natureza3.jpg' 
    },
    { 
        id: 12, 
        name: 'Arquitetura de Ponte Moderna', 
        category: 'cidade', 
        keyword: 'ponte, rio, arquitetura, cidade, estrutura, engenharia, paisagem urbana, travessia', 
        src: 'img/cidade3.jpg' 
    },
    { 
        id: 13, 
        name: 'Interface de Aplicativo Mobile', 
        category: 'tecnologia', 
        keyword: 'aplicativo, app, mobile, interface, ux, ui, design, smartphone, inovação, tela', 
        src: 'img/tecnologia3.jpg' 
    },
    { 
        id: 14, 
        name: 'Multidão em Festival de Música', 
        category: 'pessoas', 
        keyword: 'multidão, show, cidade, pessoas, festival, evento, público, música, celebrando, noite', 
        src: 'img/pessoas3.jpg' 
    }
];
        this.filteredImages = [...this.images];
        this.currentPage = 1;
        this.imagesPerPage = 3;
    }

    getImages() {
        return this.filteredImages;
    }

    filterImages(category, keyword) {
        let tempImages = this.images;

        if (category && category !== 'all') {
            tempImages = tempImages.filter(image => image.category === category);
        }

        if (keyword) {
            const lowerCaseKeyword = keyword.toLowerCase();
            tempImages = tempImages.filter(image => 
                image.name.toLowerCase().includes(lowerCaseKeyword) ||
                image.keyword.toLowerCase().includes(lowerCaseKeyword)
            );
        }
        this.filteredImages = tempImages;
        this.currentPage = 1; 
    }

    getCurrentPageImages() {
        const startIndex = (this.currentPage - 1) * this.imagesPerPage;
        const endIndex = startIndex + this.imagesPerPage;
        return this.filteredImages.slice(startIndex, endIndex);
    }

    getTotalPages() {
        return Math.ceil(this.filteredImages.length / this.imagesPerPage);
    }

    setCurrentPage(page) {
        if (page >= 1 && page <= this.getTotalPages()) {
            this.currentPage = page;
        }
    }
}
