document.addEventListener('DOMContentLoaded', function(){
  var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);

    new JustValidate('.callback__validate-form', {
      colorWrong: '#D11616',

      messages: {
        name: {
          required: 'Как вас зовут?',
          required: 'Недопустимый формат',
        },

        phone: {
          required: 'Укажите ваш телефон'
        },
      },

      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 30,
        },

        phone: {
          required:true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
      },
    });
});
