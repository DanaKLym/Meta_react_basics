import ReactPlayer from 'react-player/youtube';
//specified "youtube" to reduce the bundlesize, since the vids would mainly be uploaded from YT;
import logo from './assets/logo.png';

const Gallery = () => {

    const image = "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/048/106/original/home.png?1665489684";

    return (
        <>
            <img src={require("./assets/logo2.png")} height={200} alt="logo2"/>
            <img src={image} alt="another logo" height={200} />
            <img src={logo} alt="Logo" height={200}/>
            <div className="video-item">
            <ReactPlayer url="https://youtu.be/u1g7zSsUpJY" />
            </div>
        </>
    );
}

export default Gallery;
