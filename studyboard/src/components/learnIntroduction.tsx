export default function LearnIntroduction() {
    const [name1, name2] = ["Cer4pus2ka", "MrLudrik"];
    const learningGoal = "Learn to be the programmer that is worth hiring and to be able to create a product that is useful for the world";
    return (
        <div>
            <h1> The goal for {name1} and {name2} is to </h1>
            <p>{learningGoal}</p>
        </div>
    )
};