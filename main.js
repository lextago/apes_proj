function toggleon(source){
    checkboxes = document.getElementsByName('checkbox');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
      }
}

function toggleoff(){
    document.getElementById("all_check").checked = false;
}

function enablein(checkid, inputid){
    if (document.querySelector('#'+checkid).checked == true){
        document.getElementById(inputid).disabled = false;
    }else{
        document.getElementById(inputid).disabled = true;
        // document.getElementById(inputid).value = '';
    }
}

function clearin(){
    inputs = document.getElementsByName('textfield');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        inputs[i].value = '';
      }
}
