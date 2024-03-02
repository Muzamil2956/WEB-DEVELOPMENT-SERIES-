function outerFunc() {
    let x =5;
    let y = 6;
    function InnerFunc(){
    console.log(x);
    }
    outerFunc();
}