import { FC } from 'react'
import { Outlet, useOutlet } from 'react-router-dom'

import styles from './MyAccountPage.module.scss'
import Sidebar from '@/components/Layout/Sidebar/Sidebar'
import Account from '@/components/AccountSubpage/Account/Account'

const MyAccountPage: FC = () => {
  const outlet = useOutlet()

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <Sidebar />
          <main className={styles.main}>
            <section className={styles['section-wrapper']}>
              {!outlet ? <Account /> : <Outlet />}
            </section>
          </main>
        </div>
      </div>
    </section>
  )
}

export default MyAccountPage
