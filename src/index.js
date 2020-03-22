module.exports = function check(str, bracketsConfig) {

    bracketsConfig = bracketsConfig.reduce((newBracketsConfig, item) => { 
    newBracketsConfig.push(item.join('')) ;
    return newBracketsConfig;
    }, []);

    let checkedStr;
    while (checkedStr != str) {
        checkedStr = str;
        bracketsConfig.forEach(bracket => {
            str = str.replace(bracket,'');
        });
    }

    return !str;
}

