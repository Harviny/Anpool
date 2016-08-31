function f_href(_url) {
	window.location.href=_url;
}
function f_summit_form(operation) {
	with (document.forms[0]) {
		action = action + '?m=' + operation;
		submit();
	}
}
function f_msg_hide() {
	$("#inchoo_global_messages").css("display", "none");
}

function f_system_msg_close() {
	jQuery("#system_msg").attr("style", "display:none");
}

function f_system_msg_show(value) {
	jQuery("#system_msg").attr("class", "notification closeable error");
	jQuery("#system_msg").attr("style", "display:block");
	jQuery("#system_msg_msg").html(value);
}

function f_validate_userid() {
	do {
		var tel = /^[a-zA-Z0-9@+]+$/;
		var userId = $.trim($("#userId").val());
		if(userId == "") {
			$("#userId").val("");
			$("#userIdMsg").html("<font color='red'>Please input user ID</font>");
			break;
		}
		if(!tel.test(userId)) {
			$("#userIdMsg").html("<font color='red'>Input can be only numbers, letters and @ +</font>");
			break;
		}
		$("#userIDMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_validate_password() {
	do {
		var password = $.trim($("#password").val());
		if(password == "") {
			$("#password").val("");
			$("#passwordMsg").html("<font color='red'>Please input password</font>");
			break;
		}
		$("#passwordMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_validate_oldpassword() {
	do {
		var password = $.trim($("#oldPassword").val());
		if(password == "") {
			$("#oldPassword").val("");
			$("#oldPasswordMsg").html("<font color='red'>Please input password</font>");
			break;
		}
		$("#oldPasswordMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_validate_newpassword() {
	do {
		var password = $.trim($("#newPassword").val());
		if(password == "") {
			$("#newPassword").val("");
			$("#newPasswordMsg").html("<font color='red'>Please input new password</font>");
			break;
		}
		$("#newPasswordMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_validate_confirmpassword() {
	do {
		var password = $.trim($("#password").val());
		var confirmPassword = $.trim($("#confirmPassword").val());
		if(confirmPassword != password) {
			$("#confirmPasswordMsg").html("<font color='red'>Please check confirm password</font>");
			break;
		}
		$("#confirmPasswordMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_validate_confirmnewpassword() {
	do {
		var password = $.trim($("#newPassword").val());
		var confirmPassword = $.trim($("#confirmPassword").val());
		if(confirmPassword != password) {
			$("#confirmPasswordMsg").html("<font color='red'>Please check confirm password</font>");
			break;
		}
		$("#confirmPasswordMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_validate_email() {
	do {
		var tel = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
		var email = $.trim($("#email").val());
		if(email == "") {
			$("#email").val("");
			$("#emailMsg").html("<font color='red'>Please input email</font>");
			break;
		}
		if(!tel.test(email)) {
			$("#emailMsg").html("<font color='red'>Email incorrect</font>");
			break;
		}
		$("#emailMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_validate_validation() {
	do {
		var validation = $.trim($("#validation").val());
		if(validation == "") {
			$("#validation").val("");
			$("#validationMsg").html("<font color='red'>Please input validation</font>");
			break;
		}
		$("#validaitonMsg").html("");
		return true;
	} while(false);
	return false;
}

function f_local_language(baseUrl, lang) {
	$.ajax({
		url: baseUrl+'location.htm?language='+lang,
		type: 'GET',
		dataType: 'text',
		success: function(data) {
			if(data == 'ok') {
				window.location.reload();
			}
		},
		error: function() {
		}
	});
}

function f_get_cookie_timezone() {
    var arr = document.cookie.split("; ");
    for(var i=0,len=arr.length; i<len; i++) {
        var item = arr[i].split("=");
        if(item[0]=='btmwebtimezone') {
        	return item[1];  
        }
    }
    return "0";
}