var friendsArray = [
    { "name":"Swedish Chef",
        "photo":"https://vignette.wikia.nocookie.net/muppet/images/4/41/Swedish-chef.jpg/revision/latest?cb=20111104173207",
        "scores":[5,1,4,4,5,1,2,5,4,1]
    },
    { "name":"Rick Sanchez",
        "photo":"https://t2.genius.com/unsafe/823x0/https%3A%2F%2Fimages.genius.com%2F2d39515c9311de7bb2a4154adb1f68e6.400x400x1.jpg",
        "scores":[5,3,5,1,2,4,5,1,3,1]
    },
    { "name":"Homer Simpson",
        "photo":"https://images.immediate.co.uk/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=45&resize=710,472",
        "scores":[4,2,3,1,3,4,1,5,4,3]
    },
    { "name":"Bender",
        "photo":"https://vignette.wikia.nocookie.net/villains/images/8/8f/The_Bender.jpg/revision/latest/scale-to-width-down/310?cb=20180701200006",
        "scores":[5,3,1,1,1,5,5,1,1,3]
    },
    { "name":"Master Shake",
        "photo":"https://images-na.ssl-images-amazon.com/images/I/31FNPdAmDHL.jpg",
        "scores":[4,2,1,2,1,5,5,2,1,2]
    },
    { "name":"Stewie Griffin",
        "photo":"https://vignette.wikia.nocookie.net/familyguyfanon/images/0/02/Stewie_Griffin.png/revision/latest?cb=20161119043926",
        "scores":[]
    },
    { "name":"Zorak",
        "photo":"https://vignette.wikia.nocookie.net/villains/images/f/f2/Zorak.png/revision/latest?cb=20160905053131",
        "scores":[]
    },
    { "name":"Krieger",
        "photo":"https://vignette.wikia.nocookie.net/archer/images/b/bb/Algernop_Krieger.png/revision/latest?cb=20151013042053",
        "scores":[]
    },
    { "name":"Stimpy",
        "photo":"https://vignette.wikia.nocookie.net/p__/images/d/d9/Stimpy_by_kwilkinson-d64y3pg.png/revision/latest?cb=20180524211127&path-prefix=protagonist",
        "scores":[]
    },
    { "name":"Pet Rock",
        "photo":"http://q985online.com/files/2015/04/Pet-Rock-12.jpg?w=980&q=75",
        "scores":[3,3,3,3,3,3,3,3,3,3]
    },
];

module.exports = friendsArray;

var testInput = [3,3,3,3,3,3,3,3,3,3];

var findBestFriend = function() {
    var bestFriend;
    var lowestDiff = 50;
    for (i=0; i < friendsArray.length; i++) {
        var diff = 0;
        for (j=0; j < friendsArray[i].scores.length; j++) {
            diff += Math.abs((friendsArray[i].scores[j])-(testInput[i]));
        }
        if (diff < lowestDiff) {
            bestFriend = friendsArray[i];
            lowestDiff = diff;
        }
        console.log(diff); 
    }
    console.log("Your best friend is: " + bestFriend.name);
}

findBestFriend();