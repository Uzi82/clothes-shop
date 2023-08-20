import { useAppSelector, useAppDispatch } from "./hooks"
import { removeFromCart } from "./store/cartSlice"
import { Link } from "react-router-dom"

const Cart: React.FC = () => {
    const cart = useAppSelector(state => state.cart.val)
    const dispatch = useAppDispatch()
    return(
        <>
            <header className='w-screen h-20 bg-indigo-700 flex justify-center align-center'>
                <div className='width flex justify-between align-center'>
                    <h1 className='text-white text-4xl'>React Shop</h1>
                    <div className="flex flex-row gap-5 justify-between">
                        <Link to={'/'} className='text-white text-3xl border-2 w-fit h-fit rounded-md px-3 py-px hover:text-indigo-700 hover:bg-white duration-300'>Main</Link>
                        <Link to={'/liked'} className='text-white text-3xl border-2 w-fit h-fit rounded-md px-3 py-px hover:text-indigo-700 hover:bg-white duration-300'>Liked</Link>
                    </div>
                </div>
            </header>
            <main className='flex justify-center'>
                    {
                        cart.length > 0 ?
                            <div className="width flex gap-12 justify-between flex-wrap my-10">
                                {cart.map(el => {
                                    return(
                                        <div key={el._id} className='widthCard h-96 p-5 rounded-lg bg-indigo-500'>
                                            <div className='flex w-full h-full flex-col aling-center justify-between'>
                                                <img src={el.image} />
                                                <h1 className='text-white text-base text-center mt-1'>{el.title}</h1>
                                                <div className='flex flex-row justify-between px-3'>
                                                    <button onClick={() => dispatch(removeFromCart(el._id))} className='buttons'>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        :
                            <h1 className="width text-center my-10 text-5xl text-indigo-700">No cart yet</h1>
                    }
            </main>
        </>
    )
}
export default Cart