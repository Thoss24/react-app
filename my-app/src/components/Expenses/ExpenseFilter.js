import './ExpenseFilter.css'

const ExpenseFilter = () => {

    const yearSelectionHandler = (event) => {
        console.log(event.target.value)
    };

    return (
        <div className='expenses-filter'>
            <div>
                <label className='expenses-filter label'>Filter By Year</label>
                <select name="" id="" onChange={yearSelectionHandler}>
                <option value="2020" className='expenses-filter select'>2020</option>
                <option value="2021" className='expenses-filter select'>2021</option>
                <option value="2022" className='expenses-filter select'>2022</option>
                <option value="2023" className='expenses-filter select'>2023</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter