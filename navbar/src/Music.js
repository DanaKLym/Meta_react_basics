function Music() {
//building an instance of the Audio constructor
    const song1 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/Music_of_MultiVersus_-_Game_of_Thrones_Medley_for_MVS.ogg"
        );

    const song2 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Music_of_MultiVersus_-_Batman_The_Caped_Crusader_%28Player_First_Games%29.ogg"
        );

//"paused" property checks if the audio is playing; play() and pause() are built-in functions;
    function button1() {
        if(song1.paused){
            song1.play();
        } else {
            song1.pause();
        }
    }

    function button2() {
        if(song2.paused){
            song2.play();
        } else {
            song2.pause();
        }
    }

    return (
        <div>
            <button onClick={button1}>
        Guess the melody
            </button>
            <button onClick={button2}>
        Guess the other melody
            </button>
        </div>
    );
};

export default Music;