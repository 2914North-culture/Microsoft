/**
 * Created by DELL on 2019/10/28.
 */
(function(){
    var oUser = document.getElementsByClassName('user');
    var oLogin = document.getElementsByClassName('login')[0];
    var oMenu_Div = document.getElementsByClassName('menu_div')[0];

    var oGlass = document.getElementsByClassName('glass');
    var oLogo = document.getElementById('logo');
    var oSub = document.getElementsByClassName('sub_form')[0];
    var oInput = oSub.getElementsByTagName('input')[0];
    var oGlass_Click = true;

    for(var i = 0; i < oUser.length; i++){
        oUser[i].oLogin_Click = true;
        oUser[i].onclick = function(){

            oInput.blur();
            oSub.style.transition = '0.25s';
            oSub.style.opacity = 0;
            oSub.style.width = '100%';
            oSub.style.left = 0;
            oSub.style.height = '13px';
            oLogo.style.height = '45px';
            oGlass[0].oGlass_Click = true;

            if(this.oLogin_Click){
                this.style.height = '46px';
                this.style.lineHeight = '46px';
                this.style.backgroundColor = '#ffffff';
                this.style.borderLeft = 'solid 1px #e0e0e0';
                this.style.borderRight = 'solid 1px #e0e0e0';
                oLogin.style.display = 'block';
                oMenu_Div.style.display = 'none';
                this.oLogin_Click = false;
            }
            else{
                this.style.height = '45px';
                this.style.lineHeight = '45px';
                this.style.backgroundColor = '#f5f5f5';
                this.style.border = 'none';
                oLogin.style.display = 'none';
                oMenu_Div.style.display = 'block';
                this.oLogin_Click = true;
            }
        };
    }
})();