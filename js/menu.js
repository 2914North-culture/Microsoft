/**
 * Created by DELL on 2019/10/22.
 */
(function(){
    var oMenu = document.getElementById('menu');
    var oMenu_Div = document.getElementsByClassName('menu_div')[0];
    var oMenu_ul = document.getElementsByClassName('menu_ul')[0];
    var oMain_Li = document.getElementsByClassName('main_li');
    var oArrow = document.getElementsByClassName('arrow');
    var oShow = document.getElementsByClassName('show');
    var oHardware_subUl = document.getElementsByClassName('hardware_subUl')[0];
    var oSoftware_subUl = document.getElementsByClassName('software_subUl')[0];
    var oSonUl = document.getElementsByClassName('sonUl');
    var menu_click = true;


    var view_Width = window.innerWidth;
    //console.log(view_Width);
    if(view_Width < 1084){

       setInterval(function(){
           window.onscroll = function(){
               var start_Top = document.documentElement.scrollTop;
               if(start_Top > 78){
                   oMenu.style.position = 'fixed';
                   oMenu.style.top = '0px';
                   oMenu.style.zIndex = '500';
                   oMenu_ul.style.height = '0px';
               }
               else{
                   oMenu.style.position = 'relative';
                   oMenu_ul.style.height = '0px';
               }
               oMenu_Div.style.border = 'none';
               oMenu_ul.style.opacity = 0;
               //oMenu_ul.style.display = 'none';
               for(var i = 0; i < oArrow.length; i++){
                   oArrow[i].style.transform = 'rotate(0deg)';
               }
               for(var j = 0; j < oShow.length; j++){
                   oShow[j].style.height = 0;
               }
               menu_click = true;
           };
       },1);

        oMenu_Div.onclick = function(){
            if(menu_click){
                this.style.backgroundColor = '#ffffff';
                this.style.borderTop = 'solid 1px #e0e0e0';
                this.style.borderLeft = 'solid 1px #e0e0e0';
                oMenu_ul.style.height = '468px';
                oMenu_ul.style.opacity = 1;
                //oMenu_ul.style.display = 'block';
                //oMenu_ul.zIndex = '1000';
                menu_click = false;
            }
            else{
                this.style.border = 'none';
                oMenu_ul.style.height = '0px';
                oMenu_ul.style.opacity = 0;
                //oMenu_ul.style.display = 'none';
                for(var i = 0; i < oArrow.length; i++){
                    oArrow[i].style.transform = 'rotate(0deg)';
                }
                for(var j = 0; j < oShow.length; j++){
                    oShow[j].style.height = 0;
                }
                menu_click = true;
            }
        };
        //alert('ol');
        for(var i = 0; i < oMain_Li.length; i++){
            //var arrays = new Array[oMain_Li.length];
            oMain_Li[i].main_click=true;
            oMain_Li[i].onclick = function(){
                var son_Ul = this.getElementsByTagName('ul')[0];

                if(this.main_click){

                    for(var a = 0; a < oArrow.length; a++){
                        oArrow[a].style.transform = 'rotate(0deg)';
                    }
                    for(var b = 0; b < oMain_Li.length; b++){
                        oMain_Li[b].style.backgroundColor = '#fff';
                        oMain_Li[b].main_click=true;
                    }
                    for(var c = 0; c < oShow.length; c++){
                        oShow[c].style.height = 0;

                    }
                    var son_Li = son_Ul.getElementsByTagName('li')[0];
                    var son_LiHeight = getStyle(son_Li,'height');
                    var son_LiLength = son_Ul.getElementsByTagName('li').length;
                    var son_UlHeight = son_LiHeight*son_LiLength;
                    this.style.backgroundColor = '#cfe7f9';
                    son_Ul.style.height = son_UlHeight + 'px';
                    this.getElementsByClassName('arrow')[0].style.transform = 'rotate(180deg)';
                    this.main_click = false;

                }
                else{
                    this.main_click = true;
                    son_Ul.style.height = 0;
                    this.getElementsByClassName('arrow')[0].style.transform = 'rotate(0deg)';
                    this.style.backgroundColor = '#fff';
                }
            }
        }
    }
    else{
        for(var i = 0; i < oSonUl.length; i++){
            oSonUl[i].style.transition = '0.13s';
            oSonUl[i].style.border = 'none';
        }
        oMenu_Div.onclick = function(){
            if(menu_click){
                this.style.backgroundColor = '#ffffff';
                this.style.borderTop = 'solid 1px #e0e0e0';
                this.style.borderLeft = 'solid 1px #e0e0e0';
                oMenu_ul.style.opacity = 1;
                menu_click = false;
            }
            else{
                this.style.border = 'none';
                oMenu_ul.style.opacity = 0;
                for(var i = 0; i < oArrow.length; i++){
                    oArrow[i].style.transform = 'rotate(0deg)';
                }
                for(var j = 0; j < oShow.length; j++){
                    oShow[j].style.height = 0;
                }
                menu_click = true;
            }
        };
        //alert('ol');
        for(var i = 0; i < oMain_Li.length; i++){
            //var arrays = new Array[oMain_Li.length];
            oMain_Li[i].main_click=true;
            oMain_Li[i].onclick = function(){
                var son_Ul = this.getElementsByTagName('ul')[0];


                if(this.main_click){

                    for(var a = 0; a < oArrow.length; a++){
                        oArrow[a].style.transform = 'rotate(0deg)';
                    }
                    for(var b = 0; b < oMain_Li.length; b++){
                        oMain_Li[b].style.backgroundColor = '#fff';
                        oMain_Li[b].main_click=true;
                    }
                    for(var c = 0; c < oShow.length; c++){
                        oShow[c].style.height = 0;
                        oShow[c].style.border = 'none';
                    }
                    son_Ul.style.borderBottom = '1px solid #e0e0e0';
                    son_Ul.style.borderLeft = '1px solid #e0e0e0';
                    son_Ul.style.borderRight = '1px solid #e0e0e0';
                    var son_Li = son_Ul.getElementsByTagName('li')[0];
                    var son_LiHeight = getStyle(son_Li,'height');
                    var son_LiLength = son_Ul.getElementsByTagName('li').length;
                    var son_UlHeight = son_LiHeight*son_LiLength +12;
                    this.style.backgroundColor = '#cfe7f9';
                    son_Ul.style.height = son_UlHeight + 'px';
                    this.getElementsByClassName('arrow')[0].style.transform = 'rotate(180deg)';
                    this.main_click = false;

                }
                else{
                    this.main_click = true;
                    son_Ul.style.height = 0;
                    this.getElementsByClassName('arrow')[0].style.transform = 'rotate(0deg)';
                    this.style.backgroundColor = '#fff';
                    son_Ul.style.border = 'none';
                }
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

    window.onscroll = function(){
        var scroll_Menu = document.documentElement.scrollTop;
        if(scroll_Menu > 78){
            oMenu.style.position = 'fixed';
            oMenu.style.top = '0px';
            oMenu.style.zIndex = '500';

            //===========================

            if(view_Width < 1084){
                //for(var i = 0; i < oSonUl.length; i++){
                //    oSonUl.style.border = 'none';
                //}
                oMenu_ul.style.height = '0px';
                oMenu_Div.onclick = function(){
                    if(menu_click){
                        this.style.backgroundColor = '#ffffff';
                        this.style.borderTop = 'solid 1px #e0e0e0';
                        this.style.borderLeft = 'solid 1px #e0e0e0';
                        oMenu_ul.style.height = '468px';
                        oMenu_ul.style.opacity = 1;
                        menu_click = false;
                    }
                    else{
                        this.style.border = 'none';
                        oMenu_ul.style.height = '0';
                        for(var i = 0; i < oArrow.length; i++){
                            oArrow[i].style.transform = 'rotate(0deg)';
                        }
                        for(var j = 0; j < oShow.length; j++){
                            oShow[j].style.height = 0;
                        }
                        menu_click = true;
                    }
                }
            }
        }
        else{
            oMenu.style.position = 'relative';
            oMenu.style.zIndex = '30';
        }
    }
})();


