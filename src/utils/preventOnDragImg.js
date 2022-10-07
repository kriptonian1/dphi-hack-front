const preventOnDragImg = () => {

    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        img.addEventListener('dragstart', e => e.preventDefault());
    });
    
}

export default preventOnDragImg