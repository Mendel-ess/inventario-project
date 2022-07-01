import Container from '../components/Container'
const auth = () => {
    
    return (
        <Container>
            <h2>Usuario:</h2>
            <form>
                <input type="text" />
            </form>
            <h2>Contraseña:</h2>
            <form>
                <input type="password" />
            </form>
        </Container>
    );

}

export default auth