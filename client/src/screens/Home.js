import React from 'react';
import LeftBar from '../components/LeftBar'
import Post from '../components/Post'
import './Home.css'



const HomeScreen = () => {

    return (
        <div className='home-container'>
            <div className='home-middle'>
                <div className='home-feed'>
                    Home Feed
                </div>
                <div className='home-post-block'>
                    <Post name='trietdao' time_ago='10' description='This is my favorite photo' tag='chill'
                        likes='1'
                        image_url="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f" />

                    <Post name='user' time_ago='10' description='descrpition' tag='this_tag'
                        likes='1'
                        image_url="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f" />
                </div>
            </div>

            <div className='home-right'>

            </div>
        </div>
    )
};
export default HomeScreen