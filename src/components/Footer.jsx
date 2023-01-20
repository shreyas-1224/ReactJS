
export default function Footer(){
    var getYear = new Date().getFullYear();
    return(
        <footer>
            <p> copyright by ShreyasLifeWorks ©{getYear}</p>
        </footer>
    );
}