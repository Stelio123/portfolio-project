export const ProjectData = [
    
    {
        title: 'Movie Database',
        image: require('../assets/images/snos.png'),
        summary: 'SNOS Movies is a single page web built in React. SNOS Movies utilizes REST API to allow users to find up-to-date information about popular, top rated, now playing, and upcoming movies. Users are also able to add movies to their favourites.',
        tools: 'React, Sass, REST API',
        links: [<a href="https://github.com/" target='_blank' alt='github'>GitHub</a>, <a href='https://steliocodes.com/snos-movies/' target='_blank' alt='movie databe wesite' >Live Site</a>],
        mockTitle: 'Mock-Up',
        mockUpImage:  require('../assets/images/mdb.png'),
        mockUp: 'High fidelity mock-up created in Adobe XD to serve as a model for the user interface design.',
        designTitle: 'Design',
        design: 'The website design is simple and focused on the movies with clean rows and minimal.',
        colourTitle: 'Colour Palette',
        colourImage:  require('../assets/images/mdb-colour.png'),
        colour: '#0B0B0B, #FFFFFF, #BF451C',
        functionTitle: 'Functionality',
        spefFunTitle:'Add to favourites',
        funcSum:'Dynamic button/svg for adding movies to favourites through local storage. Favourited movies are displayed on a dedicated page.',
        rest: 'REST API',
        restSum: 'Fetching movie data with an API key and useEffect. Movies are sorted by popular, top-rated, now playing, and upcoming.',
        responsive: 'Responsive',
        respSum:'Through media queries and a mobile-first approach, the website is responsive for desktop, tablet, and mobile devices.',
        slug: 'moviedatabase'
    },
    {
        title: 'JavaScript Game',
        image:require('../assets/images/minesweep.png'),
        summary: 'Developed and designed a mine sweeper clone using vanilla JavaScript and jQuery. All styling was done using CSS. With this project being my first time implementing my skills in JavaScript to create a web application, I am very proud of the outcome. ',
        tools: 'JavaScript, jQuery, HTML, CSS',
        links: [<a href="https://github.com/" target='_blank' alt='github'>GitHub</a>, <a href="https://steliocodes.com/minesweeper/" target='_blank' alt='github'>Live Site</a>],
        mockUpImage:require('../assets/images/minesweeper-home.png') ,
        mockUpImage2:<img src= {require('../assets/images/main-screen.png')} alt='second mock up'/>,
        colourTitle:'Colour Palette',
        colourImage: require('../assets/images/ms-colours.png'),
        colour: '#136377, #fcec0c, #6a0dad',
        functionTitle:'Functionality',
        funcSum: 'figure out what to say',
        slug: 'minesweeper'
    },
    {
        title: 'Capstone',
        image: '',
        slug: 'massagetherapy'
    },
    {
        title: 'Portfolio',
        image: '',
        slug: 'portfolio'
    }
]