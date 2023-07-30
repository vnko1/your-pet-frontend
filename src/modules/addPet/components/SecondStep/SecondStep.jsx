import { Field } from "formik";
import { fields } from "../../helpers/helpers";



const SecondStep = ({currentRadioChecked}) => {
    return (
        <>
            {currentRadioChecked !== "your-pet" &&
                <>
                    <label htmlFor="add">Title of add</label>
                    <Field type="text" name="add" id="add" autoComplete="off" placeholder="Title of add"/>
                </>
            }
            {fields.map(({ name, label, placeholder, type }) => {
                return (
                    <div key={name}>
                        <label htmlFor={name}>{label}</label>
                        <Field type={type} name={name} id={name} autoComplete="off" placeholder={placeholder} />
                    </div>
                    
                )
            })}
        </>
    )
};

export default SecondStep;


