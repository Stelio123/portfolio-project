export const ProjectData = [
    
    {
        title: 'Movie Database',
        image: require('../assets/images/moviedb.png'),
        overview: 'Movie Database built using React.',
        summary: 'SNOS Movies is a single page web application built in React. SNOS Movies utilizes REST API to allow users to find up-to-date information about popular, top rated, now playing, and upcoming movies. Users are also able to add movies to their favourites.',
        tools: 'React, SCSS, REST API, GitHub',
        links:[
        <a href="https://github.com/" rel='noreffer noopener'  target='_blank' alt='github'>GitHub</a>, 
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
        overview: 'Minesweeper clone built using vanilla JavaScript.',
        summary: 'Developed and designed a mine sweeper clone using vanilla JavaScript and jQuery. All styling was done using CSS. With this project being my first time implementing my skills in JavaScript to create a web application, I am very proud of the outcome. ',
        tools: 'JavaScript, jQuery, HTML, CSS',
        links: [<a href="https://github.com/" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='github'>Live Site</a>],
        projectImage: [<img src={require('../assets/images/minesweeper-home.png')} alt= 'minesweeper home'></img>, 
                       <img src={require('../assets/images/main-screen.png')} alt='main screen'></img>],
        functionTitle:'Functionality',
        funcSum: 'figure out what to say',
        slug: 'minesweeper'
    },
    {
        title: 'Calculator',
        image: require('../assets/images/calculator.png'),
        overview: 'Built a basic calculator for fun using React and CSS.',
        summary:'',
        tools: 'React, CSS',
        links: <a href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='live site'>Live Site</a>,
        slug: 'calculator'

    },
    {
        title: 'Food Explorer',
        image: require('../assets/images/html.png'),
        overview: 'Built a fully responsive restaurant replica webpage.',
        summary: 'Developed a fully responsive replica restaurant website in a team of two using HTML, SASS and GitHub.', 
        tools: 'HTML, SCSS, GitHub',
        links: [<a href="https://github.com/"  rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='github'>Live Site</a>],
        slug: 'foodexplorer'

    },
    {
        title: 'Capstone Project',
        image: require('../assets/images/woo.png'),
        overview: 'Built a fully responsive Woocommerce website in WordPress.',
        summary: 'Developed an E-commerce website for a non-existing company called "Sacred Tree Massage Therapy". Working in a team of four, we developed this site using WordPress and WooCommerce. All backend work was done in PHP and all styling was done using SASS. We used Asana to help manage our work load and keep us on pace to finish this project on time. This project displays my ability to work in a team environment.',
        tools: 'WordPress, WooCommerce, PHP, SCSS, GitHub',
        links: [<a href="https://github.com/" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='github'>Live Site</a>],
        slug: 'massagetherapy'
    },
    {
        title: 'Portfolio',
        image: require('../assets/images/port1.png'),
        overview: 'Built a fully responsive portoflio to showcase selected works using React.',
        summary: 'Built a portfolio website to show my work through out the last 6 months. I developed this website using react, sass, html, adobe XD and adobe illustrator. The wireframes were created in Adobe XD and so was the functional prototype while all images were taken from a free to use site and edited in Adobe illustrator. Created animation using Fader-Motion',
        tools: 'React, HMTL, SCSS, GitHub',
        links: [<a href="https://github.com/" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://steliocodes.com/minesweeper/"rel='noreffer noopener' target='_blank' alt='github'>Live Site</a>],
        slug: 'portfolio'
    }
]