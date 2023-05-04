$(document).ready(function () {
  $("#btnDK").on("click", function () {
    $("#myModalDK").modal();
  });
  $("#btnDN").on("click", function () {
    $("#myModalDN").modal();
  });
  $("#btn-signup-insingin").on("click", function () {
    $("#myModalDK").modal();
    $("#myModalDN").hide();
  });

  $("#txtHoTen").val("Tran Hien");
  $("#txtDiaChi").val("12 Nguyen");
  $("#txtEmail").val("vinh1412@gmail.com");
  $("#txtPass").val("th1_dsfs");
  $("#txtEmailDN").val("vinh1412@gmail.com");
  $("#txtPassDN").val("th1_dsfs");

  function kiemTraHoTen() {
    var hoTen = $("#txtHoTen").val();
    var regex = /^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/;
    if (hoTen == "") {
      $("#errHoTen").html("Bắt buộc nhập tên không được để trống");
      $("#errHoTen").addClass("mauDo");
      return false;
    } else {
      if (regex.test(hoTen)) {
        $("#errHoTen").html("*");
        $("#errHoTen").removeClass("mauDo");
        return true;
      } else {
        $("#errHoTen").html("Tên phải là chữ");
        $("#errHoTen").addClass("mauDo");
        return false;
      }
    }
  }
  $("#txtHoTen").blur(kiemTraHoTen);

  function kiemTraDiaChi() {
    var diaChi = $("#txtDiaChi").val();
    var regex = /([A-Za-z0-9]{2,})(\s[A-Za-z0-9]*)/;
    if (diaChi == "") {
      $("#errDiaChi").html("Bắt buộc nhập địa chỉ không được để trống");
      $("#errDiaChi").addClass("mauDo");
      return false;
    } else {
      if (regex.test(diaChi)) {
        $("#errDiaChi").html("*");
        $("#errDiaChi").removeClass("mauDo");
        return true;
      } else {
        $("#errDiaChi").html("Địa chỉ phải là có từ 2 chữ trở lên và chữ đầu phải có từ 2 ký tự trở lên và không có ký tự đặc biệt");
        $("#errDiaChi").addClass("mauDo");
        return false;
      }
    }
  }
  $("#txtDiaChi").blur(kiemTraDiaChi);

  function kiemTraEmail() {
    var email = $("#txtEmail").val();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == "") {
      $("#errEmail").html("Bắt buộc nhập email không được để trống");
      $("#errEmail").addClass("mauDo");
      return false;
    } else {
      if (regex.test(email)) {
        $("#errEmail").html("*");
        $("#errEmail").removeClass("mauDo");
        return true;
      } else {
        $("#errEmail").html("Email không phù hợp");
        $("#errEmail").addClass("mauDo");
        return false;
      }
    }
  }
  $("#txtEmail").blur(kiemTraEmail);

  function kiemTraPass() {
    var pass = $("#txtPass").val();
    var regex = /^[a-z0-9_-]{6,18}$/;
    if (pass == "") {
      $("#errPass").html("Bắt buộc nhập password không được để trống");
      $("#errPass").addClass("mauDo");
      return false;
    } else {
      if (regex.test(pass)) {
        $("#errPass").html("*");
        $("#errPass").removeClass("mauDo");
        return true;
      } else {
        $("#errPass").html("Password không chứa chữ hoa và chỉ chứa 2 ký tự '-, _'");
        $("#errPass").addClass("mauDo");
        return false;
      }
    }
  }
  $("#txtPass").blur(kiemTraPass);

  let i = 2;
  $("#btnSign").click(function (e) {
    let hoTen = $("#txtHoTen").val();
    let diaChi = $("#txtDiaChi").val();
    let email = $("#txtEmail").val();
    let pass = $("#txtPass").val();
    let newRow = "<tr><td>" + (i++) + "</td><td>" + hoTen + "</td><td>" + diaChi + "</td><td>" + email + "</td><td>" + pass + "</td></tr>";
    if (kiemTraHoTen() && kiemTraDiaChi() && kiemTraEmail() && kiemTraPass()) {
      $("#tblDuLieu").append(newRow);
      alert("Đăng ký thành công");
      $("#myModalDK").modal("hide");
      return true;
    } else {
      alert("Đăng ký không thành công");
      return false;
    }

  });
  // Kiểm tra dữ liệu modal đăng nhập
  function kiemTraEmailDN() {
    var emailDN = $("#txtEmailDN").val();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailDN == "") {
      $("#errEmailDN").html("Bắt buộc nhập email không được để trống");
      $("#errEmailDN").addClass("mauDo");
      return false;
    } else {
      if (regex.test(emailDN)) {
        $("#errEmailDN").html("*");
        $("#errEmailDN").removeClass("mauDo");
        return true;
      } else {
        $("#errEmailDN").html("Email không phù hợp");
        $("#errEmailDN").addClass("mauDo");
        return false;
      }
    }
  }
  $("#txtEmailDN").blur(kiemTraEmailDN);

  function kiemTraPassDN() {
    var passDN = $("#txtPassDN").val();
    var regex = /^[a-z0-9_-]{6,18}$/;
    if (passDN == "") {
      $("#errPassDN").html("Bắt buộc nhập password không được để trống");
      $("#errPassDN").addClass("mauDo");
      return false;
    } else {
      if (regex.test(passDN)) {
        $("#errPassDN").html("*");
        $("#errPassDN").removeClass("mauDo");
        return true;
      } else {
        $("#errPassDN").html("Password không chứa chữ hoa và chỉ chứa 2 ký tự '-, _'");
        $("#errPassDN").addClass("mauDo");
        return false;
      }
    }
  }
  $("#txtPassDN").blur(kiemTraPassDN);
  let a=2
  $("#btnSignIn").click(function (e) {
    // window.location.href = "/index.html";
   
    let email = $("#txtEmailDN").val();
    let pass = $("#txtPassDN").val();
    let newRow = "<tr><td>" + (a++) + "</td><td>"+"</td><td>" + "</td><td>" + email + "</td><td>" + pass + "</td></tr>";
    if (kiemTraEmailDN() && kiemTraPassDN()) {
      $("#tblDuLieu").append(newRow);
      alert("Đăng nhập thành công");
      $("#myModalDN").modal("hide");
      return true;
    } else {
      alert("Đăng nhập không thành công");
      return false;
    }

  });
});
