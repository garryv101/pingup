import React, { useEffect, useState } from 'react'
import { assets, dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'
import PostCard from '../components/PostCard'
import RecentMessages from '../components/RecentMessages'


const Feed = () => {

  const [feeds, setfeeds] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeeds = async () => {
    setfeeds(dummyPostsData)
    setLoading(false)
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  
  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex
    items-start justify-center xl:gap-8'>
      {/* Stories and post list */}
      <div>
        <StoriesBar />
        <div className='p-4 space-y-6'>
          {feeds.map((post) =>(
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className='max-xl:hidden sticky top-0 w-72 space-y-4'>
        <div className='bg-white text-xs p-4 rounded-xl flex flex-col gap-3 shadow-sm border border-slate-100'>
          <h3 className='text-slate-800 font-semibold text-sm'>Sponsored</h3>
          <img src={assets.sponsored_img} className='w-full h-48 object-cover rounded-lg' alt="Sponsored ad" />
          <div className='space-y-1'>
            <p className='text-slate-700 font-medium'>Email marketing</p>
            <p className='text-slate-500 leading-relaxed'>Supercharge your marketing with a powerful, easy-to-use platform built for results.</p>
          </div>
        </div>

        <RecentMessages />
      </div>
    </div>
  ) : <Loading />
}

export default Feed
