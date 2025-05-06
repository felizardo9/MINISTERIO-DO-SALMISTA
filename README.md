O Ministério dos Salmistas na Liturgia Blog

Overview

"O Ministério dos Salmistas na Liturgia" is a blog dedicated to strengthening Catholic spirituality by providing resources and formation for psalmists and Catholic communities. The site features a free eBook, "O Ministério dos Salmistas Católicos na Liturgia," created by Felizardo Bonifácio João, along with services like eBooks, training courses, and music ministry consulting. Built with React, Tailwind CSS, and modern JavaScript, the blog offers a responsive, user-friendly experience with Google AdSense integration for advertisements.

Features





Responsive Navigation: A mobile-friendly header with a hamburger menu for smaller screens.



Sections:





Hero: Introduces the mission with a call-to-action to download the eBook.



About: Details the initiative and its creator.



eBook: Showcases the eBook with a downloadable Google Drive link and highlights its content.



Services: Lists offerings like eBooks, formations, and consulting.



Contact: Provides email contact and donation options via E-Mola and PayPal.



Footer: Includes a biblical quote (Salmo 95:1) and copyright information.



Additional Pages:





Other Page: A secondary page for extended content.



Privacy Policy: Details data collection, usage, and user rights, including Google AdSense information.



Styling: Uses Tailwind CSS with custom colors (liturgy-blue, liturgy-gold) and Google Fonts (Noto Serif, Open Sans), supplemented by custom CSS for navigation.



Advertisements: Integrated with Google AdSense for monetization.

Prerequisites





Node.js: Version 14 or higher.



npm: Included with Node.js installation.

Installation





Clone the Repository:

git clone https://github.com/your-username/ministerio-salmistas-blog.git
cd ministerio-salmistas-blog



Install Dependencies:

npm install

This installs servor, the development server specified in package.json.



Start the Development Server:

npm start

This runs servor --reload, serving the site at http://localhost:8080 with live reloading.

Usage





Home Page (index.html): The main page contains all sections (Hero, About, eBook, Services, Contact) and is rendered at /.



Other Page (page2.html): A secondary page accessible at /page2.html, featuring a simple heading.



Privacy Policy (privacidade.html): Details privacy practices, accessible at /privacidade.html.



Navigation: Links in the header navigate to home, other page, privacy policy, and section anchors (#sobre, #ebook, #servicos, #contato). The eBook download link points to a Google Drive URL.



Development: Modify script.js for React components or index.html for additional scripts/styles. Tailwind CSS is configured inline with custom theme settings.



Advertisements: Google AdSense is included via a script in index.html and privacidade.html. Ensure the client ID (ca-pub-5143473568860418) is valid for your account.

File Structure

ministerio-salmistas-blog/
├── index.html          # Main HTML file with React root, Tailwind CSS, and AdSense
├── page2.html          # Secondary page with basic content
├── privacidade.html    # Privacy policy page
├── script.js           # React components (Header, Hero, About, etc.)
├── styles.css          # Additional CSS for navigation styling
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Dependency lock file
└── README.md           # Project documentation

Dependencies





servor (^4.0.2): Lightweight development server with live reloading.



React (18.2.0): Loaded via CDN for rendering components.



ReactDOM (18 casing="mixed">.2.0): Loaded via CDN for DOM manipulation.



Tailwind CSS: Loaded via CDN with custom configuration.



Babel: Loaded via CDN for JSX transformation.



Google Fonts: Noto Serif and Open Sans for typography.



Google AdSense: Integrated for advertisements.

Contributing





Fork the repository.



Create a feature branch (git checkout -b feature/your-feature).



Commit changes (git commit -m "Add your feature").



Push to the branch (git push origin feature/your-feature).



Open a pull request.

Please ensure code follows the existing structure and includes appropriate tests.

License

© 2025 Feliz Soluções. All rights reserved.

Contact

For questions or collaboration, contact felizardobonifacio9@gmail.com.

Support the mission via:





E-Mola: 870807676 (Felizardo Bonifácio João)



PayPal: felizardobonifacio9@gmail.com
