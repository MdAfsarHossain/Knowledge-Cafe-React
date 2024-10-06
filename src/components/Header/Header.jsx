
const Header = () => {
    return (
        <div className="flex justify-between items-center  border-b-2 mb-5">
         <h1 className="text-4xl font-bold  py-5">Knowledge Cafe</h1>
         <div className="avatar cursor-pointer">
            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img className="rounded-full w-14" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        </div>
    );
};

export default Header;