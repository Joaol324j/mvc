class ImageView {
    constructor() {
        this.galleryContainer = document.getElementById('gallery-container');
        this.categoryButtons = document.querySelector('.category-buttons');
        this.searchInput = document.getElementById('search-input');
        this.paginationContainer = document.getElementById('pagination-container');
    }

    renderImages(images) {
        this.galleryContainer.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('div');
            imgElement.classList.add('gallery-item');
            imgElement.innerHTML = `
                <img src="${image.src}" alt="${image.name}">
                <p>${image.name}</p>
            `;
            this.galleryContainer.appendChild(imgElement);
        });
    }

    renderPagination(currentPage, totalPages) {
        this.paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('page-button');
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.dataset.page = i;
            this.paginationContainer.appendChild(button);
        }
    }

    bindCategoryFilter(handler) {
        this.categoryButtons.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                handler(event.target.dataset.category);
            }
        });
    }

    bindSearchInput(handler) {
        this.searchInput.addEventListener('input', (event) => {
            handler(event.target.value);
        });
    }

    bindPagination(handler) {
        this.paginationContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON' && event.target.classList.contains('page-button')) {
                handler(parseInt(event.target.dataset.page));
            }
        });
    }

    applyFadeEffect(callback) {
        this.galleryContainer.style.opacity = 0;
        setTimeout(() => {
            callback();
            this.galleryContainer.style.opacity = 1;
        }, 500); 
    }
}
