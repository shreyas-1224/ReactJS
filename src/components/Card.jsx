// haven't imported anywhere.

export default function card(props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.src} alt="avatar_img" />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );

}