var names = ['John', 'Jane', 'Bob', , 'Mike'];

// 1.
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 2.
names.push('Nino');

// 3.
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);

    if (names[i] === 'Jane') {
        break;
    }
}

// 4.
names = names.filter(function (item) {
    return item !== undefined;
});

console.log(names);

// 5. - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
console.log(Array.of(2, 4, 6, 8, 10));