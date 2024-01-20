const objectAccess = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
function updateRecords(records, id, prop, value) {
    if(value === ""){
        delete records[id][prop];
    }
    else if(prop !== "tracks" && value !== ""){
        records[id][prop] = value;
    }
    else if(prop === "tracks" && value !== "") {
        if (!records[id].hasOwnProperty("tracks")){
            records[id][prop] = [];
    }
        records[id][prop].push(value);
    }

    return records;
}

console.log(updateRecords(objectAccess, 5439, 'artist', 'ABBA'));

const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];


function lookUpProfile(name, prop) {
    const size = contacts.length;
    for (let i = 0; i < size; i++) {
       if(contacts[i].firstName === name){
           if(contacts[i].hasOwnProperty(prop)){
               return contacts[i][prop];
           }else {
               return "No such property";
           }
       }
    }
    return "No such contact";
}

console.log("\n" + lookUpProfile("Harry", "likes"));