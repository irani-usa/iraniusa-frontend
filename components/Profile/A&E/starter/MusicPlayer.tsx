"use client"
import 'react-h5-audio-player/lib/styles.css';


import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';


const songs = [
    { id: 1, title: 'barf', artist: 'tijay', src: '/song/music.mp3', cover: "/artist/tijay.jpg" },
    { id: 2, title: 'block', artist: 'tijay', src: '/song/1579733546.mp3', cover: "/artist/tijay.jpg" },
    { id: 3, title: 'block', artist: 'tijay', src: '/song/1579733546.mp3', cover: "/artist/tijay.jpg" },
    { id: 4, title: '2 Qotbi', artist: 'Danyal', src: '/song/2 Ghotbi (Prod. by Radpro)   None.mp3', cover: "/artist/danyal.jpg" },
    { id: 5, title: '2 Qotbi', artist: 'Danyal', src: '/song/2 Ghotbi (Prod. by Radpro)   None.mp3', cover: "/artist/danyal.jpg" },
];

export default function Home() {
    const [currentSong, setCurrentSong] = useState(songs[0]);

    return (
        <div className="flex flex-col  py-16 border-b border-b-white-shade-4">
                <h2 className="text-xl  font-bold">Music Player</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 w-full mt-5 ">

            <div className="bg-primary-shade-11 text-white rounded-3xl shadow-sm  flex flex-col gap-3 p-2">
                    {songs.map((song, index) => (
                        <div
                            key={song.id}
                            className={`p-2 cursor-pointer flex gap-5 relative items-center rounded-3xl ${currentSong.id === song.id ? 'bg-white text-black' : 'bg-primary-shade-14'
                                }`}
                            onClick={() => setCurrentSong(song)}
                        >
                            <span className="text-gray-400">{index + 1}</span>
                            <div className='h-12 w-12 rounded-lg  bg-cover bg-center' style={{ backgroundImage: `url(${song.cover})` }}>
                            </div>
                            <div>
                                <p className="font-bold">{song.title}</p>
                                <p className="text-gray-500">{song.artist}</p>
                            </div>
                            {
                                currentSong.id === song.id && <svg className='absolute right-5' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1L9.75 17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17L8.25 1C8.25 0.585786 8.58579 0.25 9 0.25ZM5 3.25C5.41421 3.25 5.75 3.58579 5.75 4V14C5.75 14.4142 5.41421 14.75 5 14.75C4.58579 14.75 4.25 14.4142 4.25 14V4C4.25 3.58579 4.58579 3.25 5 3.25ZM13 3.25C13.4142 3.25 13.75 3.58579 13.75 4V14C13.75 14.4142 13.4142 14.75 13 14.75C12.5858 14.75 12.25 14.4142 12.25 14V4C12.25 3.58579 12.5858 3.25 13 3.25ZM1 7.25C1.41421 7.25 1.75 7.58579 1.75 8L1.75 10C1.75 10.4142 1.41421 10.75 1 10.75C0.585787 10.75 0.25 10.4142 0.25 10L0.25 8C0.25 7.58579 0.585786 7.25 1 7.25ZM17 7.25C17.4142 7.25 17.75 7.58579 17.75 8V10C17.75 10.4142 17.4142 10.75 17 10.75C16.5858 10.75 16.25 10.4142 16.25 10V8C16.25 7.58579 16.5858 7.25 17 7.25Z" fill="black" />
                                </svg>

                            }
                        </div>
                    ))}
                </div>      
                    <div className="bg-primary-shade-11 text-white shadow-sm  h-full p-2 rounded-3xl w-full flex flex-col justify-between">
                        <div className='h-48 w-full rounded-3xl mb-4 bg-cover bg-center' style={{ backgroundImage: `url(/artist/${currentSong.artist.toLowerCase().replace(' ', '-')}.jpg)` }}>

                        </div>

                        <div className='flex flex-col gap-1 mb-4'>
                            <p className="pl-4 font-bold text-lg">{currentSong.title}</p>
                            <p className="pl-4 text-white-shade-11 ">{currentSong.artist}</p>
                        </div>
                        <AudioPlayer
                            src={currentSong.src}
                            onEnded={() => {
                                const nextIndex = (songs.indexOf(currentSong) + 1) % songs.length;
                                setCurrentSong(songs[nextIndex]);
                            }}
                            className="w-full"
                        />
                    </div>
                  
        



            </div>
        </div>
    );
}

