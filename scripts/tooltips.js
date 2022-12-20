document.addEventListener('DOMContentLoaded', function(){
  tippy('.projects__descr-tooltip-one', {
    theme: 'theme',
    maxWidth: 300,
    content: 'Пример современных тенденций - современная методология разработки',
    duration: 0,
    trigger: 'click',
  });

  tippy('.projects__descr-tooltip-two', {
    theme: 'theme',
    maxWidth: 300,
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    duration: 0,
    trigger: 'click',
  });

  tippy('.projects__descr-tooltip-three', {
    theme: 'theme',
    content: 'В стремлении повысить качество',
    duration: 0,
    trigger: 'click',
  });
});
