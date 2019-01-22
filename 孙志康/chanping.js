class main {
    constructor(id ,i){
        this.Ids = document.getElementById(id)
        this.Iis = this.Ids.getElementsByTagName('li')[i]
        this.bg = this.Iis.getElementsByClassName('bg')[0];//display:none
        this.inputdate = this.Iis.getElementsByClassName('inputdate')[0];
        this.queren = this.Iis.querySelectorAll('div input')[1];
        this.times = this.Iis.getElementsByClassName('times')[0];
        this.spans = this.times.getElementsByTagName('span');
        this.big_c = this.Iis.getElementsByClassName('big-c')[0];//visibility: hidden;
    }
    countdown(shijian,span){
        console.log('1')
        
            let xianzai2 = new Date(shijian)
            let xianzai = new Date()
            let xian = xianzai2 - xianzai
            let xian2 = xian
            console.log(xian)
            let xiaoshi = Math.floor(xian / 3600000)
            xian %= 3600000
            let fenzhong = Math.floor(xian / 60000)
            xian %= 60000
            let miao = Math.floor(xian / 1000)
            console.log(span)
            span[0].innerHTML = Math.floor(xiaoshi%100/10)
            
            span[1].innerHTML = xiaoshi%10
            span[2].innerHTML = Math.floor(fenzhong%100/10)
            span[3].innerHTML = fenzhong%10
            span[4].innerHTML = Math.floor(miao%100/10)
            span[5].innerHTML = miao%10
           
            //  if(xian2 < 0){
            //     clearInterval(n)
            //     alert('滚犊子')
            // }
           
    }
    annv(){
        let sun = this
        let span = this.spans
        // let shijian = this.inputdate.value
        this.queren.onclick = function () {
            let shijian = sun.inputdate.value
            
            
            // clearInterval(n) 
            sun.countdown(shijian,span)
            let n = setInterval( sun.countdown,1000,shijian,span)

            // console.log(shijian)了
            
        }
    }
    guanbi(){
        this.bg.style.display = "inline-block";
        this.big_c.style.visibility = "visible";
        this.big_c.style.transform = "scale(1)";
    }
}


class jiage {
    constructor (id){
        this.footer = document.getElementById(id)
    }
}
let srr = ['n1','n2','n3','n4']
let n1,n2,n3,n4
for(i=0;i<srr.length;i++){
    srr[i] = new main('main',i)
    srr[i].annv()
}

