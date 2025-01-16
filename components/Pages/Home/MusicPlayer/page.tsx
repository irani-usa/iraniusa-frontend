"use client"
import 'react-h5-audio-player/lib/styles.css';


import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Star from '../../About/Star';

const songs = [
    { id: 1, title: 'barf', artist: 'tijay', src: '/song/music.mp3' },
    { id: 2, title: 'block', artist: 'tijay', src: '/song/1579733546.mp3' },
    { id: 3, title: 'block', artist: 'tijay', src: '/song/1579733546.mp3' },
    { id: 4, title: '2 Qotbi', artist: 'Danyal', src: '/song/2 Ghotbi (Prod. by Radpro)   None.mp3' },
];

export default function Home() {
    const [currentSong, setCurrentSong] = useState(songs[0]);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex flex-col items-center mb-10">
                <div className="w-full flex items-center justify-center gap-x-2">
                    <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
                    <Star content={"music player"} />
                    <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
                </div>
                <p className="text-white-shade-11 mt-4 text-lg">
                    Listen to the newest hit music with a live music player        </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full container mt-10">
                {/* Popular Songs */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Popular songs</h2>
                    <div className="space-y-4 ">
                        <div className="h-52 p-4 shadow flex rounded-xl relative text-white">
                            <img src="/artist/tijay.jpg" alt="Ashvan" className="rounded-xl absolute w-full h-full inset-0 -z-20" />
                            <div>
                                <p className="font-bold">Barf</p>
                                <p className="text-gray-500">Amin tijay</p>
                            </div>
                            <svg onClick={() => setCurrentSong({id: 1, title: 'barf', artist: 'tijay', src: '/song/music.mp3' })} className='absolute z-20 bottom-3 right-3 cursor-pointer hover:scale-95 transition-all' width="52" height="52" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="23" fill="white" />
                                <path d="M25.7752 19.5587C27.9251 21.0202 29 21.7509 29 23.0007C29 24.2505 27.9251 24.9812 25.7752 26.4427C25.1817 26.8461 24.5931 27.226 24.0522 27.5425C23.5777 27.8202 23.0403 28.1074 22.4839 28.3894C20.3391 29.4763 19.2667 30.0197 18.3048 29.418C17.343 28.8164 17.2556 27.5568 17.0808 25.0376C17.0313 24.3252 17 23.6268 17 23.0007C17 22.3746 17.0313 21.6762 17.0808 20.9638C17.2556 18.4446 17.343 17.1851 18.3048 16.5834C19.2667 15.9817 20.3391 16.5251 22.4839 17.612C23.0403 17.894 23.5777 18.1812 24.0522 18.4589C24.5931 18.7754 25.1817 19.1553 25.7752 19.5587Z" fill="black" />
                            </svg>

                        </div>
                        <div className="p-4 h-36 shadow flex rounded-xl relative text-white">
                            <img src="/artist/tijay.jpg" alt="Ashvan" className="rounded-xl absolute w-full h-full inset-0 -z-20" />
                            <div>
                                <p className="font-bold">Block</p>
                                <p className="text-gray-500">Amin tijay</p>
                            </div>
                            <svg onClick={() => setCurrentSong( { id: 2, title: 'block', artist: 'tijay', src: '/song/1579733546.mp3' })} className='absolute z-20 bottom-3 right-3 cursor-pointer hover:scale-95 transition-all' width="52" height="52" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="23" fill="white" />
                                <path d="M25.7752 19.5587C27.9251 21.0202 29 21.7509 29 23.0007C29 24.2505 27.9251 24.9812 25.7752 26.4427C25.1817 26.8461 24.5931 27.226 24.0522 27.5425C23.5777 27.8202 23.0403 28.1074 22.4839 28.3894C20.3391 29.4763 19.2667 30.0197 18.3048 29.418C17.343 28.8164 17.2556 27.5568 17.0808 25.0376C17.0313 24.3252 17 23.6268 17 23.0007C17 22.3746 17.0313 21.6762 17.0808 20.9638C17.2556 18.4446 17.343 17.1851 18.3048 16.5834C19.2667 15.9817 20.3391 16.5251 22.4839 17.612C23.0403 17.894 23.5777 18.1812 24.0522 18.4589C24.5931 18.7754 25.1817 19.1553 25.7752 19.5587Z" fill="black" />
                            </svg>

                        </div>
                    </div>
                </div>

                {/* Monthly Hits */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Monthly hits</h2>
                    <div className="bg-primary-shade-11 text-white rounded-xl shadow  flex flex-col gap-3 p-2">
                        {songs.map((song, index) => (
                            <div
                                key={song.id}
                                className={`p-4 cursor-pointer flex gap-5 items-center rounded-xl ${currentSong.id === song.id ? 'bg-white text-black' : 'bg-primary-shade-14'
                                    }`}
                                onClick={() => setCurrentSong(song)}
                            >
                                <span className="text-gray-400">{index + 1}</span>

                                <div>
                                    <p className="font-bold">{song.title}</p>
                                    <p className="text-gray-500">{song.artist}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Now Playing */}
                <div>
                <h2 className="text-xl font-semibold mb-4">Now Playing</h2>

                    <div className="bg-primary-shade-11 text-white shadow  p-2 rounded-2xl w-full flex flex-col ">
                        <img
                            src={`/artist/${currentSong.artist.toLowerCase().replace(' ', '-')}.jpg`}
                            alt={currentSong.title}
                            className="w-full h-44 rounded-2xl mb-4 aspect-square"
                        />
                        <p className="pl-4 font-bold text-lg">{currentSong.title}</p>
                        <p className="pl-4 text-white-shade-11 mb-4">{currentSong.artist}</p>
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
        </div>
    );
}

