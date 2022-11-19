var stoping_var = false;

function getRndInteger(max) {
    return Math.floor(Math.random() * (max) ) + 1;
}

function deleteChild() {
    var e = document.getElementById("bars");
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

var arr_size=document.querySelector("#arr_sz"); 
var no_of_bar=arr_size.value;
document.getElementById("arr_sz").addEventListener("input", new_arr);

new_arr();

document.getElementById("new_array").addEventListener("click", new_arr);

document.getElementById("stop_button").addEventListener("click", stop_fun);

function stop_fun(){
    stoping_var = true;
    document.getElementById("new_array").removeAttribute('disabled');
}


function new_arr(){

    arr_size=document.querySelector("#arr_sz"); 
    no_of_bar=arr_size.value;

    deleteChild();

    const nums = [];
    let max = 50
    for( let i=0;i<no_of_bar;i++){
        nums[i] = getRndInteger(max);
    }

    for(let i=0;i<no_of_bar;i++){
        var div_bars = document.createElement('div');
        div_bars.innerText = nums[i];
        document.getElementById("bars").appendChild(div_bars);
        div_bars.classList.add("bars_style");
        if(i&1==1){
            div_bars.style.backgroundColor = 'blue';
        }
        else{
            div_bars.style.backgroundColor = 'blue';
        }
        div_bars.style.height = (nums[i]*10+10).toString()+"px";
        div_bars.style.width = "20px";
        div_bars.style.margin = "2px";
    }

    document.getElementById("insertion_sort").removeAttribute('disabled');
    document.getElementById("merge_sort").removeAttribute('disabled');
    document.getElementById("quick_sort").removeAttribute('disabled');
    document.getElementById("selection_sort").removeAttribute('disabled');
    document.getElementById("bubble_sort").removeAttribute('disabled');
    document.getElementById("arr_sz").removeAttribute('disabled');

    stoping_var= false;
    
}





