import { options } from "../../helpers/helpers";

const FirstStep = () => {
    return (
        <>
            {options.map(({ value, label }) => {
                return (
                    <>
                        <label key={value}>
                            {label}
                            <input type="radio" name="categories" value={value} />
                        </label>
                    </>
                )
            })}
        </>
    )
};

export default FirstStep;