import React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import styles from './pagination-block.module.scss'

export const PaginationBlock = ({ pagesCount, page }) => {
  const router = useRouter()

  return (
    <div className={styles.pagination}>
      {new Array(pagesCount).fill(0).map((_, idx) => (
        <button
          className={clsx(styles.paginationButton, {
            [styles.active]: page === idx + 1,
          })}
          onClick={() =>
            router.push(`/?page=${idx + 1}`, undefined, {
              shallow: true,
            })
          }
          key={idx + 1}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  )
}
