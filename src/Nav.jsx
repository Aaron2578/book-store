// import { useState } from "react"
// import "./App.css"
// // import Form from "./Form.jsx"

// import { useState } from "react"

// export default function App() {
//     const [tab, setTab] = useState(true);

//     const [cardItem, setCardItem] = useState([
//         { id: 1, head: "React is an JS Library", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident." },
//         { id: 2, head: "React is an JS Library", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident." },
//         { id: 3, head: "React is an JS Library", para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident." }
//     ])
//     const totalCard = cardItem.length;

//     function handleClick() {
//         setTab(!tab)
//     }
//     function handleAddCard(item) {
//         setCardItem((prev) => [...prev, item]);
//     }
//     return (
//         <nav>
//             <div className="header">
//                 <button onClick={() => (handleClick)}>Home</button>
//                 <h5>Total Card {totalCard}</h5>
//             </div>
//             <Form cardItem={cardItem} />
//             <p>{tab === true ? cardItem.map((item) => <Card value={item} key={item.id} />) : ""}</p>
//             {/* <p>{tab === true ? <Card value={"More..."} /> : ""}</p> */}

//         </nav>)
// }

// function Form({ onAdd }) {

//     const [value1, setValue1] = useState("")
//     const [value2, setValue2] = useState("")

//     function handleSubmit(e) {
//         e.preventDefault()
//         const newList = { value1, value2, id: Date.now() };
//         console.log(newList);
//         onAdd(newList);
//         setValue1("")
//         setValue2("")
//     }


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-head">
//                     <label>Head</label>
//                     <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} />
//                 </div>
//                 <div className="form-body">
//                     <label>Paragraph</label>
//                     <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)} />
//                 </div>
//                 <div>
//                     <button>Add</button>
//                 </div>
//                 {cardItem.map((item) => <Card value={item} key={item.key} />)}
//             </form>
//         </div>
//     )
// }
// function Card({ value }) {
//     return (
//         <div className="card">
//             <h4>{value.head}</h4>
//             <p>{value.para}</p>
//             <div className="btn-wrapper">
//                 <button onClick={() => alert("This is an alert box")}>More</button>
//                 <p style={{ color: "white" }}>{value.id}</p>
//             </div>
//         </div>
//     )
// }



// 
// import { useState } from "react"
// export default function Nav() {
//     return (
//         <Form />
//     )
// }

// function Form() {
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [items, setItems] = useState([])
//     function handleChange(e) {
//         const { name, value } = e.target;
//         if (name === 'title') setTitle(value)
//         if (name === 'description') setDescription(value)
//     }
//     function handleSubmit(e) {
//         e.preventDefault();
//         const newItems = { title, description }
//         setItems((prev) => ([...prev, newItems]))
//         setTitle("")
//         setDescription("")
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Title
//                     <input type="text" name="title" value={title} onChange={handleChange} />
//                 </label>
//                 <label>Description
//                     <input type="text" name="description" value={description} onChange={handleChange} />
//                 </label>
//                 <button>Submit</button>
//             </form>
//             {items.map((i) => <Card items={i} />)}
//         </div>
//     )
// }

// function Card({ items }) {
//     return (
//         <div>
//             <h4 style={{ color: 'red' }}>{items.title}</h4>
//             <p style={{ color: 'blue' }}>{items.description}</p>
//         </div>
//     )
// }

import { useState } from "react"
import "./App.css"
export default function Nav() {

    const [input, setInput] = useState([
        { id: 1, title: "React is an JS Library", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident." },
        { id: 2, title: "React is an JS Library", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident." },
        { id: 3, title: "React is an JS Library", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident." }
    ])
    const total = input.length;
    console.log(total)

    function handleDelete(id) {
        const updatedList = input.filter((input) => input.id !== id)
        setInput(updatedList)
    }



    return (
        <div>
            <Header total={total} />
            <Body input={input} setInput={setInput} handleDelete={handleDelete} />
            <Footer />
        </div>
    )
}

function Header({ total }) {
    return (
        <div className="header">
            <h3><span><svg fill="white" height="23px" width="25px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32" xml:space="preserve">
                <g>
                    <path d="M29,4h-6.4C20.3,4,18,4.6,16,5.8C14,4.6,11.7,4,9.4,4H3C2.4,4,2,4.4,2,5v18c0,0.6,0.4,1,1,1h6.4c2.2,0,4.3,0.6,6.1,1.8
		c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2c1.8-1.2,3.9-1.8,6.1-1.8H29c0.6,0,1-0.4,1-1V5C30,4.4,29.6,4,29,4z"/>
                    <path d="M27,26h-4.4c-2.3,0-4.6,0.6-6.6,1.8c-2-1.2-4.3-1.8-6.6-1.8H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h4.4c2.2,0,4.3,0.6,6.1,1.8
		c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2c1.8-1.2,3.9-1.8,6.1-1.8H27c0.6,0,1-0.4,1-1S27.6,26,27,26z"/>
                </g>
            </svg></span> <span>Sakthivel Stores</span></h3>
            <p>Total Books : <span className="spc-btn">{total}</span></p>
        </div>
    )
}

function Body({ input, setInput, handleDelete }) {

    return (
        <div className="body-wrapper">
            <Form setInput={setInput} />
            <span className="card-wrapper">{input.map((i) => <Card item={i} key={i} handleDelete={handleDelete} />)}</span>
        </div>
    )
}
function Form({ setInput }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'title') setTitle(value)
        if (name === 'description') setDescription(value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if ((title && description) === "") return;
        const id = { id: Date.now() }
        console.log(id)
        const newItem = {
            title, description, id
        }
        setInput((pre) => ([...pre, newItem]))
        setTitle("")
        setDescription("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4 style={{ textAlign: "center", fontSize: '30px', color: "white", fontFamily: "cursive", letterSpacing: "3px", padding: '5px 0px' }}>Adding New Books</h4>
            <label>Title of the book: <input type="text" name="title" value={title} onChange={handleChange} /></label>
            <label>Description of the book: <input type="text" name="description" value={description} onChange={handleChange} /></label>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><span>Add </span><span><svg fill="#000000" height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M405.3,277.3c0,11.8-9.5,21.3-21.3,21.3
	h-85.3V384c0,11.8-9.5,21.3-21.3,21.3h-42.7c-11.8,0-21.3-9.6-21.3-21.3v-85.3H128c-11.8,0-21.3-9.6-21.3-21.3v-42.7
	c0-11.8,9.5-21.3,21.3-21.3h85.3V128c0-11.8,9.5-21.3,21.3-21.3h42.7c11.8,0,21.3,9.6,21.3,21.3v85.3H384c11.8,0,21.3,9.6,21.3,21.3
	V277.3z"/>
            </svg></span></button>
        </form>
    )
}
function Card({ item, handleDelete }) {
    return (
        <div className="card">
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <div className="btn">
                <button onClick={() => alert(`Title of the book: ${item.title},

Description: ${item.description}`)}>More</button>
                <button className="del-btn" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
        </div>
    )
}
function Footer() {
    return (
        <div className="footer">
            <span>@Sakthivel Stores</span>
        </div>
    )
}