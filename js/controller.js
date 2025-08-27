class ImageController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.currentCategory = 'all';
        this.currentKeyword = '';

        this.updateGallery();

        this.view.bindCategoryFilter(this.handleCategoryFilter.bind(this));
        this.view.bindSearchInput(this.handleSearchInput.bind(this));
        this.view.bindPagination(this.handlePagination.bind(this));
    }

    updateGallery() {
        const imagesToDisplay = this.model.getCurrentPageImages();
        const totalPages = this.model.getTotalPages();
        const currentPage = this.model.currentPage;

        this.view.applyFadeEffect(() => {
            this.view.renderImages(imagesToDisplay);
            this.view.renderPagination(currentPage, totalPages);
        });
    }

    handleCategoryFilter(category) {
        if (category === this.currentCategory) return;
        this.currentCategory = category;
        this.model.filterImages(this.currentCategory, this.currentKeyword); 
        this.updateGallery();
    }

    handleSearchInput(keyword) {
        if (keyword === this.currentKeyword) return;
        this.currentKeyword = keyword;
        this.model.filterImages(this.currentCategory, this.currentKeyword); 
        this.updateGallery();
    }

    handlePagination(page) {
        this.model.setCurrentPage(page);
        this.updateGallery();
    }
}
