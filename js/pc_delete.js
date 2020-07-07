/**
 * Created by DELL on 2019/10/27.
 */
(function(){
    var pc_Delete = document.getElementsByClassName('pc_delete');
    alert(pc_Delete.length);
    for(var i = 0; i < pc_Delete.length; i++){
        pc_Delete[i].parentNode.removeChild(pc_Delete[i]);
    }
})();