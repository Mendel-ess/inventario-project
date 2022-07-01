import Head from 'next/head'
import Nav from './Nav'

const Container = (props) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Inver - project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/litera/bootstrap.min.css"></link>
            </Head>
            <Nav />
                <div>
                    {props.children}
                </div>
        </div>
    )
}

export default Container