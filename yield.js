function* createIterateNumber(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    return;
    yield 9;
}

const nextNumber = createIterateNumber();
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);