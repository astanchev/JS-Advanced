function solve(input) {
    let result = input
                    .shift()
                    .match(/\w+/gim)
                    .reduce((obj, prop) => {
                        addPropIfMissing(obj, prop);
                        obj[prop]++;
                        return obj;
                    }, {});

    console.log(JSON.stringify(result));

    function addPropIfMissing(obj, prop){
        if (!obj.hasOwnProperty(prop)) {
            obj[prop] = 0;
        }

        return obj;
    }
}

solve(['Far too slow, you\'re far too slow.']);