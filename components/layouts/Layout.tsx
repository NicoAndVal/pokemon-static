import Head from "next/head"
import { FC } from "react"

 

export const Layout: FC = ({ children }) => {
    return (
    <>
        <Head>
            <title>Pokemon App</title>
            <meta name="author" content="Nicolás Andrade"/>
            <meta name="description" content="Información sobre el pokemon xxxx"/>
            <meta name="keywords" content="xxx, pokemon, pokedex"/>
        </Head>

        <main>
            {children}
        </main>
    </>
  )
}
