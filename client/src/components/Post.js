import React from 'react';
import { ReactComponent as LikeIcon } from "../assets/icons/like.svg";
import { ReactComponent as SaveIcon } from "../assets/icons/save.svg";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";
import { ReactComponent as PlaceHolderIcon } from "../assets/icons/profile-placeholder.svg";
import './Post.css'
const Post = ({ name, time_ago, description, tag, likes, image_url }) => {
    return (
        <div className='post-container'>
            <div className='post-header'>
                <div className='post-user'>
                    <PlaceHolderIcon style={{ marginTop: '8px' }} />
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: '17px' }}>{name}</div>
                        <div style={{ fontSize: '12px', fontWeight: 'lighter', color: '#808080', marginTop: '3px' }}>{time_ago}h ago</div>
                    </div>
                </div>
                <EditIcon className='post-edit-icon' />
            </div>

            <div className='post-middle'>
                <div>
                    <p style={{ marginBottom: '5px', wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>{description}</p>
                    <p style={{ fontSize: '14px', fontWeight: 'lighter', color: '#808080', marginBottom: '15px' }}>#{tag}</p>
                </div>
                <img className="image" src={image_url} alt="image" />
            </div>

            <div className='post-bottom'>
                <div className='post-like'>
                    <LikeIcon />
                    <p>{likes}</p>
                </div>
                <SaveIcon />
            </div>

        </div>
    )
};
export default Post