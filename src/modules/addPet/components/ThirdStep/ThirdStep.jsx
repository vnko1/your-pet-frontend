import { Field } from "formik";
import { sexOptions } from "../../helpers/helpers";



const ThirdStep = () => {
    const currentRadioChecked = "your-pet";

    return (
        <>
            {currentRadioChecked !== "your-pet" &&
                <div>
                    {sexOptions.map(({ value, label }) => {
                        return (
                            <>
                                <label key={value}>
                                    {label}
                                    <input type="radio" name="sex" value={value} />
                                </label>
                            </>
                        )
                    })}
                </div>
            }
            <div>
                <p>
                    Load the pet’s image:
                </p>
                <input type="file" id="avatar" name='avatar' />
            </div>
            {currentRadioChecked !== "your-pet" &&
                <div>
                    <label htmlFor="location">Location</label>
                    <Field type="text" name="location" id="location" autoComplete="off" placeholder="Type of location" />
                </div>
            }
            {currentRadioChecked !== "sell" &&
                <div>
                    <label htmlFor="price">Price</label>
                    <Field type="text" name="price" id="price" autoComplete="off" placeholder="Type of price" />
                </div>
            }
            <div>
                <p>Comments</p>
                <textarea name="comments" id="comments"></textarea>
            </div>
        </>
    )
};

export default ThirdStep;