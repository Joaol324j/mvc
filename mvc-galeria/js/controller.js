class ImageController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.currentCategory = 'all';
        this.currentKeyword = '';

        // Inicializa a galeria
        this.updateGallery();

        // Bind eventos da View ao Controller
        this.view.bindCategoryFilter(this.handleCategoryFilter.bind(this));
        this.view.bindSearchInput(this.handleSearchInput.bind(this));
        this.view.bindPagination(this.handlePagination.bind(this));
    }

    updateGallery() {
        this.model.filterImages(this.currentCategory, this.currentKeyword);
        const imagesToDisplay = this.model.getCurrentPageImages();
        const totalPages = this.model.getTotalPages();
        const currentPage = this.model.currentPage;

        this.view.applyFadeEffect(() => {
            this.view.renderImages(imagesToDisplay);
            this.view.renderPagination(currentPage, totalPages);
        });
    }

    handleCategoryFilter(category) {
        this.currentCategory = category;
        this.updateGallery();
    }

    handleSearchInput(keyword) {
        this.currentKeyword = keyword;
        this.updateGallery();
    }

    handlePagination(page) {
        this.model.setCurrentPage(page);
        this.updateGallery();
    }
}
