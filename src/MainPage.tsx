import { useState, useEffect } from 'react'
import { useAppDispatch } from './hooks'
import { addToCart } from './store/cartSlice'
import { addLiked } from './store/likedSlice'
import { Link } from 'react-router-dom'

export interface user {
    name: string,
    role: string,
    _id: string
}

export interface category {
    name: string,
    slug: string,
    _id: string
}

export interface data {
    category: category,
    createdAt: string,
    createdBy: user
    description: string,
    image: string,
    price: number,
    slug: string,
    title: string,
    updatedAt: string,
    _id: string
}

function makeHighLetter(str: string): string {
    let arr: Array<string> = str.split('')
    arr[0] = arr[0].toUpperCase()
    let result: string = ''
    arr.map((el: string) => {
        result += el
    })
    return result
}

export default function MainPage(): JSX.Element {
    const [data, setData]: Array<data> | Array<any> = useState([])
    useEffect(()=>{
        fetch('https://api.storerestapi.com/products')
            .then(response => response.json())
            .then(json => setData(json.data))
    }, [])
    const dispatch = useAppDispatch()
    function like(product: data): void{
        dispatch(addLiked(product))
    }
    
    function cart(product: data): void{
        dispatch(addToCart(product))
    }
    let render: JSX.Element = data.map((el: data) => {
        if(el.image === "" || el.image === undefined) {
            el.image = './images/NoImage.png'
        }
        el.title = makeHighLetter(el.title)
        return(
            <li key={el._id} className='widthCard h-96 p-5 rounded-lg bg-indigo-500'>
                <div className='flex w-full h-full flex-col aling-center justify-between'>
                    <img src={el.image} />
                    <h1 className='text-white text-base text-center mt-1'>{el.title}</h1>
                    <div className='flex flex-row justify-between px-3'>
                        <button onClick={() => like(el)} className='buttons'>
                            Like
                        </button>
                        <button onClick={() => cart(el)} className='buttons'>
                            Add to cart
                        </button>
                    </div>
                </div>
            </li>
        )
    })
    return(
    <>  
        <header className='w-screen h-20 bg-indigo-700 flex justify-center align-center'>
            <div className='width flex justify-between align-center'>
                <h1 className='text-white text-4xl'>React Shop</h1>
                <div className="flex flex-row gap-5 justify-between">
                    <Link to={'/cart'} className='text-white text-3xl border-2 w-fit h-fit rounded-md px-3 py-px hover:text-indigo-700 hover:bg-white duration-300'>Cart</Link>
                    <Link to={'/liked'} className='text-white text-3xl border-2 w-fit h-fit rounded-md px-3 py-px hover:text-indigo-700 hover:bg-white duration-300'>Liked</Link>
                </div>
            </div>
        </header>
        <main className='flex justify-center'>
            <div className='width flex gap-12 justify-between flex-wrap my-10'>{render}</div>
        </main>
        <footer className='w-screen h-20 bg-indigo-700 flex justify-center align-center'>
            <div className='width flex justify-evenly align-center'>
            </div>
        </footer>
    </>)
}