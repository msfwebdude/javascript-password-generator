
function generatePasswords() {
    self.goBtn.enabled = false;
    self.passwordList.value = "";
    var n = self.numberOfPasswords.value;
    var c = parseInt(self.numberOfCharacters.value);
    var i = 0;
    var x = 0;
    var d = (new Date()).getTime();
    while (i < n) {
        var tempPassword = "";
        var evenOdd = 0;
        while (tempPassword.length < c) {
            if (evenOdd == 0) {
                evenOdd = 1;
                tempPassword += getWord();
            }
            else {
                evenOdd = 0;
                tempPassword += Math.random().toString().substr(2, 4);
            }
        }
        if (tempPassword.length == c) {
            self.passwordList.value += tempPassword + "\n";
            i++;
        }

        x++;
    }
    d = (new Date()).getTime() - d;
    var r = Math.round((n / x) * 1000) / 10;
    self.log.innerHTML = `Generated ${n} passwords in ${x} attempts (${r}% pass rate). Took ${d} ms.`;
    self.goBtn.enabled = true;
}

function getWord() {
    var idx = Math.floor((Math.random() * words.length))
    var wrd = words[idx]
    if (Math.random() > 0.5) {
        wrd = wrd.substr(0, 1).toUpperCase() + wrd.substr(1);
    }
    return wrd
}



words = randomizeArray(words);

self.passwordList.value = "Ready";

function randomizeArray(arr) {
    var arrInp = arr;
    var arrOut = [];
    var i;
    for (i = 0; i < 32; i++) {
        arrOut = [];
        arrInp.forEach(
            function (item, index) {
                if (Math.random() > 0.5) {
                    arrOut.push(item);
                }
                else {
                    arrOut.unshift(item);
                }
            }
        );
        arrInp = arrOut;
    }


    return arrOut;
}