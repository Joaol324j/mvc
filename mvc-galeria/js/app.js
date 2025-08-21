document.addEventListener('DOMContentLoaded', () => {
    const model = new ImageModel();
    const view = new ImageView();
    const controller = new ImageController(model, view);
});
