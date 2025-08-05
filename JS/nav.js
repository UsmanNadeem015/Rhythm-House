const navBar = 
`<nav class="navbar">
  <div class="navbar-logo">
    <img src="./images/nav-logo.jpeg" alt="" />
  </div>

  <div class="navbar-left">
    <div class="navbar-center" id="nav-links">
      <ul class="navbar-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="records.html">Records</a></li>
        <li><a href="movies.html">Movies</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </div>
  </div>

  <div class="navbar-right">
    <div class="search-box">
      <i class="fas fa-search"></i>
      <input type="search" placeholder="Search songs, artists, movies..." id="searchBar"/>
    </div>
    <i class="ri-album-fill icon-btn" id="menu-toggle"></i>
  </div>
</nav>`;
export default navBar;
