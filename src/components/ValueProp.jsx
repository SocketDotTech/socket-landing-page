import rightArrow from "../assets/icons/right-arrow.svg";

const valuePropData = [
    {
        title: 'Easy to Develop On',
        desc: 'We’re obsessed with ensuring a great developer experience. Choose between the Socket APIs or the SDK, and take your app cross-chain in 20 mins.',
        url: 'https://salilnaik.com',
        icon: 'dekhte hai',
    },
    {
        title: 'True Composibility',
        desc: 'Connect different protocols on different layers together, compose with any protocol on any-chain, no limits.',
        url: 'https://salilnaik.com',
        icon: 'dekhte hai',
    },
    {
        title: 'Efficient Value Transfer',
        desc: 'Plug in to the biggest bridges and DEXs across chains and optimise for the parameters you care about, high outputs, low latency or trust minimisation',
        url: 'https://salilnaik.com',
        icon: 'dekhte hai',
    }
]

export const ValueProp = () => {
    return (
        <div className="bg-white pt-14 pb-10">
            <div className="container mx-auto">
                <p className="text-center text-socket-theme text-xl font-extrabold mb-1">Meet Socket</p>
                <h2 className="heading-2 text-center">Designed by developers, for developers</h2>
                <p className="supporting-text text-center mt-2">We obsess over every small design detail so you have a seamless developer experience while taking your dapps cross chain</p>
                <div className="flex gap-8 mt-14 px-14">
                    {valuePropData.map(item => <ValuePropCard title={item.title} desc={item.desc} url={item.url}/>)}
                </div>
            </div>
        </div>
    )
}

const ValuePropCard = ({title, desc, icon, url}) => {
    return (
        <div className="overlay-bg py-7 px-6 flex flex-col gap-11 justify-between flex-1">
            <div>
            <h3 className="text-2xl font-extrabold text-socket-gray-90 mb-2">{title}</h3>
            <p className="text-lg font-medium text-socket-gray-70">{desc}</p>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-socket-gray-90 font-extrabold text-lg flex items-center gap-2"><span>Learn More</span><img src={rightArrow} /></a>
        </div>
    )
}