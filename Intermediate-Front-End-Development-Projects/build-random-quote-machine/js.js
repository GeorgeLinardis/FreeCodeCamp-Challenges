$("document").ready(function(){
    let quotes = {
        "Heraclitus":[["There is nothing permanent except change","Much learning does not teach understanding"],"https://www.dropbox.com/s/q50jltcl7msiczt/Heraclitus.png?raw=1"],
        "Alexander the Great":[["There is nothing impossible to him who will try","Remember upon the conduct of each, depends the fate of all"],"https://www.dropbox.com/s/4lv17zj54djpgas/Alexander.png?raw=1"],
        "Aristotle":[["The more you know, the more you know you don't know"],"https://www.dropbox.com/s/urj78fvdkgmufqt/Aristotle.png?raw=1"],
        "Socrates":[["Know thyself","I cannot teach anybody anything, I can only make them think","The unexamined life is not worth living"],"https://www.dropbox.com/s/7qrevma1qm3lr5i/Socrates.png?raw=1"]
    };
    let quoteWriters  = Object.keys(quotes),
        twitterButton = $("#twitter-button"),
        quoteButton   = $("#quote-button"),
        quoteText     = $("#quote-text"),
        quoteWriter   = $("#quote-writer"),
        imageWriter   = $("#imageWriter");

    function getRandom(){
        let numberOfWriters = quoteWriters.length;
        let randomWriterNo = Math.floor(Math.random()*(numberOfWriters));
        let writerChosen = quoteWriters[randomWriterNo];
        let writersQuotes = quotes[quoteWriters[randomWriterNo]][0];
        let quoteRandomNo = Math.floor(Math.random()*(writersQuotes.length));
        let quoteChosen = writersQuotes[quoteRandomNo];
        let imageChosen = quotes[quoteWriters[randomWriterNo]][1];
        console.log(imageChosen);

        return [quoteChosen,imageChosen,writerChosen];
    }


    twitterButton.on("click",function(){
        let target = "https://twitter.com/intent/tweet?text="+quoteText.text();
        target+=" - "+quoteWriter.text();
        $("#tweet").attr("href",target);

    });

    quoteButton.on("click",function(){
        let random = getRandom();
        quoteText.text(random[0]);
        quoteWriter.text(random[2]);
        imageWriter.attr("src",random[1]);
    });
});


