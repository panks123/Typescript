// We can inherit the properties of one interface into another

// It is done using 'extends' keyword

// e.g.

interface Book{
    name: string;
    price: number;
}

interface EBook extends Book {
    filesize: number;
    format: string;
}

// now the Ebook interface has properties : name, price, filesize, format
const ebook : EBook = {
    name: "Atomic habbits",
    price: 1200,
    filesize: 1024,
    format: 'mp3',
}


interface AudioBook extends  EBook{
    duration: number;
}

// now the AudioBook interface has properties : name, price, filesize, format, duration

const audiobook : AudioBook = {
    name: "Atomic habbits",
    price: 1200,
    filesize: 1024,
    format: 'mp3',
    duration: 300 
}
