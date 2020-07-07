/**
 * Created by DELL on 2019/10/28.
 */
(function(){
    var oTips = document.getElementById('tips');
    var time = 0;
    function time_all(fn){
        var times = setInterval(function(){
            time++;
            if(time == 3){
                oTips.style.height = '33px';
            }
            if(oTips.style.height == '33px'){
                if(fn){
                    fn();
                }
            }
        },1000)
    }
    setInterval(function(){
        time_all(function(){
            setInterval(function(){
                oTips.style.height = '0px'
            },3000);
        });
    },3000)
})();