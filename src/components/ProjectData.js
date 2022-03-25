export const ProjectData = [
    
    {
        title: 'Movie Database',
        image: require('../assets/images/moviedb.png'),
        summary: 'SNOS Movies is a single page web application built in React. SNOS Movies utilizes REST API to allow users to find up-to-date information about popular, top rated, now playing, and upcoming movies. Users are also able to add movies to their favourites.',
        tools: 'React, SCSS, REST API, GitHub',
        links:[
        <a href="https://github.com/Stelio123/movie-database" rel='noreffer noopener'  target='_blank' alt='github'>GitHub</a>, 
        <a href='https://steliocodes.com/snos-movies/' rel='noreffer noopener'target='_blank' alt='movie databe wesite' >Live Site</a>],
        mockTitle: 'Mock Up',
        projectImage:[
        <img src={require('../assets/images/mdb.png')} alt='movie database homepage.'></img>, 
        <img src={require('../assets/images/single-mdb.png')} alt='single movies page.'></img> ],
        description: 'High fidelity mock-up created in Adobe XD to serve as a model for the user interface design. The website design is simple and focused on the movies with clean and minimal rows. Dynamic button/svg for adding movies to favourites through local storage. Favourited movies are displayed on a dedicated page.Fetching movie data with an API key and useEffect. Movies are sorted by popular, top-rated, now playing, and upcoming.Through media queries and a mobile-first approach, the website is responsive for desktop, tablet, and mobile devices.',
        slug: 'moviedatabase'
    },
    {
        title: 'JavaScript Game',
        image:require('../assets/images/minesweeper.png'),
        summary: 'Developed and designed a mine sweeper clone using vanilla JavaScript and jQuery. All styling was done using CSS. With this project being my first time implementing my skills in JavaScript to create a web application, I am very proud of the outcome. ',
        tools: 'JavaScript, jQuery, HTML, CSS',
        links: <a href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='github'>Live Site</a>,
        projectImage: [<img src={require('../assets/images/minesweeper-home.png')} alt= 'minesweeper home'></img>, 
                       <img src={require('../assets/images/main-screen.png')} alt='main screen'></img>],
        description: 'The game has four difficulty levels; easy, medium, hard and “Is This is a Joke”. The harder the difficulty the more mines are placed on the board and the player is given less flags to drop. The game also has a set timer, a quit button, a restart, and a help button. To play the game their player must enter their name and choose their difficulty.',
        slug: 'minesweeper'
    },
    {
        title: 'Calculator',
        image: require('../assets/images/calculator.png'),
        summary:'Built a basic calculator using React and CSS. I consider this a passion project because I wanted to practice my newly learned React/ JavaScript skills. ',
        tools: 'React, CSS',
        links: <a href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='live site'>Live Site</a>,
        projectImage: <img src={require('../assets/images/calc-screen-shot.png')} alt= 'calculator'></img>,
        slug: 'calculator'

    },
    {
        title: 'Food Explorer',
        image: require('../assets/images/food-ex.png'),
        summary: 'Developed a fully responsive webpage in a team of two.', 
        tools: 'HTML, SCSS, GitHub',
        links: [<a href="https://github.com/Stelio123"  rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://steliocodes.com/food-explorer/" rel='noreffer noopener' target='_blank' alt='github'>Live Site</a>],
        projectImage:<img src={require('../assets/images/food-full-shot.png')} alt= 'food explorer full screen'></img>,
        // <img src={require('../assets/images/food-mobile-shot.png')} alt='food explorer mobile screen'></img>],
        description:'Developed a fully responsive replica of a restaurant home webpage. This project was built by me and classmate. We built this webpage mobile first using HTML, SCSS while working cooperatively through GitHub.',
        slug: 'foodexplorer'

    },
    {
        title: 'Capstone Project',
        image: require('../assets/images/woo.png'),
        summary: 'Developed an E-commerce website for a non-existing company called "Sacred Tree Massage Therapy". Working in a team of four, we developed this site using WordPress and WooCommerce. All backend work was done in PHP and all styling was done using SCSS. We used Asana to help manage our work load and keep us on pace to finish this project on time. More content and info Coming Soon!',
        tools: 'WordPress, WooCommerce, PHP, SCSS, GitHub',
        links: [<a href="https://github.com/Stelio123" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='github'>Live Site</a>],
        slug: 'massagetherapy'
    },
    {
        title: 'Portfolio',
        image: require('../assets/images/port1.png'),
        summary: 'Built a portfolio website to showcase my most recent works. I developed this website using React, SCSS, HTML, Adobe XD, illustrator and Photoshop. Created all animations using Fader-Motion',
        tools: 'React, HMTL, SCSS, GitHub',
        links: <a href="https://github.com/Stelio123/portfolio-project" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>,
        description: 'A simple portfolio site to showcase my personality and work.',
        slug: 'portfolio'
    }
]