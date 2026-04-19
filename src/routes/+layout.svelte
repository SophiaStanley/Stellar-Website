<script>
    // Import components
</script>


<!-- Header -->
<header>
	<a href="/"><img src ="\StellarConnectionLogo.png" alt ="Stellar Connection Logo" width = 15% height = 15%></a>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/game">Game</a></li>
        </ul>
    </nav>
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2026 My Svelte App. All rights reserved.</p>
</footer>


<style>
    header {
        background-color: #4ab7ff;
        padding: 1rem;
        text-align: center;
    }
    
    nav ul {
		font-size: 3vh;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    
    nav ul li {
        margin: 0 15px;
    }
    
    nav ul li a {
        text-decoration: none;
        color: white;
    }

    nav ul li a:hover {
        color: rgb(194, 191, 191);
    }
    
    main {
        padding: 2rem;
        text-align: center;
    }
    
    footer {
        background-color: #4ab7ff;
        color: white;
        text-align: center;
        padding: 1rem;
        position: flex;
        bottom: 0;
        width: 100%;
    }
</style>
