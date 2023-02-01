document.write(`
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4/css/metro-all.min.css">
    <link rel="stylesheet" href="style.css">
    <script>
      window.on_page_functions = [];
    </script>
    
    <!-- favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="./pictures/favicon.ico">

    <!-- Metro UI JS-->
    <script src="https://cdn.korzh.com/metroui/v4/js/metro.min.js"></script>
    <!-- Latex imports -->
    <script>
      MathJax = {
        tex: {
          inlineMath: [['$', '$']]
        },
      };
    </script>
    <script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
    </script>
<body class="m4-cloak">
    <header class="fg-dark">
      <div class="container pt-4 pb-2 pl-8 pr-8">
        <div class="row">
          <div class="cell-sm-6">
            <a class="logo no-decor" href="./">
              <h4 class="logo">Binary rEvolution</h4>
              <span class="logo-sub">From evolving binaries to the merging of compact objects</span>
            </a>
          </div>
          <div class="" align="left" width="20vw">
            <img src="./pictures/logos.png" alt="logos" style="position:relative; color:black; right:100px; top:0px;" align="left" width="500vw">
          </div>
          <div class="" align="right"><br>
            Maintained by <br>
            <span class="fg-dark">
              <a href="https://github.com/Binary-rEvolution">@Binary-rEvolution</a>
            </span>
          </div>
        </div>
      </div>
    </header>

    <div class="p-4 bg-scheme-secondary">
      <div class="container">
        <div class="row">
          <div class="cell-md-8">
            <h2 class="text-white">An interface project for the study of binary stars</h2>
          </div>
        </div>
      </div>
    </div>

    <nav class="main-menu bg-control text-upper" style="position:relative; z-index: 1">
      <div class="container">
        <div data-role="appbar" class="pos-relative" data-expand-point="lg">
          <button type="button" class="hamburger menu-down"><span class="line"></span><span class="line"></span><span class="line"></span></button>
          <ul class="app-bar-menu order-2 order-lg-1">
            <li><a href="index.html">Home</a></li>
            <li><a href="https://binary-revolution.github.io/HMXBwebcat5/index.html">HMXB CATALOGUE</a></li>
            <li><a href="#">MESA simulations</a></li>
            <li><a href="./Publications.html">Scientific Publications</a></li>
          </ul>

          <div class="app-bar-container ml-auto order-1 order-lg-2">
            <a href="about.html" class="app-bar-item">About<span class="va-middle ml-2"></span></a>
          </div>
        </div>
      </div>
    </nav>
`);
