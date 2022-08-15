$(document).ready(function(){

  $(".goto").click(function(index) {
        var offset = $("#"+ $(this).data("input")).offset();
        $('html, body').animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });
      });

    $("#select").change(function(index){
        $('#interest').val($(this).find('option:selected').attr('data-intrate') + "%");
        $('#rate').val($(this).find('option:selected').attr('data-intrate'));
        $('#year').val($(this).find('option:selected').attr('data-years'));
        $('#years').val($(this).find('option:selected').attr('data-years'));
        $('#amount').val("$" + Number($(this).find('option:selected').attr('data-amount')).toLocaleString('en'));
        $('#amounts').val($(this).find('option:selected').attr('data-amount'));
    });

//Source: https://getbootstrap.com/docs/5.0/forms/validation/
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation');

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach((form) => {
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
});

});
