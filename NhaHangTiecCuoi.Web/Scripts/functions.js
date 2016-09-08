/* Call View or Edit action with given url and show response (html) in .detail-view element */
function ShowViewOrEdit(action) {
    $.ajax({
        url: action,
        beforeSend: function () {
            $(".se-pre-con").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
            $(".se-pre-con").hide();
        },
        success: function (html) {
            $(".se-pre-con").hide();
            ShowDetail(html);
        }
    });
}

function ShowDetail(content) {
    $(".detail-view").html(content);
    $(".detail-view").show();
}

function CloseDetail() {
    $(".detail-view").hide();
}

function SubmitForm(form) {
    $(form).submit();
}

function Search() {
    var form = $(".search-form");
    $.ajax({
        url: $(form).attr('action'),
        type: 'post',
        data: $(form).serialize(),
        dataType: "html",
        beforeSend: function () {
            $(".se-pre-con").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $(".search-form .validateLevel").html('' + errorThrown);
            $(".search-form .validateLevel").parents('.form-group').addClass('has-error');
        },
        success: function (data) {
            $(".gridview").html(data);
            $(".search-form .validateLevel").html('');
            $(".search-form .validateLevel").parents('.form-group').removeClass('has-error');
        },
        complete: function () {
            $(".se-pre-con").hide();
        }
    });
    return false;
}