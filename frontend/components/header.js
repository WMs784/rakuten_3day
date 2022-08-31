import Image from "next/image";

export default function Header() {
    return (<>
    <div className="header">
        <Image src="/tabigacha_logo.svg" className="headerImage" width={40} height={40}/>
    </div>
        </>
    );
}