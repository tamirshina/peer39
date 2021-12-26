import logo from '../assets/loader.gif';

export default function Loader() {

    return (
        <>
            <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full">
                <img src={logo.src} alt="loading..." className="h-[100px] w-[100px]" />
            </div>
        </>
    );
}