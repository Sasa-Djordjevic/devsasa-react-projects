import mystyles from './Question.module.css';

import {FaPlus, FaMinus} from 'react-icons/fa6';

const Question = (props) => {
    //const [open, setOpen] = useState(false);
    const {id, title, info} = props.data;

    const open = id === props.activId;

    return (
        <div className={mystyles.question}>
            <div>
                <h5>{title}</h5>
                <button 
                    className={mystyles['question-btn']} 
                    onClick={() => props.openHandler(id)}
                >{open ? <FaMinus /> : <FaPlus />}</button>
            </div>
            {open && <p>{info}</p>}
        </div>
    );
};

export default Question;