/**
 * Created by DELL on 2019/10/28.
 */
(function(){
    var oPc_User = document.getElementsByClassName('pc_user')[0];
    var oLogin_click_Pc = true;
    var oLogin = document.getElementsByClassName('login')[0];
    var oPc_I = oPc_User.getElementsByTagName('i')[0];

    var oUser = document.getElementsByClassName('user');


    //if(oUser[0].style.backgroundColor == '#ffffff'){
    //    alert(1);
    //    oPc_User.style.backgroundColor = '#ffffff';
    //    oPc_User.style.borderLeft = 'solid 1px #e0e0e0';
    //    oPc_User.style.borderRight = 'solid 1px #e0e0e0';
    //    oLogin.style.display = 'block';
    //}
    oPc_User.onclick = function(){
        if(oLogin_click_Pc){
            //oPc_User.style.height = '47x';
            //oPc_User.style.lineHeight = '47px';
            oPc_I.style.transform = 'rotate(180deg)';
            oPc_User.style.backgroundColor = '#ffffff';
            oPc_User.style.borderLeft = 'solid 1px #e0e0e0';
            oPc_User.style.borderRight = 'solid 1px #e0e0e0';
            oLogin.style.display = 'block';
            oLogin_click_Pc = false;
        }
        else{
            //oPc_User.style.height = '44px';
            //oPc_User.style.lineHeight = '44px';
            oPc_I.style.transform = 'rotate(0deg)';
            oPc_User.style.backgroundColor = '#f5f5f5';
            oPc_User.style.border = 'none';
            oLogin.style.display = 'none';
            oLogin_click_Pc = true;
        }
    }
})();