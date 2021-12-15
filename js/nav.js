var navbar = document.getElementById("nav-sidebar");

function nav() {

    navbar.innerHTML = `
    <ul
        class="
          navbar-nav
          bg-gradient-primary bg-sidebar
          sidebar sidebar-dark
          accordion
        "
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div class="sidebar-brand-icon logo-sidebar">
            <img src="img/logo.png" />
          </div>
          <div class="sidebar-brand-text mx-3">Fut API</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-home"></i>
            <span>Home</span></a
          >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Interface</div>

        <!-- Nav Item - Pages Collapse Menu -->
        
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-tshirt"></i>
            <span>Times</span>
          </a>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Times:</h6>
              <a class="collapse-item" href="times.html">Lista de Times</a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <i class="fas fa-fw fa-user-shield"></i>
            <span>Jogadores</span>
          </a>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Jogadores:</h6>
              <a class="collapse-item" href="jogadores.html">Lista de Jogadores</a>
            </div>
          </div>
        </li>

        <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <i class="fas fa-fw fa-user-tie"></i>
              <span>Técnicos</span>
            </a>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Técnicos:</h6>
                <a class="collapse-item" href="tecnicos.html">Lista de Técnicos</a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              <i class="fas fa-fw fa-trophy"></i>
              <span>Ligas</span>
            </a>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Ligas:</h6>
                <a class="collapse-item" href="ligas.html">Lista de Ligas</a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            >
              <i class="fas fa-fw fa-archway"></i>
              <span>Estádios</span>
            </a>
            <div
              id="collapseSix"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Estádios:</h6>
                <a class="collapse-item" href="estadios.html">Lista de Estádios</a>
              </div>
            </div>
          </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Admin</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="fas fa-fw fa-user"></i>
            <span>Usuarios</span>
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <a class="collapse-item" href="usuarios.html">Usuarios</a>
            </div>
          </div>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

    `


}

nav()