import narutoImage from './assets/naruto image.jpeg'

export default function Card1(){
    return(
        <>
            <h1 className="card-title">Skill Card</h1>
            <img src={narutoImage} alt="profile-image" className="profile-image"/>
            <div id="info">
                <h1 id="name">Ved Gupta</h1>
                <h3>Aspiring Web Dev</h3>
                <h3 id="college-name">Indian Institute of Information Technology, Vadodara</h3>
                <h4 id="email">vedgupta1806@gmail.com</h4>
            </div>
        </>
    );
}