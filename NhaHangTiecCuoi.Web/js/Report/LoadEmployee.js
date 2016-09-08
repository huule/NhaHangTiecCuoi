$("#storeDdl").change(function (e) {
    $("#employee-grid").empty();
});

$("#btn-load-data").on('click', function () {
    ResetValue();

    var selected = [];
    var _storeId = $('#storeDdl').val();

    if (_storeId != null) {
        $.ajax({
            url: BaseUrl + 'BaseReport/LoadEmployee',
            data: { StoreId: _storeId },
            type: "post",
            traditional: true,
            dataType: "html",
            beforeSend: function () {
                $("#loadingSave").show();
            },
            success: function (data) {
                $("#employee-grid").html(data);
                $("#loadingSave").hide();
                if (data === "") {
                    $('.validateEmp').html('Employees is Null.');
                }
            }
        });
    } else {
        $('.validateLevel').html('Please choose at Store');
    }
    return false;
});

$("#btn-Export").on('click', function () {
    ResetValue();

    var _storeId = $('#storeDdl').val();
    if (_storeId == null) {
        $('.validateLevel').html('Please choose at Store');
        return false;
    }

    //===================
    if ($('#employee-grid').html() === "") {
        $('.validateEmp').html('Employees is Null.');
        return false;
    }
    var selectedEmp = [];
    $('#employee-grid tbody input:checked').each(function () {
        selectedEmp.push($(this).parent().find("input[name*='Index']").val());
    });
    if (selectedEmp.length == 0) {
        $('.validateEmp').html('Please choose employee.');
        return false;
    }
    $(".validateEmp").empty();
    return true;
});

function ResetValue() {
    $(".validation-summary-errors").empty();
    $(".validateLevel").empty();
    $('.validateEmp').empty();
}