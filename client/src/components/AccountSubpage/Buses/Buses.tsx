import { FC, Fragment } from 'react'

import BusItem from '@/components/AccountSubpage/Buses/BusItem/BusItem'

import styles from '../AccountSubpage.module.scss'

const Buses: FC = () => {
  return (
    <Fragment>
      <h1 className={`heading-bold-h3 ${styles.title}`}>My Buses</h1>
      <nav className={styles.nav}>
        <h6 className="heading-bold-h6">
          You own <span>10</span> buses
        </h6>
        <button className="button">Create New</button>
      </nav>
      <div>
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
      </div>
    </Fragment>
  )
}

export default Buses
