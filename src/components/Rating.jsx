import React from 'react';

const Rating = () => {
    return (
        <>
            <form action="">
                <div className='p-10 h-screen'>
                    <div className='text-center text-6xl font-bold p-10'>Your <span className='text-pink-600'> Feedback</span> About Website.</div>
                    <label htmlFor=""></label>
                    <div className='text-center m-5'>
                        <input type="text" className='w-[50vw] h-[20vh] text-black rounded-[30px] border-none outline-none text-2xl' />
                    </div>
                    <br />
                    <p className='text-center text-6xl m-8 font-bold'>Rating <span className='text-8xl'>1 to 5.</span></p>
                    <div className='flex rounded-3xl justify-center'>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <div key={rating} className='mr-10 text-pink-700'>
                                <input
                                    type="radio"
                                    id={`rating-${rating}`}
                                    name="rating"
                                    className="hidden peer"
                                />
                                <label
                                    htmlFor={`rating-${rating}`}
                                    className="flex flex-col items-center cursor-pointer"
                                >
                                    <span className="w-10 h-10 flex items-center justify-center rounded-full border-4 border-white text-white peer-checked:bg-pink-700 peer-checked:border-transparent">
                                        {rating < 10 ? `0${rating}` : rating}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className='m-10 text-center'>
                        <button className='bg-white text-black px-10 py-5'>Submit</button>
                    </div>
                </div>

            </form>

        </>
    );
}

export default Rating;