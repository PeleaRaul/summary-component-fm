import data from "/data.json" assert { type: "json" };

var result1txt = data[0].category;
var result2txt = data[1].category;
var result3txt = data[2].category;
var result4txt = data[3].category;
var result1score = data[0].score;
var result2score = data[1].score;
var result3score = data[2].score;
var result4score = data[3].score;
var text1 = document.getElementById("result1text");
var text2 = document.getElementById("result2text");
var text3 = document.getElementById("result3text");
var text4 = document.getElementById("result4text");
var scoreText1 = document.getElementById("result1score");
var scoreText2 = document.getElementById("result2score");
var scoreText3 = document.getElementById("result3score");
var scoreText4 = document.getElementById("result4score");
var automatictext = document.getElementById("automatictext");
var bottomautotext = document.getElementById("bottomautotext");

function calcAverage(a, b, c, d) {
  a = result1score;
  b = result2score;
  c = result3score;
  d = result4score;
  return (a + b + c + d) / 4;
}

const score = calcAverage();
const removedDecimals = Math.trunc(score);

text1.innerHTML = `${result1txt}`;
text2.innerHTML = `${result2txt}`;
text3.innerHTML = `${result3txt}`;
text4.innerHTML = `${result4txt}`;

scoreText1.innerHTML = `${result1score}`;
scoreText2.innerHTML = `${result2score}`;
scoreText3.innerHTML = `${result3score}`;
scoreText4.innerHTML = `${result4score}`;

document.getElementById("score").innerHTML = `${removedDecimals}`;

if (removedDecimals === 94) {
  automatictext.innerHTML = `Epic`;
  bottomautotext.innerHTML = `You scored higher than 85% of the people who have taken these tests.`;
} else if (removedDecimals >= 74) {
  automatictext.innerHTML = `Great`;
  bottomautotext.innerHTML = `You scored higher than 65% of the people who have taken these tests.`;
} else if (removedDecimals > 64) {
  automatictext.innerHTML = `Good`;
  bottomautotext.innerHTML = `You scored higher than 55% of the people who have taken these tests.`;
} else if (removedDecimals > 44) {
  automatictext.innerHTML = `Somewhat Good`;
  bottomautotext.innerHTML = `You scored higher than 35% of the people who have taken these tests.`;
} else if (removedDecimals > 24) {
  automatictext.innerHTML = `Bad`;
  bottomautotext.innerHTML = `You scored higher than 15% of the people who have taken these tests.`;
} else if (removedDecimals >= 0) {
  automatictext.innerHTML = `Very Bad`;
  bottomautotext.innerHTML = `You scored higher than 5% of the people who have taken these tests.`;
} else {
  alert(`error 229: NaN | Contact website administrator!`);
}
