/**
 * Created by DELL on 2019/10/28.
 */
(function(){
    var oGlass = document.getElementsByClassName('glass');
    var oLogo = document.getElementById('logo');
    var oSub = document.getElementsByClassName('sub_form')[0];
    var oInput = oSub.getElementsByTagName('input')[0];
    //var oGlass_Click = true;

    var oLogin = document.getElementsByClassName('login')[0];
    var oUser = document.getElementsByClassName('user')[0];
    var oMenu_Div = document.getElementsByClassName('menu_div')[0];
    var oLogin_click = true;

    for(var i = 0; i < oGlass.length; i++){
        oGlass[i].oGlass_Click = true;
        oGlass[i].onclick = function(){

            oUser.style.height = '45px';
            oUser.style.lineHeight = '45px';
            oUser.style.backgroundColor = '#f5f5f5';
            oUser.style.border = 'none';
            oLogin.style.display = 'none';
            oMenu_Div.style.display = 'block';
            oUser.oLogin_Click = true;

            if(this.oGlass_Click){
                oSub.style.transition = '0.36s';
                oLogo.style.height = '81px';
                oSub.style.opacity = 1;
                oSub.style.width = '94.5%';
                oSub.style.left = '3.6%';
                oSub.style.height = '30px';
                oInput.focus();
                this.oGlass_Click = false;
            }
            else{
                oInput.blur();
                oSub.style.transition = '0.25s';
                oSub.style.opacity = 0;
                oSub.style.width = '100%';
                oSub.style.left = 0;
                oSub.style.height = '13px';
                oLogo.style.height = '45px';
                this.oGlass_Click = true;
            }
        }
    }
})();

(function(){
    var oSup_form = document.getElementsByClassName('sup_form')[0];
    var oInput = oSup_form.getElementsByTagName('input')[0];
    oInput.onfocus = function(){
        oSup_form.style.boxShadow = '0.4px 0.25px 0.82px 0.72px #707070 inset';
    };
    oInput.onblur = function(){
        oSup_form.style.boxShadow = '0.1px 0.1px 0.4px 0.4px #707070 inset';
    }
})();