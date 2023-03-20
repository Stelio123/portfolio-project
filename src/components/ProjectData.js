export const ProjectData = [
    
    {
        title: 'Movie Database',
        image: require('../assets/images/snos-movies-2.png'),
        summary: 'SNOS Movies is a single page web application built in React. SNOS Movies utilizes Rest API to allow users to find up-to-date information about popular, top rated, now playing, and upcoming movies. Users are also able to add movies to their favourites.',
        toolsUsed: 'Tools Used:',
        tools: 'React, SCSS, REST API and GitHub.',
        links:[
        <a href="https://github.com/Stelio123/movie-database" rel='noreffer noopener'  target='_blank' alt='github'>GitHub</a>, 
        <a href='https://steliocodes.com/snos-movies/' rel='noreffer noopener'target='_blank' alt='movie databe website' >Live Site</a>],
        projectImage:[<img src={require('../assets/images/movie-fav.png')} alt='single movies page.'></img> ],
        description: ' I created a high fidelity mock-up using Adobe XD to serve as a model for the user interface design. the website design is simple and focused on the movies with clean and minimal rows. Dynamic button/svg for adding movies to favourites through local storage. Favourited movies are displayed on a dedicated page. Fetching movie data with an api key and useEffect. Movies are sorted by popular, top-rated, now playing, and upcoming. Through media queries and a mobile-first approach, the website is responsive for desktop, tablet, and mobile devices.',
        slug: 'moviedatabase'
    },
    {
        title: 'Minesweeper Clone',
        image:require('../assets/images/minesweeper-2.png'),
        summary: 'Developed and designed a minesweeper clone using vanilla JavaScript and jQuery. All styling was done using CSS. With this project being my first time implementing JavaScript to create a web application, I am very proud of the outcome. ',
        toolsUsed: 'Tools Used:',
        tools: 'JavaScript, jQuery, HTML and CSS.',
        links: <a  href="https://steliocodes.com/minesweeper/" rel='noreffer noopener' target='_blank' alt='minesweeper clone live site'>Live Site</a>,
        projectImage: [<img src={require('../assets/images/minesweeper-game.png')} alt= 'Minesweeper main screen'></img>],
        description: 'The game has four difficulty levels; easy, medium, hard and “Is This a Joke”. The harder the difficulty the more mines are placed on the board and the player is given less flags to drop. The game also has a set timer, a quit button, a restart, and a help button. To play, the player must enter their name and choose their difficulty.',
        slug: 'minesweeper'
    },
    {
        title: 'Sacred Tree Massage Therapy',
        image: require('../assets/images/sacred-tree-2.png'),
        summary: 'Sacred Tree Massage Therapy is an e-commerce website built with WordPress and WooCommerce, which allows online appointment bookings. Sacred Tree is a fictional massage therapy clinic.',
        toolsUsed: 'Tools Used:',
        tools: 'WordPress, Underscores, WooCommerce, WooCommerce Bookings & Availability Plugin, Google Map API, PHP, SCSS and HTML.',
        links: [<a href="https://github.com/htpwebdesign/sacred-tree" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>, 
                <a href="https://sacredtree.bcitwebdeveloper.ca/" rel='noreffer noopener' target='_blank' alt='livesite'>Live Site</a>],
        projectImage:<img src={require('../assets/images/sacred-tree-about.png')} alt= 'sacred tree homepage'></img>,
        description: 'Our team shared responsibility for design, development, WooCommerce configuration and project management. We created a warm, welcoming site that provides potential clients with information about the clinic and therapists. We included online booking capabilities which coordinate with therapists’ schedules, and clinic hours. Our team performed a competitive analysis, and compiled a list of features that would create an informative and intuitive website. We created our information architecture, as well as wireframes for each page. Then, we created a list of our required php files and custom post types. This allowed us to efficiently set up and get started. Our team worked on separate pages to add all the functionality and placeholder text/images to the website. Once the site was functional, we began styling with scss partials. This allowed us to each focus on a particular section, while avoiding merge conflicts.',
        slug: 'massagetherapy'
    },
    {
        title: 'Portfolio',
        image: require('../assets/images/port-3.png'),
        summary: 'Built a portfolio website to showcase my most recent works. I developed this website using React, SCSS, HTML, Adobe XD, illustrator and Photoshop. Created all animations using Framer-Motion',
        toolsUsed: 'Tools Used:',
        tools: 'React, HMTL, SCSS and GitHub.',
        links: <a href="https://github.com/Stelio123/portfolio-project" rel='noreffer noopener' target='_blank' alt='github'>GitHub</a>,
        projectImage:<img src={require('../assets/images/code.png')} alt= 'portfolio mobile wireframes'></img>,
        description: 'A simple portfolio site to showcase my personality and work. A screen shot of my wireframes shown above, I took a mobile first approach when creating/designing this website. I made some changes as i started coding my portfolio, but I was still able to stick with a continues brand.',
        slug: 'portfolio'
    },
    {
        title: 'Camp Metamorphosis British Columbia',
        image: require('../assets/images/campmet-1.png'),
        summary:'Camp Met BC is a non-profit dedicated to the education of youth in the Orthodox Faith. I worked with the client during the whole process. The client wanted a complete redesign of their website. I used adobeXD to create functional mock-up. The design I created solved the issues they were facing. It took about three weeks to develop and redesign. They have received 60% more traffic since the redesign.',
        toolsUsed: 'Tools Used:',
        tools: 'WIX CMS, CSS, HTML, AdobeXD.',
        links: <a href="https://www.campmetbc.ca/" rel='noreffer noopener' target='_blank' alt='livesite'>Live Site</a>,
        slug: 'campmet'
    },
    {
        title: 'Kaisereck Delicatessen',
        image: require('../assets/images/kdlogo-3.png'),
        summary: "Kaisereck Delicatessen is a popular food vendor in Vancouver's famous Granville Island Market. The client wanted an easy-to-use, easy-to-read, simple website. Located in a tourist hotspot, the need for easy navigation was crucial when designing and developing their website. It took me about two weeks to complete this job with the client.",
        toolsUsed: 'Tools Used:',
        tools: 'WIX CMS, CSS, HTML, AdobeXD.',
        links: <a href="https://www.kaisereckdelicatessen.com/" rel='noreffer noopener' target='_blank' alt='livesite'>Live Site</a>,
        slug: 'deli'
    },
    {
        title: 'Green Schools Green Future',
        image: require('../assets/images/gsgflogo-4.png'),
        summary:'Green Schools Green Future is a Canadian non-profit organization with a mission to build sustainable schools in different communities. While at Green Schools Green Future I was in charge of: styling updates and bug fixes as needed, maintaining back-end performance and components, ensuring the website adhered to SEO principles and created brand style standards for typography, graphics, and design.',
        toolsUsed: 'Tools Used:',
        tools: 'Wordpress, CSS, HTML, Elementor, MailChimp, Yoast SEO, WooCommerce, Adobe Photoshop, and Adobe Illustartor.',
        links: <a href="https://greenschoolsgreenfuture.org/" rel='noreffer noopener' target='_blank' alt='livesite'>Live Site</a>,
        slug: 'green'
    },
    {
        title: 'PrettyWeirdBoy',
        image: require('../assets/images/pwblogo-1.png'),
        summary: 'PrettyWeirBoy is a local artist in Vancouver who needed a website to show off his music. The client did not have too much knowledge when it came to CMS such as WordPress and refused to learn as they did not have much time to upkeep an online store. So I developed and designed a website using HTML, CSS and JavaScript and Adobe XD fo the functional mockup. Simple and clean is what the client wanted, an easy way for people to get access to the clients music. I created a custom music player using vanilla Javascript. This project took me one month to finish.',
        toolsUsed: 'Tools Used:',
        tools: 'HTML, CSS, JavaScript.',
        links:  [<a href="https://prettyweirdboy.com/" rel='noreffer noopener' target='_blank' alt='livesite'>Live Site</a>,
        <a href="https://prettyweirdboy.com/about.html" rel='noreffer noopener' target='_blank' alt='customjsmusicplayer'>Custom Music Player</a>],
        slug: 'pwb'
    }


]