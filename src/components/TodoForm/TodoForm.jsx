import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInformation, editInformation } from "../../redux/slices/addSlice";
import "./TodoForm.scss";

function TodoForm() {
    const dispatch = useDispatch();
    const editingTodo = useSelector(state => state.add.editingTodo);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        birthDate: "",
        gender: "",
        hobbies: [],
        country: "",
        comment: "",
    });

    useEffect(() => {
        if (editingTodo) {
            setFormData(editingTodo);
        }
    }, [editingTodo]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                hobbies: checked
                    ? [...prev.hobbies, value]
                    : prev.hobbies.filter((p) => p !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            dispatch(editInformation(formData)); 
        } else {
            dispatch(addInformation({ ...formData, id: Date.now() })); 
        }
        setFormData({ id: null, name: "", email: "", phone: "", birthDate: "", gender: "", hobbies: [], country: "", comment: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="malumot">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <div className="labelline">Ism va Familiya</div>
            </div>
            <div className="malumot">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <div className="labelline">Email</div>
            </div>
            <div className="malumot">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                <div className="labelline">Telefon Raqami</div>
            </div>
            <div className="malumot">
                <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                <div className="labelline">Tug'ilgan Sana</div>
            </div>
            <div className="malumot radio-group">
                <label>Jinsingiz:</label>
                <label>
                    <input type="radio" name="gender" value="Erkak" checked={formData.gender === "Erkak"} onChange={handleChange} required /> Erkak
                </label>
                <label>
                    <input type="radio" name="gender" value="Ayol" checked={formData.gender === "Ayol"} onChange={handleChange} required /> Ayol
                </label>
            </div>
            <div className="malumot checkbox-group">
                <label>Hobbilaringiz:</label>
                <label>
                    <input type="checkbox" name="hobbies" value="Sport" checked={formData.hobbies.includes("Sport")} onChange={handleChange} /> Sport
                </label>
                <label>
                    <input type="checkbox" name="hobbies" value="Kitob o'qish" checked={formData.hobbies.includes("Kitob o'qish")} onChange={handleChange} /> Kitob o'qish
                </label>
                <label>
                    <input type="checkbox" name="hobbies" value="Musiqa" checked={formData.hobbies.includes("Musiqa")} onChange={handleChange} /> Musiqa
                </label>
            </div>
            <div className="malumot">
                <select name="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Mamlakatni tanlang</option>
                    <option value="Uzbekistan">O'zbekiston</option>
                    <option value="Kazakhstan">Qozog'iston</option>
                    <option value="Turkey">Turkiya</option>
                    <option value="Russia">Rossiya</option>
                </select>
            </div>
            <div className="malumot">
                <textarea name="comment" value={formData.comment} onChange={handleChange} rows="4"></textarea>
                <div className="labelline">Qo'shimcha Izoh</div>
            </div>
            <button type="submit">{formData.id ? "Yangilash" : "Saqlash"}</button>
        </form>
    );
}

export default TodoForm;
