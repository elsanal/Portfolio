import React from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import './image.css'

function ImageSwiper(props) {
    return(
        <ImageContainer>
             <ImageGallery
                showFullscreenButton = {false}
                showPlayButton = {false}
                showThumbnails = {false}
                showBullets = {false}
                showNav = {true}
                slide = {false}
                autoPlay = {false}
                items = {props.images}
            />
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
    height: 50%;
    width: 50%;
    background-color:red;
`;

export default ImageSwiper