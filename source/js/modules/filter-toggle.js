const filterToggle = () => {
    const filters = document.querySelectorAll('.filter');
    if (filters[0]) {
        filters.forEach((filter) => {
            const filterButton = filter.querySelector('.filter_dropdown');
            const filterContent = filter.querySelector('.filter_content');
            const closeButton = filter.querySelector('.js-filter-close');
            filterButton.addEventListener('click', () => {
                filterContent.classList.toggle('active');
            });
            closeButton.addEventListener('click', () => {
                filterContent.classList.remove('active');
            });
        });
    }
};

export { filterToggle };
