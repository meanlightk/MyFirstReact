import { CiEdit } from 'react-icons/ci';
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder='할 일을 입력하세요' />
            <button type='submit'>
                <CiEdit />
            </button>
        </form>
    );
};

export default TodoInsert;