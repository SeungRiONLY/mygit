$(function(){
    var video=document.getElementsByClassName("video_p")[0];//js jq混用
    $(".a_video").click(function(){
        $(".video_p").show()
        video.play()             //点击视频出现并播放
    })
    $(".div_d").eq(0).css({"background":"red"})   //第一个点默认红色
    //考虑兼容性，写滚轴事件
    document.onmousewheel=fn;            //谷歌
    if(document.addEventListener){          //火狐
        document.addEventListener("DOMMouseScroll",fn)
    }
    var count=0;
    var isscroll=false;   /*为了处理bug防止不停滚动时动画还没执行完成*/
    function fns(){
        count++
        if(count>6){
            count=6
        }
        //颜色变化
        $(".div_d").css({"background":""})   //同种显异
        $(".div_d").eq(count).css({"background":"red"})
        //图片动画切换
        $(".ul_banner").stop().animate({"marginTop": -count * parseInt($(".li_banner").css("height")) + "px"},500,"linear",function(){
            //动画执行完成之后发生的
            isscroll = false;       //动画执行完之后才可以滚动继续下一个
            //先要判断是哪张图对应那张字
            if (count == 1) {           /*子的淡出*/
                $(".img_size").fadeIn(1000);      //文字
                $(".img_yun").addClass("img_p");     //结合css3动画  /*云的margin-left变化再30%到40%*/
            }
            else if (count == 2) {
                $(".img_tu:first").show(1000);        /*默认左上角*/
                $(".img_tu:eq(2)").fadeIn(2000);        //文字
                $(".img_tu:eq(1)").css("marginLeft", "20%");   //手机css3动画在前后两次属性值marginLeft的变化中移动
            }
            else if (count == 3) {
                $(".img_big").css("transform", "scale(1.1)");/*图片前后两次属性值transform scale的变化放大动画*/
                $(".img_fan").fadeIn(2000);
            }
            else if (count == 4) {
                $(".img_sma").fadeIn(2000);
            }
            else if (count == 5) {
                $(".img_pai").fadeIn(2000);
            }
        })
    }
    function fnx(){
        count--;
        if(count<0){
            count=0
        }
        $(".div_d").css({"background":""})   //颜色变化同种显异
        $(".div_d").eq(count).css({"background":"red"})
        $(".ul_banner").stop().animate({"marginTop":-count*parseInt($(".li_banner").css("height"))+"px"},500,"linear",function(){
            isscroll = false;       //动画执行完之后才可以滚动继续下一个
        })
    }
    function fn(e){
        if(isscroll==false)
        {
            isscroll=true;
            if(e.wheelDelta){
                video.style.display = "none";
                if(e.wheelDelta>0){              //上
                   fns()
                }
                else{
                   fnx()
                }
            }
            else{                //火狐
                if(e.detail<0){
                    fns()
                }
                else{
                    fnx()
                }
            }
        }
    }
});
/*
/!**
 * Created by Administrator on 2017/4/15.
 *!/
$(function () {

    var count = 0;
    var isscroll = false;
    document.body.onmousewheel = function (e)
     {
        video.style.display = "none";
        var event = e || window.event;
        console.log(event.wheelDelta);
        /!*判断正负*!/
        if (isscroll == false)
        {
            isscroll = true;
            if (event.wheelDelta > 0) {
                count++;
                if (count >= 6) {
                    count = 6;
                }
                $(".div_d").css("backgroundColor", "");
                $(".div_d:eq(" + count + ")").css("backgroundColor", "#00BBEE");
                $(".ul_banner").stop().animate({"marginTop": -count * parseInt($(".li_banner").css("height")) + "px"}, 500, "linear", function () {
                    isscroll = false;
                    if (count == 1) {
                        $(".img_size").fadeIn(1000);
                        $(".img_yun").addClass("img_p");
                    }
                    else if (count == 2) {
                        $(".img_tu:first").show(1000);
                        $(".img_tu:eq(2)").fadeIn(2000);
                        $(".img_tu:eq(1)").css("marginLeft", "20%");
                    }
                    else if (count == 3) {
                        $(".img_big").css("transform", "scale(1.1)");
                        $(".img_fan").fadeIn(2000);
                    }
                    else if (count == 4) {
                        $(".img_sma").fadeIn(2000);
                    }
                    else if (count == 5) {
                        $(".img_pai").fadeIn(2000);
                    }
                });
            }
            else {
                count--;
                if (count <= 0) {
                    count = 0;
                }
                $(".div_d").css("backgroundColor", "");
                $(".div_d:eq(" + count + ")").css("backgroundColor", "#00BBEE");
                $(".ul_banner").stop().animate({"marginTop": -count * parseInt($(".li_banner").css("height")) + "px"}, 500, "linear", function () {
                    isscroll = false;
                });
            }
        }
    }
});
*/
