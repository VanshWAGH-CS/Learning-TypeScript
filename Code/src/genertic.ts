function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({name: "Alice", age: 30})



function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b]
}

pair("masala", 200)


interface Box<T>{
    content: T
}

const numberBox: Box<number> = {content: 10}
