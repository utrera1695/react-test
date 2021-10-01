import PostComponent from "./post/post.component";

function ContainerComponent() {
    return (
        <div className="product-list">
            <PostComponent value={"hola"} />
        </div>
    );
}

export default ContainerComponent;
