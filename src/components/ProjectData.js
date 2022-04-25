export const ProjectData = [
    
    {
        title: 'Movie Database',
        image: require('../assets/images/moviedb.png'),
        summary: 'SNOS Movies is a single page web application built in React. SNOS Movies utilizes REST API to allow users to find up-to-date information about popular, top rated, now playing, and upcoming movies. Users are also able to add movies to their favourites.',
        toolsUsed: 'Tools Used:',
        tools: 'React, SCSS, REST API, GitHub',
        links:[
        <a href="https://github.com/Stelio123/movie-database" rel='noreffer noopener'  target='_blank' alt='github'>GitHub</a>, 
        <a href='https://steliocodes.com/snos-movies/' rel='noreffer noopener'target='_blank' alt='movie databe website' >Live Site</a>],
        projectImage:[
        <img src={require('../assets/images/mdb.png')} alt='movie database homepage.'></img>, 
        <img src={require('../assets/images/single-mdb.png')} alt='single movies page.'></img> ],
        description: ' I created a high fidelity mock-up using Adobe XD to serve as a model for the user interface design. The website design is simple and focused on the movies with clean and minimal rows. Dynamic button/svg for adding movies to favourites through local storage. Favourited movies are displayed on a dedicated page. Fetching movie data with an API key and useEffect. Movies are sorted by popular, top-rated, now playing, and upcoming. Through media queries and a mobile-first approach, the website is responsive for desktop, tablet, and mobile devices.',
        slug: 'moviedatabase'
    },
    {
        title: 'JavaScript Game',
        image:require('../assets/images/minesweeper.png'),
        summary: 'Developed and designed a minesweeper clone using vanilla JavaScript and jQuery. All styling was done using CSS. With this project being my first time implementing JavaScript to create a web application, I am very proud of the outcome. ',
        toolsUsed: 'Tools Used:',
        tools: 'JavaScript, jQuery, HTML, CSS',
        links: <a  href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='minesweeper clone live site'>Live Site</a>,
        projectImage: [<img src={require('../assets/images/minesweeper-home.png')} alt= 'minesweeper home'></img>, 
                       <img src={require('../assets/images/main-screen.png')} alt='main screen'></img>],
        description: 'The game has four difficulty levels; easy, medium, hard and “Is This a Joke”. The harder the difficulty the more mines are placed on the board and the player is given less flags to drop. The game also has a set timer, a quit button, a restart, and a help button. To play, the player must enter their name and choose their difficulty.',
        slug: 'minesweeper'
    },
    {
        title: 'Calculator',
        image: require('../assets/images/calculator.png'),
        summary:'Built a basic calculator using React and CSS. I consider this a passion project because I wanted to practice my newly learned React/ JavaScript skills. ',
        toolsUsed: 'Tools Used:',
        tools: 'React, CSS',
        links: <a href="https://steliocodes.com/calculator-app/" rel='noreffer noopener' target='_blank' alt='live site'>Live Site</a>,
        projectImage: <img src={require('../assets/images/calc-screen-shot.png')} alt= 'calculator'></img>,
        slug: 'calculator'

    },
    {
        title: 'Food Explorer',
        image: require('../assets/images/food-ex.png'),
        summary: 'Developed a fully responsive webpage in a team of two.',
        toolsUsed: 'Tools Used:',
        tools: 'HTML, SCSS, GitHub',
        links: [<a  href="https://github.com/amyxueqi/food-explorer"  rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a  href="https://steliocodes.com/food-explorer/" rel='noreffer noopener' target='_blank' alt='live site'>Live Site</a>],
        projectImage:<img src={require('../assets/images/food-full-shot.png')} alt= 'food explorer full screen'></img>,
        description:'Developed a fully responsive replica of a restaurant home webpage. This project was built by me and a classmate. We built this webpage mobile first using HTML and SCSS all while working cooperatively through GitHub.',
        slug: 'foodexplorer'

    },
    {
        title: 'Sacred Tree Massage Therapy',
        image: require('../assets/images/woo.png'),
        summary: 'Sacred Tree Massage Therapy is an e-commerce website built with WordPress and WooCommerce, which allows online appointment bookings. Sacred Tree is a fictional massage therapy clinic.',
        toolsUsed: 'Tools Used:',
        tools: 'WordPress, Underscores, WooCommerce, WooCommerce Bookings & Availability Plugin, Google Map API, PHP, SCSS, HTML',
        links: [<a href="https://github.com/htpwebdesign/sacred-tree" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://sacredtree.bcitwebdeveloper.ca/" rel='noreffer noopener' target='_blank' alt='livesite'>Live Site</a>],
        projectImage:<img src={require('../assets/images/sacred-tree.png')} alt= 'sacred tree homepage'></img>,
        description: 'Our team shared responsibility for design, development, WooCommerce configuration and project management. We created a warm, welcoming site that provides potential clients with information about the clinic and therapists. We included online booking capabilities which coordinate with therapists’ schedules, and clinic hours. Our team performed a competitive analysis, and compiled a list of features that would create an informative and intuitive website. We created our information architecture, as well as wireframes for each page. Then, we created a list of our required php files and custom post types. This allowed us to efficiently set up and get started. Our team worked on separate pages to add all the functionality and placeholder text/images to the website. Once the site was functional, we began styling with scss partials. This allowed us to each focus on a particular section, while avoiding merge conflicts.',
        slug: 'massagetherapy'
    },
    {
        title: 'Portfolio',
        image: require('../assets/images/port1.png'),
        summary: 'Built a portfolio website to showcase my most recent works. I developed this website using React, SCSS, HTML, Adobe XD, illustrator and Photoshop. Created all animations using Fader-Motion',
        toolsUsed: 'Tools Used:',
        tools: 'React, HMTL, SCSS, GitHub',
        links: <a href="https://github.com/Stelio123/portfolio-project" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>,
        projectImage:<img src={require('../assets/images/port-wireframes.png')} alt= 'portfolio mobile wireframes'></img>,
        description: 'A simple portfolio site to showcase my personality and work. A screen shot of my wireframes shown above, I took a mobile first approach when creating/designing this website. I made some changes as i started coding my portfolio, but I was still able to stick with a continues brand.',
        slug: 'portfolio'
    }
]