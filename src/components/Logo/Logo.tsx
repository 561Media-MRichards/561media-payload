import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <img
      alt="561 Media"
      width={150}
      height={45}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[150px] w-full h-auto', className)}
      src="/logo.png"
    />
  )
}
