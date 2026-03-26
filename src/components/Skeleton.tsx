function AnimationCardSkeleton() {
  return (
    <div className="animation-card">
      <div className="animation-card-content skeleton" />
      <div className="animation-card-label">
        <span className="skeleton skeleton-line" style={{ width: '60%' }} />
      </div>
    </div>
  )
}

function PageSkeleton() {
  return (
    <div className="page-skeleton">
      <div className="skeleton skeleton-line" style={{ width: '30%' }} />
      <div className="skeleton skeleton-line" style={{ width: '100%' }} />
      <div className="skeleton skeleton-line" style={{ width: '85%' }} />
      <div className="skeleton skeleton-line" style={{ width: '70%' }} />
    </div>
  )
}

export { AnimationCardSkeleton, PageSkeleton }
