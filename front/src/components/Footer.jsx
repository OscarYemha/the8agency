import React from 'react';

export default () => {
    return(
        <div className="footer">
            <div className="thingsFooter">
                <div className="copyright">
                   <p className="pCopyright">© 2020</p>
                </div>
                <div className="icons">
                    <img src="/twitterLogo2.png" alt="twitterLogo" className="singleIcon twitterIcon"/>
                    <img src="/facebookLogo.png" alt="facebookLogo" className="singleIcon facebookIcon"/>
                    <img src="/linkedinLogo.png" alt="linkedinLogo" className="singleIcon"/>
                    <img src="/youtubeLogo.png" alt="youtubeLogo" className="singleIcon youtubeIcon"/>
                    <img src="/instagramLogo.png" alt="instagramLogo" className="singleIcon instagramIcon"/>
                    <img src="/snapchatLogo.png" alt="snapchatLogo" className="singleIcon snapchatIcon"/>
                </div>
            </div>
        </div>
    )
}