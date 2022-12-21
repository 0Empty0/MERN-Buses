import { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.scss'
import { sidebarRoutes } from '@/components/Routers/routes'
import { useAppDispatch } from '@/hooks/use-redux'
import { logout } from '@/store/features/user/userSlice'

const Sidebar: FC<PropsWithChildren<unknown>> = (props) => {
  const dispatch = useAppDispatch()

  return (
    <aside className={styles.aside}>
      <ul>
        {sidebarRoutes.map(({ title, path }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `paragraph-medium-body ${styles.link} ${
                  isActive ? styles.active : ''
                }`
              }
              end
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch(logout())} className="button">
        Log Out
      </button>
    </aside>
  )
}

export default Sidebar
