import narutoImage from './assets/naruto image.jpeg'

export default function Card1(){
    return(
        <>
            <h1>Skill Card</h1>
            <img src={narutoImage} alt="profile-image" className="profile-image"/>
            <div id="info">
                <h1>Ved Gupta</h1>
                <h3>Aspiring Web Dev</h3>
                <h3 id="college-name">College Name</h3>
                <h4 id="email">email</h4>
            </div>
        </>
    );
}