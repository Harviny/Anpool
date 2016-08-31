// JavaScript Document

/** 
 *选中样式
 *obj: 选中元素
 *style: 所给样式
 */
var ElementClickStyle=function(obj)/**click选中样式*/
{
   obj.addClass("active");
   obj.siblings().removeClass("active");
}

/**
 *  功能：增加分组
 *  页面：miner.html
 */
var addchildren=function()
{
    $(".mtop_left li").removeClass("active");
    var GroupName=$("#Groupname").val()
    $(".mtop_left").children("li").eq(0).after('<li onclick="ElementClickStyle($(this))" class="active">'+GroupName+'</li>') 
}

/**
 *  功能：删除分组
 *  页面：miner.html
 */
var delgroup=function()
{
    $(".mtop_left .active").remove();
    $(".mtop_left").children("li").eq(1).addClass("active");
}


/**
 *  功能：隐藏/展开分组
 *  页面：miner.html
 */
var hidechildren=function()
{
   $(".mtop_left li:not(.groupMenu)").toggle();
}

/**
 *  功能：隐藏/展开table
 *  setting.html
 */
var hide_thistb=function(obj)
{
   obj.parent().next().toggle();
}

/**
 *  功能：编辑付款方式和备注
 *  setting.html
 */
var set_edit=function(obj,num)
{
    var span1=obj.parent().prev().children("span");
    var span2=  obj.parent().prev().prev().children("span");
    var span3=obj.parent().prev().prev().prev().prev().prev().children("span");
    var input1=obj.parent().prev().children("input");
    var input2=obj.parent().prev().prev().children("input");
    var input3=obj.parent().prev().prev().prev().prev().prev().children("input");
    if (num==1) {
         obj.hide();
         obj.next().show();
         obj.next().next().show();
    };
    if (num==2) {
         obj.hide();
         obj.next().hide();
         obj.prev().show();
    };
     if (num==3) {
         obj.hide();
         obj.prev().hide();
         obj.prev().prev().show();
    };
       span1.toggle(); span2.toggle();span3.toggle()
       input1.toggle(); input2.toggle(); input3.toggle();
   if (num==4) {
         obj.parent().hide();
         obj.parent().next().show();        
    };
      if (num==5) {
         obj.parent().hide();
         obj.parent().prev().show();        
    };

}
/**
 *  功能：全选、反选
 *  miner.html
 */
$(document).ready(function() {
    $("#allchecked").click(function(){    
    if(this.checked){    
        $("#listTB :checkbox").attr("checked", true);   
    }else{    
        $("#listTB :checkbox").attr("checked", false); 
    }    
});
});

/**
 *  功能：增加api
 *  api.html
 */
var addapi=function(){
   $("#apitext tr:last()").before('<tr><td><input  type="text"  name="ipList" /></td><td><a href="#" onclick="delapi($(this))">-</a></td></tr>');
}

/**
 *  功能：删除api
 *  api.html
 */
var delapi=function(obj){
   obj.parent().parent().remove();
}
