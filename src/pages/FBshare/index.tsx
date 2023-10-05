import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
    InstapaperIcon,
    InstapaperShareButton,
} from 'next-share'


const FBshare = () => {
    return (
        <div>

            <FacebookShareButton
                url={'https://foodbourg.lancemeup.com/'}
                title={'FoodBourg | Delivering Happiness'}
                hashtag={'#foodbourg'}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>



            <TwitterShareButton
                url={'https://foodbourg.lancemeup.com/'}
                title={'FoodBourg | Delivering Happiness'}
            // hashtags={['foodbourg']}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <InstapaperShareButton
                url={'https://github.com/next-share'}
                title={'Next Share'}
            >
                <InstapaperIcon size={32} round />
            </InstapaperShareButton>
        </div>
    )
}

export default FBshare