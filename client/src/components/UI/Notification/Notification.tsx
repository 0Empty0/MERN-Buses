import { FC, useEffect, useRef, useState } from 'react'

import styles from './Notification.module.scss'
import { Transition } from 'react-transition-group'
import Modal from '@/components/Layout/Modal/Modal'
import { useAppSelector } from '@/hooks/use-redux'

const Notification: FC<{ label?: string }> = ({ label }) => {
  const [notification, setNotification] = useState<{
    text: string
    createTime: number
    _accumulate?: number
  }>({ text: label ?? '', createTime: Date.now() + 1500 })

  const [isShow, setIsShow] = useState<boolean>(
    notification.text.trim().length !== 0
  )

  const lineRef = useRef<HTMLSpanElement | null>(null)

  const { status: userStatus } = useAppSelector((state) => state.user)
  // const { status: agencyStatus } = useAppSelector((state) => state.agency)
  // const { status: busStatus } = useAppSelector((state) => state.bus)
  // const { status: orderStatus } = useAppSelector((state) => state.order)
  // const { status: reviewStatus } = useAppSelector((state) => state.review)

  useEffect(() => {
    if (userStatus)
      setNotification({
        text: userStatus.toString(),
        createTime: Date.now() + 1500,
      })

    setIsShow(notification.text.trim().length !== 0)
  }, [userStatus, notification.text])

  useEffect(() => {
    const time: number =
      notification.createTime + (notification._accumulate ?? 1500) - Date.now()

    if (
      notification.text.trim().length === 0 ||
      notification.createTime === 0 ||
      notification.createTime +
        (notification._accumulate ?? 1500) -
        Date.now() <
        0
    )
      return

    let timeout: NodeJS.Timeout = setTimeout(() => {
      setIsShow(false)
    }, time)

    let interval: NodeJS.Timer = setInterval(() => {
      if (lineRef.current)
        lineRef.current.style.width =
          (
            ((((notification.createTime +
              (notification._accumulate ?? 1500) -
              Date.now()) /
              1000) %
              60) /
              3) *
            100
          ).toFixed(1) + '%'
    }, 10)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [notification])

  const onMouseEnterHandler = (): void => {
    setNotification((prevState) => ({
      ...prevState,
      createTime: 0,
      _accumulate:
        notification.createTime +
        (notification._accumulate ?? 1500) -
        Date.now(),
    }))
  }
  const onMouseLeaveHandler = (): void => {
    setNotification((prevState) => ({
      ...prevState,
      createTime: Date.now(),
    }))
  }

  return (
    <Modal>
      <Transition
        in={isShow}
        timeout={{ enter: 0, exit: 250 }}
        appear
        unmountOnExit
      >
        {(state) => (
          <div
            style={{
              opacity: state === 'entered' ? 1 : 0,
              top: state === 'entered' ? '5%' : 0,
            }}
            className={styles.notification}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            <p className="paragraph-regular-body">{notification.text}</p>
            <span className={styles.line} ref={lineRef}></span>
          </div>
        )}
      </Transition>
    </Modal>
  )
}

export default Notification
