document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const searchInput = document.querySelector('input[type="search"]');

    if (!searchInput) {
        return
    }

    document.addEventListener('keydown', e => {
        // Проверяем нажатие '/' и исключаем поля ввода
        if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            searchInput.focus();
        }
    });
})();