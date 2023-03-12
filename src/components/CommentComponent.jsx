import { dateFormat } from '../utils/dateFormat'

export const CommentComponent = ({ post }) => {
  return (
    <>
      <div className='max-w-2xl mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-5 my-5'>
          <h5 className='flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            <img
              className='mr-3 rounded-t-lg'
              src={post.owner.picture}
              alt={post.description}
              width='50px'
              height='50px'
            />
            {post.owner.firstName} {post.owner.lastName}
            <p className='ml-2 font-normal text-gray-700 dark:text-gray-400'>
              {dateFormat(post.publishDate)}
            </p>
          </h5>
          <div className='flex my-2'>
            {post.tags.map((tag) => (
              <p
                key={tag}
                className='mr-2 font-normal text-gray-700 dark:text-gray-400'
              >
                #{tag}
              </p>
            ))}
          </div>
          <p className='mb-4 mr-2 font-normal text-gray-900 dark:text-white'>
            {post.description}
          </p>
          <img
            className='mb-3 rounded-t-lg'
            src={post.img}
            alt={post.description}
          />
          {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              width='24'
              fill='#f91880'
            >
              <path d='m12 20.325-1.1-1q-2.5-2.25-4.125-3.875T4.2 12.562q-.95-1.262-1.325-2.3Q2.5 9.225 2.5 8.15q0-2.125 1.438-3.563Q5.375 3.15 7.5 3.15q1.3 0 2.475.612Q11.15 4.375 12 5.525q.85-1.15 2.025-1.763Q15.2 3.15 16.5 3.15q2.125 0 3.562 1.437Q21.5 6.025 21.5 8.15q0 1.075-.375 2.112-.375 1.038-1.325 2.3-.95 1.263-2.575 2.888-1.625 1.625-4.125 3.875Zm0-2.025q2.4-2.15 3.95-3.7 1.55-1.55 2.45-2.688.9-1.137 1.25-2.012T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.188.675Q13.3 6 12.725 7.2h-1.45q-.6-1.225-1.6-1.888-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.75t1.25 2.012q.9 1.138 2.45 2.675Q9.6 16.125 12 18.3Zm0-6.825Z' />
            </svg> */}
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              width='24'
              fill='#f91880'
            >
              <path d='m12 20.325-1.1-1q-2.5-2.25-4.125-3.875T4.2 12.562q-.95-1.262-1.325-2.3Q2.5 9.225 2.5 8.15q0-2.125 1.438-3.563Q5.375 3.15 7.5 3.15q1.3 0 2.475.612Q11.15 4.375 12 5.525q.85-1.15 2.025-1.763Q15.2 3.15 16.5 3.15q2.125 0 3.562 1.437Q21.5 6.025 21.5 8.15q0 1.075-.375 2.112-.375 1.038-1.325 2.3-.95 1.263-2.575 2.888-1.625 1.625-4.125 3.875Z' />
            </svg>
            <span style={{ color: '#f91880' }}>{post.likes}</span>
            <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='#1d9bf0'>
              <path d='M2.5 21.05V4.3q0-.75.525-1.275Q3.55 2.5 4.3 2.5h15.4q.75 0 1.275.525.525.525.525 1.275v11.4q0 .75-.525 1.275-.525.525-1.275.525H6.05ZM4 17.425 5.425 16H19.7q.125 0 .213-.088.087-.087.087-.212V4.3q0-.125-.087-.213Q19.825 4 19.7 4H4.3q-.125 0-.212.087Q4 4.175 4 4.3ZM4 4.3V4v13.425Z' />
            </svg>
            <span style={{ color: '#1d9bf0' }}>{post?.comments}</span>
          </div>
        </div>
      </div>
    </>
  )
}
