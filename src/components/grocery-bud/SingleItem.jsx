import mystyles from './SingleItem.module.css';

const SingleItem = (props) => {
    const deleteHandler = () => {
        props.deleteItem(props.item.id);
    };

    const checkedHandler = () => {
        props.checkedItem(props.item.id);
    };

    return (
        <div className={mystyles['single-item']}>
            <input type="checkbox" checked={props.item.completed} onChange={checkedHandler} />
            <p>{props.item.name}</p>
            <button className={mystyles['remove-btn']} onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default SingleItem;