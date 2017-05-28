"use strict";


/**
 *
 * Converts the given number into a roman numeral.
 *
 * @param num
 * @return {string}
 */




function convertToRoman(num) {

    let latin = {
        "1":"I",
        "2":"II",
        "3":"III",
        "4":"IV",
        "5":"V",
        "6":"VI",
        "7":"VII",
        "8":"VIII",
        "9":"IX",
        "10":"X",
        "20":"XX",
        "30":"XXX",
        "40":"XL",
        "50":"L",
        "60":"LX",
        "70":"LXX",
        "80":"LXXX",
        "90":"XC",
        "100":"C",
        "200":"CC",
        "300":"CCC",
        "400":"CD",
        "500":"D",
        "600":"DC",
        "700":"DCC",
        "800":"DCCC",
        "900":"CM",
        "1000":"M"
    };
    let result = "";
    let arr = Object.keys(latin);

    for(let i=arr.length;i>=0;i--){
        if (num%arr[i]>=0){
            let times = (num - num%arr[i])/arr[i];
            if(times>0){
                let convert = latin[arr[i]].repeat(times);
                result+=convert;
            }
            num = num-(times*arr[i]);
        }

    }
    return result;
}

convertToRoman(121);