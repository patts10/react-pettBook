import postsResults from '../mocks/posts.json'

import { CommentComponent } from './CommentComponent'

export const CommentSectionComponent = () => {
  const posts = postsResults.data.map((post) => ({
    id: post.id,
    img: post.image,
    description: post.text,
    likes: post.likes,
    owner: post.owner,
    tags: post.tags,
    publishDate: post.publishDate

  }))
  return (
    <div className='w-full bg-slate-700 py-3'>
      {posts.map((post) => (
        <CommentComponent
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}
