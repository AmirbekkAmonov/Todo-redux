import "./TodoCard.scss";
import { useDispatch } from "react-redux";
import { deleteInformation, setEditingTodo } from "../../redux/slices/addSlice";

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();
    const profileImage = todo.gender === "Erkak" ? "profile.png" : "profile2.png";

    return (
        <div className="card">
            <div className="profile">
                <img src={profileImage} alt="Profile" />
                <b><strong>F.I: </strong> {todo.name}</b>
            </div>
            <div className="text">
                <p><strong>Email:</strong> {todo.email}</p>
                <p><strong>Tel:</strong> {todo.phone}</p>
                <p><strong>Tavallud:</strong> {todo.birthDate}</p>
                <p><strong>Jins:</strong> {todo.gender}</p>
                <p><strong>Hobbi:</strong> {todo.hobbies?.join(", ")}</p>
                <p><strong>Mamlakat:</strong> {todo.country}</p>
                <p><strong>Comment:</strong> {todo.comment}</p>
                <div className="buttons">
                    <button className="edit" onClick={() => dispatch(setEditingTodo(todo))}>
                        Edit
                    </button>
                    <button className="delete" onClick={() => dispatch(deleteInformation(todo.id))}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
