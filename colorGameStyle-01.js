var numSquare = 9;
var colors = generateRandomColors(9);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#h1Display");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var resetButton = document.querySelector("#buttonreset");
var easyBtn =document.querySelector("#easyBtn");
var hardBtn =document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numSquare = 3;
   colors = generateRandomColors(numSquare);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   message.textContent = "";

   for (var i = 0; i < squares.length; i++)
   {
       if (colors[i])
       {
         squares[i].style.backgroundColor = colors[i];
       }
       else
       {
           squares[i].style.display = "none";
       }
   }
})

hardBtn.addEventListener("click", function(){
   hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   numSquare = 9;
   colors = generateRandomColors(numSquare);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   message.textContent = "";
   for (var i = 0; i < squares.length; i++)
   {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
   }
});

colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", function()
{
  colors =generateRandomColors(numSquare);
  pickedColor = pickColor ();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#1ca9c9";
  for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor=colors[i];
      message.textContent = "";
      this.textContent ="New Colors";
  }
})

for(var i = 0; i < squares.length; i++)
{   // add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    // add click event listener
    squares[i].addEventListener("click", function()
    {
        // grab clicked squares color
        var clickedColor = this.style.backgroundColor;
         // for comparing(not important)
          // console.log(clickedColor, pickedColor);
        // compare clicked color
        if(clickedColor === pickedColor)
        {
            // alert("correct");
            message.textContent ="correct";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="New Colors";

        }
        else
        {
            message.textContent = "try again";
            this.style.backgroundColor = "#2a2a2a";
        }
    });
}
function changeColors(color){
    for (var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num)
{
    var arr =[]

    for (var i =  0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}
function randomColor()
{
  var r =  Math.floor(Math.random() * 256);
  var g =  Math.floor(Math.random() * 256);
  var b =  Math.floor(Math.random() * 256);

  return "rgb(" + r +", " + g +", " + b +")";
}
