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

new_arr();

document.getElementById("new_array").addEventListener("click", new_arr);

function new_arr(){

    deleteChild();

    const nums = [];
    let max = 50
    for( let i=0;i<25;i++){
        nums[i] = getRndInteger(max);
    }

    for(let i=0;i<25;i++){
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
}





