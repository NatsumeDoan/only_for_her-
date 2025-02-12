var progress = document.querySelector(".progress");
var percent = document.querySelector(".percent");
var textBox = document.querySelector(".textBox");
var button = document.querySelector(".button");
var textBtn = document.querySelector(".textBtn");
var heartBox = document.querySelector(".heartBox");
var cursor = document.querySelector(".buttonCLick img"); 
var heartItem1 = document.querySelector(".heartItem.item1")
var heartItem2 = document.querySelector(".heartItem.item2")
var heartItem3 = document.querySelector(".heartItem.item3")
var count = 0;
var percentWidth = 0;
var heartLeft = -3.2;
var progressLoad = setInterval(progressInterva,100)

button.addEventListener("click", function(){
    document.querySelector(".loading").style.display = "none";
   
        let timeout = setInterval(()=>{
            var letters = document.createElement("div");
            letters.className = "letters"
            letters.innerHTML = '<img src="image/letters.png" alt="">';
            document.querySelector("body").prepend(letters)
            let left = Math.floor(Math.random() * 90);
            let rotate = Math.floor(Math.random() * 360);
            letters.style.left = left + "%";
            letters.style.top = "-20%";
            letters.style.transform = `rotate(${rotate}deg)`;
            setTimeout(()=>{
                letters.style.top = "110%";
            },500)
            setTimeout(()=>{
                letters.remove()
            },20000)
            document.querySelectorAll(".letters").forEach((item)=>{
                item.addEventListener("click", function(){
                    clearInterval(timeout)
                    document.querySelector(".wrapperLetterForm").style.display="block";
                    funcTimeoutLetter();
                    
                })
            })
        },500)
        document.querySelector(".fa-xmark1").addEventListener("click", function(){
            document.querySelector(".wrapperLetterForm").style.display="none";
            document.querySelector(".gallery-content").style.display="block";            
        })
        document.querySelector(".fa-xmark2").addEventListener("click", function(){
            document.querySelector(".gallery-content").style.display="none";
            document.querySelector(".grid-content").style.display="block";
            document.querySelector("body").style.overflow="auto";
            
        })
})
let textLetter = document.querySelector('.textLetter h2');
const textLetterH2 = "Gửi em!";
let textLetterContent = document.querySelector('.contentLetter');
const textLetterP = "Đây là lá thư anh gửi tới cho em. Ngày anh tính gửi cho em xem lá thư này là vào ngày valentine cũng tròn 99 ngày em bắt đầu cho anh có cơ hội để phát triển mối quan hệ này. Anh cảm ơn em vì đã cho anh cơ hội và anh hi vọng là con số không chỉ dừng lại ở 99 mà là đến hết con đường cùng nhau trải qua những vui buồn trong cuộc sống. Anh yêu em.";
let timoutTextLetterContent;
let timoutTextLetter;
function textCharLetter(){
    if (indexText < textLetterH2.length) {
        textLetter.textContent += textLetterH2[indexText];
        indexText++;
        setTimeout(indexText, 100);
    }
    else{
        clearInterval(timoutTextLetter);
        setTimeout(()=>{
            funcTimeoutLetterContent()
        },500)
    }
}
function funcTimeoutLetterContent(){
    indexTextContent = 0; // Reset indexTextContent
    textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetterContent);
    timoutTextLetterContent =  setInterval(()=>{
        textCharLetterContent();
        }, 50)
    
}
function textCharLetterContent(){
    if (indexTextContent < textLetterP.length) {
        textLetterContent.textContent += textLetterP[indexTextContent];
        indexTextContent++;
        setTimeout(indexTextContent, 100);
    }
    else{
        clearInterval(timoutTextLetterContent)

    }
}
function funcTimeoutLetter(){
    indexText = 0; // Reset indexText
    textLetter.textContent = ''; // Xóa nội dung hiện tại của textLetter
    clearInterval(timoutTextLetter);
    timoutTextLetter =  setInterval(()=>{
            textCharLetter();
        }, 200)
}


function progressInterva(){
    if(count == 100 && percentWidth == 100){
        clearInterval(progressLoad)
        percent.textContent = "Xong rùi đó:)";
        percent.style.letterSpacing = "1px";
        heartItem3.style.animation = "1s heartScale forwards"
        setTimeout(()=>{
            textBox.style.transform = "scale(0)"
        },400)
        setTimeout(()=>{
            textBox.style.opacity = "0"
        },600)
        setTimeout(()=>{
            button.style.transform= "scale(1)";
        },800);
        setTimeout(()=>{
            button.style.background = "rgb(244,118,121)"
            button.style.width = "130px";
            button.style.borderRadius = "20px"
        },1500)
        setTimeout(()=>{
            button.style.height = "40px";
        },2000)
        setTimeout(()=>{
            textBtn.textContent = "Click me!"
            textBtn.style.color = "#fff"
        },2500)
        setTimeout(()=>{
            cursor.style.opacity = "1";
        },3000)
    }
    else{
        if(count == 10){
            heartItem1.style.animation = "1s heartScale forwards"
        }
        if(count ==46){
            percent.style.color= "#fff"
        }
        if(count == 60){
            heartItem2.style.animation = "1s heartScale forwards"
        }
        count += 1;
        percentWidth += 1;
        heartLeft += 0.968;
        progress.style.width = percentWidth + '%'
        percent.innerText = count + '%'
        heartBox.style.left = heartLeft + '%'
    }
}