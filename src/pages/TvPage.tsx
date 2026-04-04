import { TelevisionPreview } from '../components/animations/TelevisionPreview'
import { PageMeta } from '../components/PageMeta'

function TvPage() {
  return (
    <div className="tv-page">
      <PageMeta
        title="Retro Television | Aaron Blum"
        description="A nostalgic retro television component with channel switching and static effects."
        path="/tv"
      />
      <div className="tv-container">
        <TelevisionPreview />
      </div>
    </div>
  )
}

export { TvPage }
