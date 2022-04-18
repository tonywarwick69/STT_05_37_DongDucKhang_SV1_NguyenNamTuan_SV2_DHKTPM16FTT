$(document).ready(function (e) {
    jQuery.validator.addMethod(
      "ten",
      function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9' ]+$/.test(value);
      },
      "Phải nhập tên"
    );
    jQuery.validator.addMethod(
      "ykien",
      function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9' ]+/.test(value);
      },
      "Không được để trống phần bình luận"
    );
    $("#fr").validate({
      rules: {
        txtTen: {
          required: true,
          ten: true,
        },
        txtEmail: {
          required: true,
          ykien: true,
        },
      },
      messages: {
        txtTen: {
          required: "Phải nhập",
          ten: "Phải nhập chữ hoa và khoảng trắng!",
        },
        txtEmail: {
          required: "Phải nhập",
          ykien: "Không được để trống phần bình luận",
        },
      },
    });
    var stt = 1;
    $("#fr").submit(function (e) {
      if ($("#fr").valid()) {
            var row1 = "<label for='spTEN'><h3>"+'Họ tên'+" </h3></label>"+ "<p>" + $("#txtTen").val() + "</p>";
            $("#spTEN").append(row1);
            var row2 =  "<label for='spEmail'><h3>"+'Bình luận'+" </h3></label>"+"<p>" + $("#txtEmail").val() + "</p>";
            $("#spEMAIL").append(row2);
            return false;
          }
      
    
      return true;
    });
});