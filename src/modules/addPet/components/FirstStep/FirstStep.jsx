import { Field } from "formik";
import { options } from "../../helpers/helpers";

const FirstStep = ({handleCategories}) => {
    return (
        <>
            {options.map(({ value, label }) => {
                return (
                    <>
                        <label key={value}>
                            {label}
                            <Field type="radio" name="categories" value={value} onChange={handleCategories} />
                        </label>
                    </>
                )
            })}
        </>
    )
};

export default FirstStep;