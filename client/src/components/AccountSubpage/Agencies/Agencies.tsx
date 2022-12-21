import { FC, Fragment } from 'react'

import AgencyItem from '@/components/AccountSubpage/Agencies/AgencyItem/AgencyItem'

import styles from '../AccountSubpage.module.scss'

const Agencies: FC = () => {
  return (
    <Fragment>
      <h1 className={`heading-bold-h3 ${styles.title}`}>My Agencies</h1>
      <nav className={styles.nav}>
        <h6 className="heading-bold-h6">
          You own <span>10</span> agencies
        </h6>
        <button className="button">Create New</button>
      </nav>
      <div>
        <AgencyItem />
        <AgencyItem />
        <AgencyItem />
        <AgencyItem />
        <AgencyItem />
      </div>
    </Fragment>
  )
}

export default Agencies
