import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import * as data from '../../../utils/links.json';
import logo from '../../../assets/images/logo.jpg';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const Navbar: React.FC<{}> = () => {
    const [currentDateTime, setCurrentDateTime] = useState<string>('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const formattedDateTime = now.toLocaleString();
            setCurrentDateTime(formattedDateTime);
        };

        const intervalId = setInterval(updateDateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img className={styles['logo-image']} src={logo} alt='logo'/>
            </div>
            <div>{currentDateTime}</div>
            <Links links={links} />
        </nav>
    )
}

export default Navbar;