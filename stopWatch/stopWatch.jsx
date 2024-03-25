

function StopWatch() {
    return (
        <>
            <section className={"bg-pink-500 flex content-center items-center min-h-screen font-sans "}>
                <div className="container bg-white rounded-2xl p-5  shadow-lg  flex flex-col items-center md:w-[600px]">
                    <h1 className="text-3xl mb-5 font-bold antialiased">Stop Watch</h1>
                    <div className="text-4xl bg-white p-5 rounded-md drop-shadow-lg">
                        <span id="minutes" className={" inline-block text-center w-28"}>00</span>
                        <span id="seconds" className={" inline-block text-center w-28"}>00</span>
                        <span id="milliseconds" className={" inline-block text-center w-28"}>00</span>
                    </div>
                    <div className="flex mt-5 gap-4 ">
                        <button id="startBtn" className={"px-6 py-3 bg-pink-700 text-white border-0 rounded-lg cursor-pointer transition hover:bg-pink-300"}>Start</button>
                        <button id="stopBtn" className={"px-6 py-3 bg-pink-700 text-white border-0 rounded-lg cursor-pointer transition hover:bg-pink-300"}>Stop</button>
                        <button id="pauseBtn" className={"px-6 py-3 bg-pink-700 text-white border-0 rounded-lg cursor-pointer transition hover:bg-pink-300"}>Pause</button>
                        <button id="resetBtn" className={"px-6 py-3 bg-pink-700 text-white border-0 rounded-lg cursor-pointer transition hover:bg-pink-300"}>Reset</button>
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl">Lap Timer</h2>
                        <ul id="laplist" className={"list-none p-0 m-0 overflow-x-auto bg-white max-h-52 shadow-2xl rounded-xl"}>
                            <li className={"p-4 border-b-black"}></li>lap1: 01:45</ul>
                    </div>
                </div>

            </section>

        </>
    );
}

export default StopWatch;