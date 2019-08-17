import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata{
            title
          }
        }
      }
    `)
    return (
        <div>
            <header className={headerStyles.header}>
                <h1>
                    <Link className={headerStyles.title} to="/">
                        {data.site.siteMetadata.title}
                    </Link></h1>

                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">glowna</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">o mnie</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">kontakt</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header;