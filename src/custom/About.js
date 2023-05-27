const positions = [
    {
        "name": "NetApp INC",
        "from": "September 2022 ",
        "to": "Current",
        "title": "MTS-Software Engineer I"
    },
    {
        "name": "Inmar Intelligence",
        "from": "May 2021",
        "to": "September 2022",
        "title": "Software Engineer"
    },
    {
        "name": "University of South Dakota-Biomedical Engineering Deparment",
        "from": "January 2019",
        "to": "December 2021",
        "title": "Undergraduate Research Assistant"
    },
    {
        "name": "University of South Dakota",
        "from": "August 2017",
        "to": "December 2021",
        "title": "Undergraduate Student"
    }
]
const journeyDetails = []
positions.forEach(position => {
    journeyDetails.push(
        <div className="card" key={position.name}>
            <div className="info">
                <div className="timeline-card">{position.name}</div>
                <div className="timeline-description"><p>{position.from} - {position.to}</p></div>
            </div>
        </div>
    )
});

export default function TimeLineCard() {
    return(
    <>
        <h2 className="aboutHeader">About</h2>
        <br />
        <div className="dividedInfo">Hello! My name is Sabi Kaflay, SDE based out of Raleigh, NC.
            I currently work as a Software Developer at Net App Inc. I graduated from the University of South Dakota with BS Computer Science Degree. In terms of hobbies, I enjoy painting and being a part-time reader, where I&quot; trying to finish my 250<sup>th</sup> novel this year!
        </div>
        <div className="additionalDetails">
            <div className="left-section ">
                <h4 className="header  my-4">Skills</h4>
                <div className="details-list">
                    <p>Python</p>
                    <div className="meter orange nostripes"> <span className="python"></span></div>
                    <p>JavaScript</p>
                    <div className="meter blue nostripes"> <span className="js"></span></div>
                    <p>C#</p>
                    <div className="meter green nostripes"> <span className="c"></span></div>
                    <p>TypeScript</p>
                    <div className="meter purple nostripes"> <span className="ts"></span></div>
                    <p>React/Angular</p>
                    <div className="meter yellow nostripes"> <span className="react"></span></div>
                    <p>Java</p>
                    <div className="meter coral nostripes"> <span className="java"></span></div>
                </div>
            </div>
            <div className="right-section">
                <h3 className="header my-4">Journey so Far</h3>
                <div className="right-frame" >
                    <div className="timeline">
                        <div className="outer">{journeyDetails}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}