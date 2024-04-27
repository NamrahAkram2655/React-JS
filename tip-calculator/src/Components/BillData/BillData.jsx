import React from 'react'

const BillData = (props) => {

    const inputHandler = (e) => {
        { props.setInput(e.target.value) };
    }

    const reviewHandler = (e) => {
        { props.setReview(e.target.value) };
    }

    const frndReviewHandler = (e) => {
        { props.setFrndReview(e.target.value) };
    }

    return (
        <div className='bill'>
            <form action="">
                <label htmlFor="">How much was the bill? </label>
                <input type="text" onChange={inputHandler} value={props.input} /><br />
                <label htmlFor="">How do you like the service? </label>
                <select name="" id="" onChange={reviewHandler} value={props.review}>
                    <option value="0">Dissatisfied (0%)</option>
                    <option value="5">It was okay (5%)</option>
                    <option value="10">It was good (10%)</option>
                    <option value="20">Absolutely amazing (20%)</option>
                </select><br />
                <label htmlFor="">How did your friend like this service? </label>
                <select name="" id="" onChange={frndReviewHandler} value={props.frndReview}>
                    <option value="0">Dissatisfied (0%)</option>
                    <option value="5">It was okay (5%)</option>
                    <option value="10">It was good (10%)</option>
                    <option value="20">Absolutely amazing (20%)</option>
                </select>
            </form>
        </div>
    )
}

export default BillData
