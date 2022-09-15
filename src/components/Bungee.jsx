import { Button } from "./Button"

export const Bungee = () => {
    return (
        <div className="bg-white pt-[3.75rem] pb-12">
            <div className="socket-container mx-auto flex flex-col items-center">
                <h2 className="heading-2 text-center">How Bungee Uses Socket</h2>
                <p className="supportive-text text-center my-2">Bungee moves assets between chains in the most efficient way by plugging into the Socket Liquidity Meta-Layer</p>
                <Button variation={"black"}>Go to App</Button>
            </div>
        </div>
    )
}