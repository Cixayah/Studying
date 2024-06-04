import Link from 'next/link'
export const AboutMe = () => {
    return (
        <main>
            <div>
                <h1>Eu sou o &nbsp;</h1>
                <span>Cix</span>
                <div>
                    <h2>
                        Sou um dev junior full stack!
                    </h2>
                    <Link href="/contatos">Converse comigo!</Link>
                </div>
                <ul>
                    <li style={{ backgroundColor: '#2F74C0', color: '#fff' }}>typescript</li>
                </ul>
            </div>
        </main>
    )
}