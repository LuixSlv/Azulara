function showSection(sectionNumber) {
    // Esconder todas as seções
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar a seção selecionada
    document.getElementById('section' + sectionNumber).classList.add('active');
}
