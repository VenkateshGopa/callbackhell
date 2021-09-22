const timer = () => {
    var h = document.getElementById("h1");
    setTimeout(() =>{
        h.innerHTML = "10";
        setTimeout(() =>{
            h.innerHTML = "9";
            setTimeout(() =>{
                h.innerHTML = "8";
                setTimeout(() =>{
                    h.innerHTML = "7";
                    setTimeout(() =>{
                        h.innerHTML = "6";
                        setTimeout(() =>{
                            h.innerHTML = "5";
                            setTimeout(() =>{
                                h.innerHTML = "4";
                                setTimeout(() =>{
                                    h.innerHTML = "3";
                                    setTimeout(() =>{
                                        h.innerHTML = "2";
                                        setTimeout(() =>{
                                            h.innerHTML = "1";
                                            setTimeout(() => {
                                                h.innerHTML = "Happy Independence Day";
                                            }, 1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
};
timer();
