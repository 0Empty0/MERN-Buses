import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/Logo-white.svg'

import { privateRoutes, publicRoutes } from '@/components/Routers/routes'

import { useAppSelector } from '@/hooks/use-redux'

import { checkIsAuth } from '@/store/features/user/userSlice'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  const isAuth = useAppSelector(checkIsAuth)

  return (
    <footer className="footer">
      <div className="container">
        <div className={styles.footer}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <ul>
            {publicRoutes
              .filter((route) => route.title)
              .map(({ path, title }, index) => (
                <li className={styles.item} key={index}>
                  <Link
                    to={path}
                    className={`${styles.link} paragraph-medium-body`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            {isAuth &&
              privateRoutes
                .filter((route) => route.title)
                .map(({ path, title }, index) => (
                  <li className={styles.item} key={index}>
                    <Link
                      to={path}
                      className={`${styles.link} paragraph-medium-body`}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
