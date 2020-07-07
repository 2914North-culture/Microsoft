/**
 * Created by DELL on 2019/10/29.
 */
(function(){
    var oOut_Li = document.getElementsByClassName('out_li');
    var oIn_Uls = document.getElementsByClassName('in_ul');
    var oSups = document.getElementsByClassName('out_li_sup');

    for(var i = 0; i < oSups.length; i++){
        oSups[i].oOutLi_Click = true;
        oSups[i].onclick = function(){
            var oIn_Ul = this.parentNode.getElementsByClassName('in_ul')[0];
            if(this.oOutLi_Click){

                for(var j = 0; j < oSups.length; j++){
                    oSups[j].oOutLi_Click = true;
                }
                for(var k = 0; k < oIn_Uls.length; k++){
                    oIn_Uls[k].style.height = '0px';
                }
                var oIn_Li = oIn_Ul.getElementsByTagName('li')[0];
                var oIn_LiHeight = getStyle(oIn_Li,'height');
                var oIn_LiLength = oIn_Ul.getElementsByTagName('li').length;
                var oIn_UlHeight = oIn_LiHeight*oIn_LiLength;
                oIn_Ul.style.height = oIn_UlHeight + 'px';
                this.oOutLi_Click = false;
            }
            else{
                oIn_Ul.style.height = '0px';
                this.oOutLi_Click = true;
            }
        }
    }

    function getStyle(obj,attr){
        if(obj.currentStyle){
            return parseInt(obj.currentStyle(attr));
        }
        else{
            return parseInt(getComputedStyle(obj,false)[attr]);
        }
    }
})();