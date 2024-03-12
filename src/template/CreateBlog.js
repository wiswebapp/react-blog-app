import { useEffect, useState } from "react";

const CreateBlog = () => {

    const [inputFields, setInputFields] = useState({
        userId: 5,
        title: "",
        desc: ""
      });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitBtnTxt, setSubmitBtnTxt] = useState("Save");
    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.title.length < 10) {
          errors.title = "Title is too short";
        }
        if (inputValues.desc.length < 10) {
          errors.desc = "Description is too short";
        }
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputFields({ ...inputFields, [name]: value });
    };

    function handleSubmit () {
        setSubmitBtnTxt("Please wait");
        setErrors(validateValues(inputFields));
        setSubmitting(true)
    }

    const finishSubmit = () => {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title" : inputFields.title,
                "body" : inputFields.desc,
                "userId" : inputFields.userId,
                "reactions": 105
            })
        })
        .then(res => {
            return res.json();
        })
        .then((data) => {
            if(data.id) {
                setInputFields({
                    title: "",
                    desc: ""
                })
            }
        })
        .catch((err) => {
            let errors = {};
            errors.title = "Whoops ! Failed To connect with server."
            setErrors(errors);
        })

    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);

    return (
        <div className="create">
            <div className="row mb-5">
                <h1 style={{color: "#456123"}}>Create a new blog</h1>
            </div>
            {Object.keys(errors).length === 0 && submitting ? (<div className="alert alert-success"><strong>Successfully submitted ✓</strong></div>) : null}
            <form onSubmit={handleSubmit} id="blogForm">
                <div className="row">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={inputFields.title}
                            className="form-control"
                            placeholder="A good title attract more users"
                            onChange={handleChange}
                        />
                        {errors.title ? (<p className="text-danger fst-italic">{ errors.title }</p>) : null}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            name="desc"
                            value={inputFields.desc}
                            placeholder="Write brief description about your blog"
                            rows="10"
                            onChange={handleChange}
                        ></textarea>
                        {errors.desc ? (<p className="text-danger fst-italic">{ errors.desc }</p>) : null}
                    </div>
                    <div className="mb-3">
                        <button onClick={handleSubmit} type="button" className="btn btn-primary mb-3">{ submitBtnTxt }</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default CreateBlog;