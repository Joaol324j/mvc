class ImageModel {
    constructor() {
        this.images = [
            { id: 1, name: 'Natureza 1', category: 'natureza', keyword: 'floresta, árvores, verde', src: 'img/natureza1.jpg' },
            { id: 2, name: 'Cidade 1', category: 'cidade', keyword: 'prédios, rua, urbana', src: 'img/cidade1.jpg' },
            { id: 3, name: 'Animal 1', category: 'animais', keyword: 'cachorro, fofo, pet', src: 'img/animais1.jpg' },
            { id: 4, name: 'Pessoa 1', category: 'pessoas', keyword: 'mulher, feliz, sorriso', src: 'img/pessoas1.jpg' },
            { id: 5, name: 'Tecnologia 1', category: 'tecnologia', keyword: 'computador, código, programação', src: 'img/tecnologia1.jpg' },
            { id: 6, name: 'Natureza 2', category: 'natureza', keyword: 'montanhas, paisagem, trilha', src: 'img/natureza2.jpg' },
            { id: 7, name: 'Cidade 2', category: 'cidade', keyword: 'arranha-céus, noite, luzes', src: 'img/cidade2.jpg' },
            { id: 8, name: 'Animal 2', category: 'animais', keyword: 'gato, brincalhão, doméstico', src: 'img/animais2.jpg' },
            { id: 9, name: 'Pessoa 2', category: 'pessoas', keyword: 'homem, trabalhando, escritório', src: 'img/pessoas2.jpg' },
            { id: 10, name: 'Tecnologia 2', category: 'tecnologia', keyword: 'celular, aplicativo, digital', src: 'img/tecnologia2.jpg' },
            { id: 11, name: 'Natureza 3', category: 'natureza', keyword: 'praia, mar, sol', src: 'img/natureza3.jpg' },
            { id: 12, name: 'Cidade 3', category: 'cidade', keyword: 'ponte, rio, arquitetura', src: 'img/cidade3.jpg' },
        ];
        this.filteredImages = [...this.images];
        this.currentPage = 1;
        this.imagesPerPage = 4;
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
        this.currentPage = 1; // Reset to first page on filter/search
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
