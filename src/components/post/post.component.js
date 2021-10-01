import { useSelector} from "react-redux";
function PostComponent(props) {
    const post = useSelector(state => state.post)

    return (
        <div className="product-list">
            <div>{props.value}</div>
            <h1>{post.name}</h1>
            <p>{post.description}</p>
        </div>
    );
}

export default PostComponent;
