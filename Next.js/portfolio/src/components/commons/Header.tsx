import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <Link href="/">
                <img src="/favicon.ico" alt="ícone do Gengar" />

            </Link>
            <nav>
                <Link href="/">
                    Sobre Mim
                </Link>
                {/* Add the following Link component */}
                <Link href="/portfolio">
                    Portfólio
                </Link>
                <Link href="/contatos">
                    Entre em contato
                </Link>
            </nav>
        </header >
    )
}