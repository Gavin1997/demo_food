$(function(){
    // 处理食谱下拉菜单
    $("#dropdown_food").click(function(){
      $(".my_dropdown_food").toggleClass("d-none");
    })
    // 处理食谱下拉菜单菜式,食材
    $(".food_menu").click(function(e){
        e.preventDefault();
        let $li = $(e.target);
        if($li.is("[data-toggle=menu]")){
          $li.toggleClass("food_menu_active")
        }
    });
    // 处理食谱图片点击跳转到详情页面
    $(".food_box").click(function(e){
        e.preventDefault();
        $("html").animate({scrollTop:1200},500)
    });
    $(".enter").on("click",e=>{
        e.preventDefault();
        $("html").animate({scrollTop:1200},500);
        $("#food_intro").addClass("swing");
        setTimeout(()=>{
            $("#food_intro").removeClass("swing")
        },1000)
    })
    // 处理下来菜单与页面的联动显示与隐藏
    $("[data-toggle=menu_food]").click(function(e){
        e.preventDefault();
        let $item = $(e.target);
        let showId = $item.attr("data-target");
        if($(showId).is(".d-none")){
            $(showId).removeClass("d-none").siblings().not(".background_food").addClass("d-none");
            $(".my_dropdown_food").addClass("d-none");
        }
    });
    // 处理商店收藏图标
    $(".shop-box").click(function(e){
        var item = e.target;
       if($(item).is(".show")){
           $(item).attr("src","img/img/collect2.png").removeClass("show");
       }else{
           $(item).attr("src","img/img/collect1.png").addClass("show");
       }
    });
    // 处理个人中心删除
    $(".yes").click(function(e){
        let item = e.target;
        var $item_sub = $(item).parent().parent().parent().parent();
        $item_sub.addClass("d-none");
        
    });
    $(".no").click(function(e){
        let item = e.target;
        $(item).parent().parent().addClass("d-none");
        setTimeout(()=>{
            $(item).parent().parent().removeClass("d-none");
        },500)
    });
   
    // 处理个人中心收藏
    $("#dropdown_person").click(function(e){
        e.preventDefault();
        $(".my_dropdown_person").toggleClass("d-none");
    });
    // 处理个人中心下拉菜单
    $("[data-toggle=person_menu]").click(function(e){
        e.preventDefault();
        let $item = $(e.target);
        let showId = $item.attr("data-target");
        if($(showId).is(".d-none")){
            $(showId).removeClass("d-none").siblings().not(".background_person").addClass("d-none");
            $(".my_dropdown_person").addClass("d-none");
        }
    });
    // 处理食谱三级页面店铺类型的显示
     // 处理下来菜单与页面的联动显示与隐藏
     $("[data-toggle=shop-store-container]").click(function(e){
        e.preventDefault();
        let $item = $(e.target);
        let showId = $item.parent().attr("data-target");
        if($(showId).is(".d-none")){
            $(showId).removeClass("d-none").siblings().not(".background_food").addClass("d-none");
            $(".my_dropdown_food").addClass("d-none");
        }
    });
});
