
export default function Info({FullName, AboutMe, Interests, Hobbies}) {
    return (
        <div className="info">
            <h1>Full Name { FullName}</h1>
        
        <h2>About Me {AboutMe}</h2>
       
            <h2>Interests {Interests}</h2>
            <h2>Hobbies {Hobbies}</h2>
        
        </div>
    );
    }