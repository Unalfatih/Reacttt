import axios from "axios";


const Calculator =(onAddPerson) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const person = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            age: e.target.age.value,
            height: e.target.height.value,
            width: e.target.width.value,
            gender: e.target.gender.value,
        };
        const height = parseFloat(e.target.elements.height.value);
        const width = parseFloat(e.target.elements.width.value);
        person.vki = width / ((height / 100) * (height / 100));

        axios.post("http://localhost:5001/calculator",person).then((response)=> {
                onAddPerson(response.data);
            }).catch((error) => {
                console.error("Error adding person:", person);
              });
        e.target.reset();
    };

    return(
        <>
            <form onSubmit={onSubmit} className="dataform">
                <h3>VKİ Hesaplama</h3>
                <p>verilerinizi giriniz</p>
                <input type="text" placeholder="İsim" name="name" />
                <input type="text" placeholder="Soyad" name="surname" />
                <input type="number" placeholder="Yaş" name="age" />
                <input type="number" placeholder="Boy" name="height" />
                <input type="number" placeholder="Kilo" name="width" />
                <select name="gender" placeholder="Cinsiyet">
                    <option value="" defaultChecked >Cinsiyet seçiniz</option>
                    <option value="Erkek">Erkek</option>
                    <option value="Kadın">Kadın</option>
                </select>

                <button type="submit">Ekle</button>

            </form>

        </>
    )

}

export default Calculator;