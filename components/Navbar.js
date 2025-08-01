import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="px-10 py-5 flex items-center justify-between">
            <div>
                <Image src={'/images/logo.png'} width={111} height={23} priority alt="CityWise" />
            </div>
            <div className="flex items-center gap-8">
                <button className="bg-[#E8EDF2] p-2.5 rounded-lg cursor-pointer">
                    <Image src={'/images/cog.png'} width={20} height={20} alt="settings" />
                </button>
                <Image src={'/images/user.png'} width={40} height={40} alt="user-profile-picture" className="cursor-pointer" />
            </div>
        </nav>
    )
}

export default Navbar