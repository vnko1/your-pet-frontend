import { Field } from "formik";
import { sexOptions } from "../../helpers/helpers";



const ThirdStep = ({currentRadioChecked, handleSex, setAvatarFile, avatarFile, fileIsLoaded, setFileIsLoaded, avatarPreview, setAvatarPreview}) => {

    const handleAvatarLoad = e => {
        const avatar = e.currentTarget.files[0];

        if (!avatar) {
            setAvatarFile(null);
            setFileIsLoaded(false);
            setAvatarPreview(null);
            return
        }

        setAvatarFile(avatar);
        setAvatarPreview(URL.createObjectURL(avatar));
        setFileIsLoaded(true);
    }

    return (
        <>
            {currentRadioChecked !== "your-pet" &&
                <div>
                    {sexOptions.map(({ value, label }) => {
                        return (
                            <>
                                <label key={value}>
                                    {label}
                                    <Field type="radio" name="sex" value={value} onChange={handleSex}/>
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
                <Field type="file" id="avatar" name='avatar' accept="image/*" onChange={handleAvatarLoad}/>
            </div>
            {currentRadioChecked !== "your-pet" &&
                <div>
                    <label htmlFor="location">Location</label>
                    <Field type="text" name="location" id="location" autoComplete="off" placeholder="Type of location" />
                </div>
            }
            {currentRadioChecked === "sell" &&
                <div>
                    <label htmlFor="price">Price</label>
                    <Field type="text" name="price" id="price" autoComplete="off" placeholder="Type of price" />
                </div>
            }
            <div>
                <p>Comments</p>
                <textarea name="comments" id="comments" placeholder="Type of pet"></textarea>
            </div>
        </>
    )
};

export default ThirdStep;