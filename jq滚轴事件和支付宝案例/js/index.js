$(function(){
    var video=document.getElementsByClassName("video_p")[0];//js jq����
    $(".a_video").click(function(){
        $(".video_p").show()
        video.play()             //�����Ƶ���ֲ�����
    })
    $(".div_d").eq(0).css({"background":"red"})   //��һ����Ĭ�Ϻ�ɫ
    //���Ǽ����ԣ�д�����¼�
    document.onmousewheel=fn;            //�ȸ�
    if(document.addEventListener){          //���
        document.addEventListener("DOMMouseScroll",fn)
    }
    var count=0;
    var isscroll=false;   /*Ϊ�˴���bug��ֹ��ͣ����ʱ������ûִ�����*/
    function fns(){
        count++
        if(count>6){
            count=6
        }
        //��ɫ�仯
        $(".div_d").css({"background":""})   //ͬ������
        $(".div_d").eq(count).css({"background":"red"})
        //ͼƬ�����л�
        $(".ul_banner").stop().animate({"marginTop": -count * parseInt($(".li_banner").css("height")) + "px"},500,"linear",function(){
            //����ִ�����֮������
            isscroll = false;       //����ִ����֮��ſ��Թ���������һ��
            //��Ҫ�ж�������ͼ��Ӧ������
            if (count == 1) {           /*�ӵĵ���*/
                $(".img_size").fadeIn(1000);      //����
                $(".img_yun").addClass("img_p");     //���css3����  /*�Ƶ�margin-left�仯��30%��40%*/
            }
            else if (count == 2) {
                $(".img_tu:first").show(1000);        /*Ĭ�����Ͻ�*/
                $(".img_tu:eq(2)").fadeIn(2000);        //����
                $(".img_tu:eq(1)").css("marginLeft", "20%");   //�ֻ�css3������ǰ����������ֵmarginLeft�ı仯���ƶ�
            }
            else if (count == 3) {
                $(".img_big").css("transform", "scale(1.1)");/*ͼƬǰ����������ֵtransform scale�ı仯�Ŵ󶯻�*/
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
        $(".div_d").css({"background":""})   //��ɫ�仯ͬ������
        $(".div_d").eq(count).css({"background":"red"})
        $(".ul_banner").stop().animate({"marginTop":-count*parseInt($(".li_banner").css("height"))+"px"},500,"linear",function(){
            isscroll = false;       //����ִ����֮��ſ��Թ���������һ��
        })
    }
    function fn(e){
        if(isscroll==false)
        {
            isscroll=true;
            if(e.wheelDelta){
                video.style.display = "none";
                if(e.wheelDelta>0){              //��
                   fns()
                }
                else{
                   fnx()
                }
            }
            else{                //���
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
        /!*�ж�����*!/
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
