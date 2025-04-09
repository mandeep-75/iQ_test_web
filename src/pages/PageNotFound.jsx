
import { Link } from "react-router";

export const PageNotFound = () => {


    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/">
                        <button>back</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}