const navBar = 
`<nav class="navbar">
    <div class="navbar-logo">
        <img src="./images/nav-logo.jpeg" alt="" />
    </div>

    <!-- Middle links -->
    <div class="navbar-center" id="nav-links">
        <ul class="navbar-links">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./records.html">Records</a></li>
            <li><a href="./movies.html">Movies</a></li>
            <li><a href="./bookmag.html">Books & Magzines</a></li>
        </ul>
    </div>

    <!-- Right section: Search + Menu icon -->
    <div class="navbar-right">
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="search" placeholder="Search songs, artists, movies..." id="searchBar"/>
        </div>
        <i class="ri-album-fill icon-btn" id="menu-toggle"></i>
    </div>

    <!-- Dropdown menu (desktop) / Mobile menu -->
    <div class="menu-content" id="menu-content"><i class="ri-album-fill"></i></div>
</nav>
`;
export default navBar;
