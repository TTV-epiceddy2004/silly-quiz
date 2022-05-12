
function hash(str) {
    /* A hashing funtion is a one-way function that gives an apparently random hash from a string input,
     * but you can't work out the string input from the hash. That's why it's one-way.
     * Sometimes 2 different inputs might give you the same hash. This is called a collision and is
     * undesirable.
     */ 
    // Thanks to https://gist.github.com/jlevy/c246006675becc446360a798e2b2d781
    // This is a simple, *insecure* hash that's short, fast, and has no dependencies.
    // For algorithmic use, where security isn't needed, it's way simpler than sha1 (and all its deps)
    // or similar, and with a short, clean (base 36 alphanumeric) result.
    // Loosely based on the Java version; see
    // https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript

    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32bit integer
    }
    return new Uint32Array([hash])[0].toString(36);
}

var questionSet = [
  ["What is the capital of Wales?","10ow88p"],
["What number are you thinking of between 0 and 100","19g"],
["What is the capial of England?","11qgta0"],
["Whats the biggest bone in the body called","1lxtwr"],
["How many metres are in a mile?","wfla"],
["Who plays football on Edgar Street?","7jsw1e"],
["Who lives in 742 Evergreen Terrace?","1pkp3k9"],
["What year did England win the World Cup?","whyg"],
["Who created Minecraft?","18xaag"],
["What is the world's largest land mammal?","z7u41"],
];

function checkAnswer(answerNum){
    var response = "You were... ";
    if (questionSet[answerNum][1]==hash(document.getElementById("answer"+answerNum).value)){
      response += "CORRECT YOU LEGEND!";
    }
    else{
      response += "WRONG YOU FOOL!";
    }
    document.getElementById("feedback"+answerNum).innerText = response;

}