import { iosVhFix } from './utils/ios-vh-fix';
import { slider } from './modules/slider';
import { filterToggle } from './modules/filter-toggle';
import { accordionMenu } from './modules/accordion-menu';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
    iosVhFix();
    slider();
    filterToggle();
    accordionMenu();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

