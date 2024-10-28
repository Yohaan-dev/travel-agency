// FAQ ACCORDION 
document.addEventListener('DOMContentLoaded', () => {
    const FaqContainer = document.querySelector('.faq-content');

    FaqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (! groupHeader) return;
        
        const group = groupHeader.parentElement;
        const groupsubheader = group.querySelector('.faq-group-subheader');
        const icon = groupHeader.querySelector('i');

        // Toggle Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //Toggle Visibility of the subheader
        groupsubheader.classList.toggle('open');

        //Close other FAQ Group subheader
        const otherGroups = FaqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupsubheader = otherGroup.querySelector('.faq-group-subheader');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupsubheader.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

// Hamburger Button 
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerbutton = document.querySelector('.hamburger-button');
    const mobilemenu = document.querySelector('.mobile-menu');

    hamburgerbutton.addEventListener('click', () => mobilemenu.classList.toggle('active'));
});