import './styles.css';

const Navbar = () => {
    return(
        <nav class="admin-nav-container"> 
            <ul>
                <li>
                    <a href="produto">
                    <p>Produtos</p>
                    </a>
                </li>
                <li>
                <a href="produto">
                    <p>Categorias</p>
                    </a>
                </li>
                <li>
                <a href="produto">
                    <p>Usuários</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;