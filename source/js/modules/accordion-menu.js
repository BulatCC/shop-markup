const accordionMenu = () => {
    const accordions = document.querySelectorAll('.accordion');
    if (accordions[0]) {
        accordions.forEach((accordion) => {
            const accordionButtons = accordion.querySelectorAll('.accordion_item');
            accordionButtons.forEach((accordionButton) => {
                accordionButton.addEventListener('click', () => {
                    accordionButton.classList.toggle('active');
                });
            });
        });
    }


};

export { accordionMenu };
