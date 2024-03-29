const AudioBookData = [
    {
        id: 'B1',
        name: 'Becoming',
        description: `Becoming is the memoir of former United States First Lady Michelle Obama. It chronicles her life, from her childhood in Chicago to her years in the White House.`,
        categories: 'Romance',
        imagelink_square: require('../assets/books/becoming/becoming_square.jpg'),
        imagelink_portrait: require('../assets/books/becoming/becoming.jpg'),
        ingredients: 'Africa',
        author: 'Michelle Obama',
        prices: [
            { size: 'MP3', price: '14.99', currency: '$' },
            { size: 'CD', price: '21.99', currency: '$' },
        ],
        average_rating: 4.8,
        ratings_count: '18,879',
        favourite: false,
        type: 'Audiobook',
        index: 0,
    },
    {
        id: 'B2',
        name: 'The Hobbit',
        description: `The Hobbit, or There and Back Again, is a fantasy novel by J.R.R. Tolkien. It follows the journey of Bilbo Baggins as he sets out to win a share of the treasure guarded by the dragon Smaug.`,
        categories: 'Action',
        imagelink_square: require('../assets/books/the_hobbit/the_hobbit_square.jpg'),
        imagelink_portrait: require('../assets/books/the_hobbit/the_hobbit.jpg'),
        ingredients: 'Africa',
        author: 'J.R.R. Tolkien',
        prices: [
            { size: 'MP3', price: '19.99', currency: '$' },
            { size: 'CD', price: '28.50', currency: '$' },
        ],
        average_rating: 4.6,
        ratings_count: '26,879',
        favourite: false,
        type: 'Audiobook',
        index: 1,
    },
    {
        id: 'B3',
        name: 'Matilda',
        description: `Matilda is a children's novel by British author Roald Dahl. It tells the story of a young girl named Matilda with extraordinary abilities, including telekinesis.`,
        categories: 'Action',
        imagelink_square: require('../assets/books/matilda/matilda_square.jpg'),
        imagelink_portrait: require('../assets/books/matilda/matilda.jpg'),
        ingredients: 'Africa',
        author: 'Roald Dahl',
        prices: [
            { size: 'MP3', price: '10.50', currency: '$' },
            { size: 'CD', price: '17.50', currency: '$' },
        ],
        average_rating: 4.7,
        ratings_count: '26,879',
        favourite: false,
        type: 'Audiobook',
        index: 2,
    },
    {
        id: 'B4',
        name: 'Winnie the Pooh',
        description: `Winnie-the-Pooh is a children's book by A.A. Milne. It features the adventures of a teddy bear named Winnie-the-Pooh and his friends in the Hundred Acre Wood.`,
        categories: 'Comedi',
        imagelink_square: require('../assets/books/winnie_the_pooh/winnie_the_pooh_square.jpg'),
        imagelink_portrait: require('../assets/books/winnie_the_pooh/winnie_the_pooh.jpg'),
        ingredients: 'Africa',
        author: 'Peter Dennis',
        prices: [
            { size: 'MP3', price: '9.99', currency: '$' },
            { size: 'CD', price: '16.99', currency: '$' },
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Audiobook',
        index: 3,
    },
];
export default AudioBookData;