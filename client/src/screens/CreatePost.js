import React from 'react';
import { ReactComponent as GalleryWhite } from "../assets/icons/gallery-add-white.svg";
import { ReactComponent as FileUpload } from "../assets/icons/file-upload.svg";
import "./CreatePost.css"
import { useState } from 'react';

const CreatePost = () => {
    const [caption, setCaption] = useState('');
    const [location, setLocation] = useState('');
    const [tags, setTags] = useState('');
    const [tags_array, setTagsArray] = useState([]);
    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleTagsChange = (event) => {
        //setTags((prevTags) => [...prevTags, event.target.value]);
        setTags(event.target.value);
        setTagsArray(event.target.value.split(','));
    };

    const handleSubmit = () => {

    };
    return (
        <div className='create-post-container'>
            <div className='create-post-header'>
                <GalleryWhite style={{ transform: 'scale(1.2)' }} />
                <p style={{ fontSize: '22px', color: 'white', fontWeight: 'bold' }}> Create Post</p>
            </div>

            <div className='create-post-caption'>
                <p style={{ color: 'white', marginBottom: '10px' }}>Caption</p>
                <textarea
                    className='caption-input'
                    type="text"
                    value={caption}
                    onChange={handleCaptionChange} />
            </div>

            <div className='create-post-add-photos'>
                <p style={{ color: 'white', marginBottom: '10px' }}>Add Photos</p>
                <div className='drag-photo-container'>
                    <FileUpload />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ color: 'white' }}> Drag Photo here</p>
                        <p style={{ color: 'grey', fontSize: '12px', alignSelf: 'center' }}> SVG, PNG, JPN</p>
                    </div>

                    <button className='upload-photo-button'>Select from computer</button>
                </div>
            </div>

            <div className='create-post-add-location'>
                <p style={{ color: 'white', marginBottom: '10px' }}>Add location</p>
                <input
                    className='add-location-input'
                    value={location}
                    onChange={handleLocationChange} />
            </div>

            <div className='create-post-add-tag'>
                <p style={{ color: 'white', marginBottom: '10px' }}>Add Tags (seperated by comma ",")</p>
                <input
                    className='add-tag-input'
                    placeholder='Art, Expression, Learn'
                    value={tags}
                    onChange={handleTagsChange} />
            </div>

            <div className='create-post-buttons'>
                <button className='cancel-button'>Cancel</button>
                <button className='create-post-button' onClick={handleSubmit}>Create Post</button>
            </div>
        </div >
    )
};
export default CreatePost
