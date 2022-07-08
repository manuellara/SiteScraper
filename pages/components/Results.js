import React from 'react'

// https://spankbang.com/703wq/video/wet+pussy+play

const videoFormats = ['4k', '1080p', '720p', '480p', '320p', '240p']

export default function Results({ content }) {
    return (
        <div className='flex justify-between w-full'>
            <div>
                <img src={content["thumbnail"]} width={200} alt="img thumbnail" />
            </div>

            <div className='flex flex-col space-y-4 w-1/2 justify-center'>

                {videoFormats.map((format, index) => (
                    content[format].length > 0 ?
                        <a key={index} target="_blank" href={content[format]} className='flex justify-center' rel="noopener noreferrer">
                            {format}
                        </a>
                        :
                        null
                ))}

            </div>
        </div>
    )
}
