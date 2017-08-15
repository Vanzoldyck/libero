$btn = $("#btnSubmit");



$btn.submit(function (event) {
    event.preventDefault();
});
$btn.click(function (event) {
    event.preventDefault();
    console.log(event);

    alert("Hey!");

});


