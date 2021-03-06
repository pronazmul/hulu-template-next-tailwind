import Image from 'next/image'
import{ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({result}, ref)=> {
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} className='group cursor-pointer transition duration-200 sm:hover:scale-105 hover:z-50'>
            <Image
            layout='responsive'
            src={BASE_URL+result.backdrop_path||BASE_URL+result.poster_path}
            height={1080}
            width={1920} 
            alt={result.media_type && result.media_type}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='text-white text-2xl mt-1 transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} `}{' '}
                    {result.relese_date && result.relese_date} {' '}
                    <ThumbUpIcon className='h-5 mx-2'/> {result.vote_count}
                </p>
            </div>
        </div>
    )
})

Thumbnail.displayName = "Thumbnail";

export default Thumbnail
