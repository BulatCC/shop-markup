const filterToggle = () => {
    const filters = document.querySelectorAll('.dropdown-menu');
    if (filters[0]) {
        filters.forEach((filter) => {
            const filterButton = filter.querySelector('.dropdown-menu_dropdown');
            const filterContent = filter.querySelector('.dropdown-menu_content');
            const closeButton = filter.querySelector('.js-filter-close');
            filterButton.addEventListener('click', () => {
                filterContent.classList.toggle('active');
                filterButton.classList.toggle('active');
            });
            closeButton.addEventListener('click', () => {
                filterContent.classList.remove('active');
            });
        });
    }
};

export { filterToggle };
